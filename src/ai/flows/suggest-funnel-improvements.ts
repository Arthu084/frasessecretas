// This is a server-side file.
'use server';

/**
 * @fileOverview This file defines a Genkit flow for suggesting improvements to a sales funnel based on its screenshot analysis.
 *
 * It exports:
 * - `suggestFunnelImprovements`: An async function to generate funnel improvement suggestions.
 * - `SuggestFunnelImprovementsInput`: The TypeScript type for the input schema of the flow.
 * - `SuggestFunnelImprovementsOutput`: The TypeScript type for the output schema of the flow.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

// Define the input schema for the funnel analysis.
const SuggestFunnelImprovementsInputSchema = z.object({
  funnelDescription: z
    .string()
    .describe('A detailed description of the sales funnel, including steps, elements, and relationships.'),
});

export type SuggestFunnelImprovementsInput = z.infer<
  typeof SuggestFunnelImprovementsInputSchema
>;

// Define the output schema for the funnel improvement suggestions.
const SuggestFunnelImprovementsOutputSchema = z.object({
  suggestions: z
    .array(z.string())
    .describe('An array of suggested improvements for the sales funnel.'),
});

export type SuggestFunnelImprovementsOutput = z.infer<
  typeof SuggestFunnelImprovementsOutputSchema
>;

// Define the prompt for suggesting funnel improvements.
const suggestFunnelImprovementsPrompt = ai.definePrompt({
  name: 'suggestFunnelImprovementsPrompt',
  input: {schema: SuggestFunnelImprovementsInputSchema},
  output: {schema: SuggestFunnelImprovementsOutputSchema},
  prompt: `Based on the following description of a sales funnel, please provide a list of actionable suggestions to improve its design and flow, following established best practices for conversion rate optimization. Focus on clarity, user experience, and persuasive elements.

Funnel Description: {{{funnelDescription}}}

Suggestions:`, // Use handlebars syntax here
});

// Define the Genkit flow for suggesting funnel improvements.
const suggestFunnelImprovementsFlow = ai.defineFlow(
  {
    name: 'suggestFunnelImprovementsFlow',
    inputSchema: SuggestFunnelImprovementsInputSchema,
    outputSchema: SuggestFunnelImprovementsOutputSchema,
  },
  async input => {
    const {output} = await suggestFunnelImprovementsPrompt(input);
    return output!;
  }
);

/**
 * Asynchronously suggests improvements to a sales funnel based on a provided description.
 *
 * @param input - An object containing the funnel description.
 * @returns A promise that resolves to an object containing an array of improvement suggestions.
 */
export async function suggestFunnelImprovements(
  input: SuggestFunnelImprovementsInput
): Promise<SuggestFunnelImprovementsOutput> {
  return suggestFunnelImprovementsFlow(input);
}
