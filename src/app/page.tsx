
'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';

export default function QuizPage() {
  const secretImage = PlaceHolderImages.find((img) => img.id === 'secret');

  return (
    <div className="relative min-h-screen w-full bg-black flex flex-col items-center justify-start text-white font-sans">
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

      <div className="relative z-10 flex flex-col items-center justify-center text-center p-4 mt-28">
        <h1 className="text-2xl md:text-3xl font-bold leading-tight">
          Descubra como deixar
          <br />
          ele <span className="text-red-500">obcecado</span> por você
          <br />
          apenas usando essas
          <br />
          “<span className="text-blue-500">FRASES DISCRETAS</span>”
        </h1>

        <p className="mt-8 text-lg md:text-xl max-w-md">
          Responda <span className="font-bold">3 perguntas rápidas</span> para
          <br />
          saber se você está pronta para ter
          <br />
          acesso a esse segredo das mulheres.
        </p>

        <p className="mt-4 text-base font-semibold">
          Levará menos de 30 segundos
        </p>

        <Link href="/quiz">
          <Button className="mt-8 bg-red-500 hover:bg-red-600 text-white font-bold text-xl py-6 px-12 rounded-lg shadow-lg shadow-red-500/50 transition-all duration-300 transform hover:scale-105">
            SIM, VAMOS COMEÇAR!
          </Button>
        </Link>
      </div>
    </div>
  );
}
