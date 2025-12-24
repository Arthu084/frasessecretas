'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';

export default function QuizPage() {
  const secretImage = PlaceHolderImages.find((img) => img.id === 'secret');

  return (
    <div className="relative min-h-screen w-full bg-black flex flex-col items-center justify-center text-white font-sans">
      {secretImage && (
        <Image
          src={secretImage.imageUrl}
          alt={secretImage.description}
          fill
          style={{ objectFit: 'cover' }}
          className="opacity-30"
          data-ai-hint={secretImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight">
          Descubra como deixar <br /> ele <span className="text-red-500">obcecado</span> por você
        </h1>

        <h2 className="text-2xl md:text-3xl font-bold mt-6">
          Apenas usando essa <br />
          <span className="text-cyan-400">“FRASE DISCRETA”</span>
        </h2>

        <p className="mt-8 text-lg md:text-xl max-w-md">
          Responda este pequeno questionário para saber se está pronta para ter acesso a esse segredo...
        </p>

        <p className="mt-4 text-base font-semibold">
          Levará menos de 1 minuto
        </p>

        <Link href="/quiz">
          <Button className="mt-8 bg-green-500 hover:bg-green-600 text-white font-bold text-xl py-6 px-12 rounded-lg shadow-lg shadow-green-500/50 transition-all duration-300 transform hover:scale-105">
            SIM, VAMOS COMEÇAR!
          </Button>
        </Link>
      </div>
    </div>
  );
}
