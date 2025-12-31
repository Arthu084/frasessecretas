
'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function ResultsPage() {
  const finalLink = "/oferta";

  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center text-white font-sans p-4">
      <div className="w-full max-w-md mx-auto absolute top-0 mt-8">
        <div className="relative h-2 w-full bg-zinc-700 rounded-full">
          <div
            className="absolute top-0 left-0 h-full bg-red-600 rounded-full"
            style={{ width: '100%' }}
          ></div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-center">
        
        <div className="mt-12">
          <Image
              src="https://i.imgur.com/EhUv9ej.png"
              alt="Troféu"
              width={80}
              height={80}
              className="mb-4"
          />
        </div>

        <h1 className="text-lg md:text-lg font-bold leading-tight">
          ACESSO CONFIRMADO
        </h1>
        
        <h2 className="text-2xl md:text-3xl leading-tight mt-2">
            <span className="font-normal">Você foi Selecionada<br/>para desbloquear o</span><br/><span className="text-red-500 font-bold uppercase">SEGREDO DA SEDUÇÃO</span>
        </h2>

        <p className="mt-8 text-base max-w-lg">
          Você vai descobrir o que dizer, <br />
          quando dizer e o que evitar para <br />
          gerar interesse sem se expor demais.
        </p>

        <h3 className="text-base font-normal mt-10">
          O próximo passo revela o método <br/>
          completo que quase ninguém conhece.
        </h3>
        
        <Link href={finalLink}>
            <Button 
                className="mt-8 bg-red-500 hover:bg-red-600 text-white font-bold text-lg py-6 px-10 rounded-lg shadow-lg shadow-red-500/50 transition-all duration-300 transform hover:scale-105"
            >
                QUERO CONTINUAR
            </Button>
        </Link>
      </div>
    </div>
  );
}
