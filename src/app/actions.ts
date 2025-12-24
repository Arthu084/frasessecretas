'use server';

import {
  analyzeFunnelScreenshot,
  AnalyzeFunnelScreenshotOutput,
} from '@/ai/flows/analyze-funnel-screenshot';

export async function handleAnalyzeScreenshot(
  photoDataUri: string
): Promise<
  | { success: true; data: AnalyzeFunnelScreenshotOutput }
  | { success: false; error: string }
> {
  try {
    if (!photoDataUri) {
      return { success: false, error: 'No image data provided.' };
    }
    const result = await analyzeFunnelScreenshot({ photoDataUri });
    if (!result || !result.steps || result.steps.length === 0) {
      return { success: false, error: 'The AI could not identify any funnel steps in the image. Please try a different screenshot.' };
    }
    return { success: true, data: result };
  } catch (e) {
    console.error('Funnel analysis failed:', e);
    return {
      success: false,
      error: 'An unexpected error occurred while analyzing the funnel. Please try again later.',
    };
  }
}
