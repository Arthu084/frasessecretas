import type { AnalyzeFunnelScreenshotOutput } from '@/ai/flows/analyze-funnel-screenshot';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Image,
  FileText,
  MousePointerSquare,
  Type,
  ChevronRight,
  HelpCircle,
} from 'lucide-react';
import { Badge } from '../ui/badge';

type FunnelStepCardProps = {
  step: AnalyzeFunnelScreenshotOutput['steps'][0];
};

const getElementIcon = (type: string) => {
  const lowerCaseType = type.toLowerCase();
  if (lowerCaseType.includes('button') || lowerCaseType.includes('cta')) {
    return <MousePointerSquare className="w-5 h-5 text-primary" />;
  }
  if (lowerCaseType.includes('form')) {
    return <FileText className="w-5 h-5 text-primary" />;
  }
  if (lowerCaseType.includes('image')) {
    return <Image className="w-5 h-5 text-primary" />;
  }
  if (lowerCaseType.includes('text') || lowerCaseType.includes('headline') || lowerCaseType.includes('copy')) {
    return <Type className="w-5 h-5 text-primary" />;
  }
  return <HelpCircle className="w-5 h-5 text-muted-foreground" />;
};

export function FunnelStepCard({ step }: FunnelStepCardProps) {
  return (
    <Card className="w-full shadow-md transition-shadow hover:shadow-xl">
      <CardHeader>
        <CardTitle className="text-xl font-headline">{step.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-sm mb-3 text-muted-foreground">Elements Identified</h4>
            <ul className="space-y-3">
              {step.elements.map((element, index) => (
                <li key={index} className="flex items-start gap-3 p-3 bg-secondary/50 rounded-md">
                  <div className="flex-shrink-0 mt-1">
                    {getElementIcon(element.type)}
                  </div>
                  <div>
                    <Badge variant="secondary" className="mb-1">{element.type}</Badge>
                    <p className="text-sm text-foreground">
                      {element.details}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {step.relationships && step.relationships.length > 0 && (
            <div>
              <h4 className="font-semibold text-sm mb-2 text-muted-foreground">Next Step Trigger</h4>
              <ul className="space-y-2">
                {step.relationships.map((rel, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <Badge variant="outline">{rel.type}</Badge>
                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                    <span className="font-medium">{rel.to}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
