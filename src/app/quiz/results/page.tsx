'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function ResultsPage() {
  const finalLink = "/oferta";

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
      <div className="flex flex-col items-center justify-center text-center flex-grow">
        
        <Image
            src="https://i.imgur.com/EhUv9ej.png"
            alt="Troféu"
            width={80}
            height={80}
            className="mb-8"
        />

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
      <div className="flex justify-start w-full max-w-md mx-auto mt-8">
      </div>
    </div>
  );
}
