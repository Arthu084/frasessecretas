'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ResultsPage() {
  // TODO: Add the correct link for the final button
  const finalLink = "/";

  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center text-white font-sans p-4">
      <div className="flex flex-col items-center justify-center text-center flex-grow">
        <h1 className="text-2xl md:text-3xl font-bold leading-tight">
          PARABÉNS, VOCÊ FOI <br/> SELECIONADA PARA TER <br/> ACESSO A ESSE <br/> <span className="text-red-500">SEGREDO DA SEDUÇÃO</span>
        </h1>

        <p className="mt-8 text-lg md:text-xl max-w-md">
          Você saberá exatamente quais passos seguir
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mt-10">
          VOCÊ ESTÁ PRONTA?
        </h2>
        
        <Link href={finalLink}>
            <Button 
                className="mt-8 bg-red-500 hover:bg-red-600 text-white font-bold text-xl py-6 px-12 rounded-lg shadow-lg shadow-red-500/50 transition-all duration-300 transform hover:scale-105"
            >
                SIM, QUERO CONTINUAR!
            </Button>
        </Link>
      </div>
      <div className="flex justify-between w-full max-w-md mx-auto mt-8">
        <Link href="/quiz/question-4">
          <Button variant="outline" size="icon">
            <ArrowLeft />
          </Button>
        </Link>
      </div>
    </div>
  );
}
