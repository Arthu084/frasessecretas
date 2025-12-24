'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function QuizDesirePage() {
  const desireImage = PlaceHolderImages.find((img) => img.id === 'desire');

  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center justify-start text-white font-sans p-4">
      <div className="w-full max-w-md mx-auto mt-4">
        <div className="relative h-2 w-full bg-zinc-700 rounded-full">
          <div
            className="absolute top-0 left-0 h-full bg-red-600 rounded-full"
            style={{ width: '100%' }}
          ></div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center text-center mt-8 flex-grow">
        {desireImage && (
          <div className="relative w-[180px] h-[100px] mb-8">
            <Image
              src={desireImage.imageUrl}
              alt={desireImage.description}
              width={180}
              height={100}
              className="rounded-md object-cover"
              data-ai-hint={desireImage.imageHint}
            />
             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
          </div>
        )}

        <h1 className="text-xl font-bold leading-tight">Se você pudesse usar técnicas comprovadas para despertar o desejo de um homem, como isso mudaria sua vida amorosa?</h1>
        <p className="text-zinc-400 mt-4">Selecione a sua resposta</p>

        <div className="flex flex-col gap-4 mt-8 w-full max-w-sm">
          <Button
            className="w-full text-base py-6 px-6 rounded-lg text-white whitespace-normal h-auto"
            style={{
                background: 'linear-gradient(to right, #dc2626, #b91c1c)',
                border: '1px solid #ef4444',
            }}
          >
            Mudaria completamente. Me sentiria poderosa e desejada
          </Button>
          <Button
            className="w-full text-base py-6 px-6 rounded-lg text-white whitespace-normal h-auto"
            style={{
                background: 'linear-gradient(to right, #dc2626, #b91c1c)',
                border: '1px solid #ef4444',
            }}
          >
            Melhoraria muito. Finalmente teria a atenção que mereço
          </Button>
          <Button
            className="w-full text-base py-6 px-6 rounded-lg text-white whitespace-normal h-auto"
            style={{
                background: 'linear-gradient(to right, #dc2626, #b91c1c)',
                border: '1px solid #ef4444',
            }}
          >
            Faria uma grande diferença. Me sentiria mais confiante nos meus relacionamentos
          </Button>
        </div>
      </div>

      <div className="flex justify-between w-full max-w-md mx-auto mt-8">
        <Link href="/quiz/question-2">
          <Button variant="outline" size="icon">
            <ArrowLeft />
          </Button>
        </Link>
        <Link href="#">
          <Button variant="outline" size="icon">
            <ArrowRight />
          </Button>
        </Link>
      </div>
    </div>
  );
}
