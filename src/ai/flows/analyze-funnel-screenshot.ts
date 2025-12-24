'use server';

/**
 * @fileOverview Analyzes a funnel screenshot to identify key steps, elements, and relationships.
 *
 * - analyzeFunnelScreenshot - A function that analyzes the funnel screenshot.
 * - AnalyzeFunnelScreenshotInput - The input type for the analyzeFunnelScreenshot function.
 * - AnalyzeFunnelScreenshotOutput - The return type for the analyzeFunnelScreenshot function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeFunnelScreenshotInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A screenshot of a sales funnel, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type AnalyzeFunnelScreenshotInput = z.infer<typeof AnalyzeFunnelScreenshotInputSchema>;

const AnalyzeFunnelScreenshotOutputSchema = z.object({
  steps: z.array(
    z.object({
      name: z.string().describe('The name of the funnel step.'),
      elements: z.array(
        z.object({
          type: z.string().describe('The type of element (e.g., button, form, image, text).'),
          details: z.string().describe('Detailed information about the element.'),
        })
      ).describe('Key elements within the funnel step.'),
      relationships: z.array(
        z.object({
          to: z.string().describe('The next step in the funnel.'),
          type: z.string().describe('The type of relationship (e.g., click, submit).'),
        })
      ).describe('Relationships to other funnel steps.'),
    })
  ).describe('Key steps in the sales funnel.'),
});
export type AnalyzeFunnelScreenshotOutput = z.infer<typeof AnalyzeFunnelScreenshotOutputSchema>;

export async function analyzeFunnelScreenshot(
  input: AnalyzeFunnelScreenshotInput
): Promise<AnalyzeFunnelScreenshotOutput> {
  return analyzeFunnelScreenshotFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzeFunnelScreenshotPrompt',
  input: {schema: AnalyzeFunnelScreenshotInputSchema},
  output: {schema: AnalyzeFunnelScreenshotOutputSchema},
  prompt: `You are an AI expert in analyzing sales funnels from screenshots.

  Analyze the provided screenshot and identify the key steps, elements, and relationships within the funnel.  Return the result in JSON format.

  Screenshot: {{media url=photoDataUri}}
  `,
});

const analyzeFunnelScreenshotFlow = ai.defineFlow(
  {
    name: 'analyzeFunnelScreenshotFlow',
    inputSchema: AnalyzeFunnelScreenshotInputSchema,
    outputSchema: AnalyzeFunnelScreenshotOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
