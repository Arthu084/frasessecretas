'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useRouter } from 'next/navigation';

export default function QuizConfidencePage() {
  const router = useRouter();
  const confidenceImage = PlaceHolderImages.find((img) => img.id === 'confidence');
  
  const handleNext = () => {
    router.push('/quiz/question-3');
  };

  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center justify-start text-white font-sans p-4">
      <div className="w-full max-w-md mx-auto mt-4">
        <div className="relative h-2 w-full bg-zinc-700 rounded-full">
          <div
            className="absolute top-0 left-0 h-full bg-red-600 rounded-full"
            style={{ width: '66%' }}
          ></div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center text-center flex-grow mt-2">
        {confidenceImage && (
            <Image
              src={confidenceImage.imageUrl}
              alt={confidenceImage.description}
              width={200}
              height={200}
              className="rounded-md object-cover"
              data-ai-hint={confidenceImage.imageHint}
            />
        )}

        <h1 className="text-xl font-bold leading-tight mt-8">Você gostaria de se sentir mais segura e confiante ao interagir com qualquer homem?</h1>
        <p className="text-zinc-400 mt-4">Selecione a sua resposta</p>

        <div className="flex flex-col gap-4 mt-8 w-full max-w-sm">
          <Button
            onClick={handleNext}
            className="w-full text-base py-6 px-6 rounded-lg text-white whitespace-normal h-auto justify-start text-left"
            style={{
              background: 'linear-gradient(to right, #dc2626, #b91c1c)',
              border: '1px solid #ef4444',
            }}
          >
            Sim, definitivamente. Isso me daria uma nova personalidade
          </Button>
          <Button
            onClick={handleNext}
            className="w-full text-base py-6 px-6 rounded-lg text-white whitespace-normal h-auto justify-start text-left"
            style={{
              background: 'linear-gradient(to right, #dc2626, #b91c1c)',
              border: '1px solid #ef4444',
            }}
          >
            Sim, muito. Me ajudaria a superar minha timidez e inseguranças
          </Button>
          <Button
            onClick={handleNext}
            className="w-full text-base py-6 px-6 rounded-lg text-white whitespace-normal h-auto justify-start text-left"
            style={{
                background: 'linear-gradient(to right, #dc2626, #b91c1c)',
                border: '1px solid #ef4444',
              }}
          >
            Sim, acho que seria ótimo. Me ajudaria a ser mais assertiva nos meus relacionamentos
          </Button>
        </div>
      </div>

      <div className="flex justify-between w-full max-w-md mx-auto mt-8">
        <Link href="/quiz">
          <Button variant="outline" size="icon">
            <ArrowLeft />
          </Button>
        </Link>
        <Link href="/quiz/question-3">
            <Button variant="outline" size="icon">
                <ArrowRight />
            </Button>
        </Link>
      </div>
    </div>
  );
}
