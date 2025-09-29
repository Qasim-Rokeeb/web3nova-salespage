'use server';

/**
 * @fileOverview AI-powered tool that automatically updates the available seat count for the current cohort.
 *
 * - updateSeatCount - A function that automatically updates the available seat count.
 * - UpdateSeatCountInput - The input type for the updateSeatCount function.
 * - UpdateSeatCountOutput - The return type for the updateSeatCount function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const UpdateSeatCountInputSchema = z.object({
  applicationsData: z
    .string()
    .describe(
      'Data representing cohort applications, including number of seats requested.'
    ),
  totalSeats: z.number().describe('The total number of seats available in the cohort.'),
});
export type UpdateSeatCountInput = z.infer<typeof UpdateSeatCountInputSchema>;

const UpdateSeatCountOutputSchema = z.object({
  availableSeats: z
    .number()
    .describe('The number of seats still available in the cohort.'),
  justification: z
    .string()
    .describe('Explanation of how the available seats were calculated.'),
});
export type UpdateSeatCountOutput = z.infer<typeof UpdateSeatCountOutputSchema>;

export async function updateSeatCount(input: UpdateSeatCountInput): Promise<UpdateSeatCountOutput> {
  return updateSeatCountFlow(input);
}

const prompt = ai.definePrompt({
  name: 'updateSeatCountPrompt',
  input: {schema: UpdateSeatCountInputSchema},
  output: {schema: UpdateSeatCountOutputSchema},
  prompt: `You are an AI assistant that helps calculate the number of available seats in a cohort.

You are given the following information:
- Total seats available: {{{totalSeats}}}
- Data on applications, including the number of seats requested: {{{applicationsData}}}

Calculate the number of available seats based on the applications data and the total seats available.
Provide a brief justification for your calculation.

Ensure the final answer for available seats is a number.

Output:
Available seats: <calculated_available_seats>
Justification: <explanation_of_calculation>`,
});

const updateSeatCountFlow = ai.defineFlow(
  {
    name: 'updateSeatCountFlow',
    inputSchema: UpdateSeatCountInputSchema,
    outputSchema: UpdateSeatCountOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
