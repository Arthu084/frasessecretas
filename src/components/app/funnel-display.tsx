import type { AnalyzeFunnelScreenshotOutput } from '@/ai/flows/analyze-funnel-screenshot';
import { FunnelStepCard } from './funnel-step-card';
import { ArrowDown } from 'lucide-react';

type FunnelDisplayProps = {
  analysis: AnalyzeFunnelScreenshotOutput;
};

export function FunnelDisplay({ analysis }: FunnelDisplayProps) {
  return (
    <div className="flow-root">
        <ul className="-mb-8">
            {analysis.steps.map((step, index) => (
                <li key={index}>
                    <div className="relative pb-8">
                        {index !== analysis.steps.length - 1 ? (
                            <span className="absolute left-5 top-5 -ml-px h-full w-0.5 bg-border" aria-hidden="true"></span>
                        ) : null}
                        <div className="relative flex items-start space-x-3">
                            <div>
                                <div className="relative px-1">
                                    <div className="h-10 w-10 bg-primary rounded-full ring-8 ring-card flex items-center justify-center">
                                        <span className="text-primary-foreground font-bold text-lg">{index + 1}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="min-w-0 flex-1 py-1.5">
                                <FunnelStepCard step={step} />
                            </div>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    </div>
  );
}
