'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function QuizPage() {
  return (
    <div className="relative min-h-screen w-full bg-black flex flex-col items-center justify-start text-white font-sans">
      <div className="absolute top-0 left-0 w-full h-1/3">
        <Image
          src="https://picsum.photos/seed/secret/800/600"
          alt="Mulher com o dedo nos lábios em sinal de silêncio"
          fill
          style={{ objectFit: 'cover' }}
          className="opacity-50"
          data-ai-hint="woman secret"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 pt-48">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
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

        <Button className="mt-8 bg-green-500 hover:bg-green-600 text-white font-bold text-xl py-6 px-12 rounded-lg shadow-lg shadow-green-500/50 transition-all duration-300 transform hover:scale-105">
          SIM, VAMOS COMEÇAR!
        </Button>
      </div>
    </div>
  );
}
