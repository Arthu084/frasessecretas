'use client';

import { useState } from 'react';
import { AppHeader } from '@/components/app/app-header';
import { FileUploader } from '@/components/app/file-uploader';
import { FunnelDisplay } from '@/components/app/funnel-display';
import { handleAnalyzeScreenshot } from './actions';
import type { AnalyzeFunnelScreenshotOutput } from '@/ai/flows/analyze-funnel-screenshot';
import { Loader2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';

export default function Home() {
  const [analysis, setAnalysis] = useState<AnalyzeFunnelScreenshotOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [image, setImage] = useState<string | null>(null);

  const handleAnalysis = async (file: File) => {
    if (!file) return;

    setIsLoading(true);
    setError(null);
    setAnalysis(null);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      const photoDataUri = reader.result as string;
      setImage(photoDataUri);
      const result = await handleAnalyzeScreenshot(photoDataUri);
      if (result.success) {
        setAnalysis(result.data);
      } else {
        setError(result.error);
      }
      setIsLoading(false);
    };
    reader.onerror = () => {
      setError('Failed to read the file.');
      setIsLoading(false);
    };
  };
  
  const handleReset = () => {
    setAnalysis(null);
    setIsLoading(false);
    setError(null);
    setImage(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background font-sans">
      <AppHeader />
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-8 md:py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4 font-headline">
            Clone Any Funnel with AI
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Upload a screenshot of any sales funnel, and our AI will analyze its structure, text, and elements to help you recreate it in minutes.
          </p>
        </div>

        {analysis && (
          <div className="text-center mb-8">
            <Button onClick={handleReset}>Start Over</Button>
          </div>
        )}

        <div className="space-y-8">
          {!analysis && !isLoading && (
            <FileUploader onFileSelect={handleAnalysis} disabled={isLoading} />
          )}

          {isLoading && (
            <div className="flex flex-col items-center justify-center gap-4 p-8 rounded-lg border bg-card text-card-foreground shadow-sm">
              <Loader2 className="w-12 h-12 text-primary animate-spin" />
              <p className="text-lg font-medium text-muted-foreground">AI is analyzing your funnel... this may take a moment.</p>
            </div>
          )}

          {error && (
            <Alert variant="destructive">
              <AlertTitle>Analysis Failed</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {analysis && image && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
               <div>
                <h2 className="text-2xl font-bold mb-4 font-headline">Your Funnel Screenshot</h2>
                <div className="overflow-hidden rounded-lg border shadow-lg">
                  <img src={image} alt="Funnel screenshot" className="w-full h-auto" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4 font-headline">AI Analysis Results</h2>
                <FunnelDisplay analysis={analysis} />
              </div>
            </div>
          )}
        </div>
      </main>
      <footer className="py-6 text-center text-muted-foreground text-sm">
        <p>FunnelFlow AI</p>
      </footer>
    </div>
  );
}
