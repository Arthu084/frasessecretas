'use server';
/**
 * @fileOverview AI-powered funnel copy generator.
 *
 * - generateFunnelCopy - A function that generates copy for a sales funnel.
 * - GenerateFunnelCopyInput - The input type for the generateFunnelCopy function.
 * - GenerateFunnelCopyOutput - The return type for the generateFunnelCopy function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateFunnelCopyInputSchema = z.object({
  funnelType: z
    .string()
    .describe('The type of funnel (e.g., sales, lead generation, webinar registration).'),
  targetAudience: z
    .string()
    .describe('Description of the target audience for the funnel.'),
  element: z.string().describe('The specific element to generate copy for (e.g., headline, CTA, email subject line).'),
  keyDetails: z.string().describe('Additional details about the funnel, product, or offer.'),
});
export type GenerateFunnelCopyInput = z.infer<typeof GenerateFunnelCopyInputSchema>;

const GenerateFunnelCopyOutputSchema = z.object({
  copy: z.string().describe('The generated copy for the specified funnel element.'),
});
export type GenerateFunnelCopyOutput = z.infer<typeof GenerateFunnelCopyOutputSchema>;

export async function generateFunnelCopy(input: GenerateFunnelCopyInput): Promise<GenerateFunnelCopyOutput> {
  return generateFunnelCopyFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateFunnelCopyPrompt',
  input: {schema: GenerateFunnelCopyInputSchema},
  output: {schema: GenerateFunnelCopyOutputSchema},
  prompt: `You are an expert copywriter specializing in creating high-converting copy for sales funnels.

You will generate copy for the specified element within the funnel, taking into account the funnel type, target audience, and any key details provided.

Funnel Type: {{{funnelType}}}
Target Audience: {{{targetAudience}}}
Element: {{{element}}}
Key Details: {{{keyDetails}}}

Generated Copy:`, // Keep the prompt simple, the instructions are more important.
});

const generateFunnelCopyFlow = ai.defineFlow(
  {
    name: 'generateFunnelCopyFlow',
    inputSchema: GenerateFunnelCopyInputSchema,
    outputSchema: GenerateFunnelCopyOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
