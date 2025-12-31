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
          ACESSO CONFIRMADO
        </h1>
        
        <h2 className="text-xl md:text-2xl font-bold leading-tight mt-2">
            Você foi Selecionada para<br/>desbloquear o <span className="text-red-500">Segredo da Sedução</span>
        </h2>

        <p className="mt-8 text-base md:text-lg max-w-md">
          Você vai descobrir o que dizer, <br />
          quando dizer e o que evitar para <br />
          gerar interesse sem se expor demais.
        </p>

        <h3 className="text-base md:text-lg font-normal mt-10">
          O próximo passo revela o método <br/>
          completo que quase ninguém conhece.
        </h3>
        
        <Link href={finalLink}>
            <Button 
                className="mt-8 bg-red-500 hover:bg-red-600 text-white font-bold text-xl py-6 px-12 rounded-lg shadow-lg shadow-red-500/50 transition-all duration-300 transform hover:scale-105"
            >
                QUERO CONTINUAR
            </Button>
        </Link>
      </div>
    </div>
  );
}
