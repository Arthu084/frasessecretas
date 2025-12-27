'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function QuizGenderPage() {
  const router = useRouter();
  const handleNext = () => {
    router.push('/quiz/question-2');
  };
  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center justify-start text-white font-sans p-4">
      <div className="w-full max-w-md mx-auto mt-4">
        <div className="relative h-2 w-full bg-zinc-700 rounded-full">
          <div
            className="absolute top-0 left-0 h-full bg-red-600 rounded-full"
            style={{ width: '33%' }}
          ></div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center text-center mt-4 flex-grow">
        <Image
          src="https://i.imgur.com/7Nk42IW.png"
          alt="Ícones de Gênero"
          width={138}
          height={136}
        />

        <h1 className="text-3xl font-bold mt-8">Qual o seu gênero?</h1>
        <p className="text-zinc-400 mt-2">Selecione a sua resposta</p>

        <div className="flex flex-col gap-4 mt-8 w-full max-w-sm">
            <Button
              onClick={handleNext}
              className="w-full text-lg py-6 rounded-lg font-bold text-white"
              style={{
                background: 'linear-gradient(to right, #c026d3, #a21caf)',
                border: '1px solid #c026d3',
              }}
            >
              MULHER
            </Button>
            <Button
              onClick={handleNext}
              className="w-full text-lg py-6 rounded-lg font-bold text-white"
              style={{
                background: 'linear-gradient(to right, #4f46e5, #3730a3)',
                border: '1px solid #4f46e5',
              }}
            >
              HOMEM
            </Button>
            <Button
              onClick={handleNext}
              variant="outline"
              className="w-full text-lg py-6 rounded-lg font-bold text-zinc-300"
              style={{
                  background: 'linear-gradient(to right, #71717a, #52525b)',
                  border: '1px solid #71717a',
                }}
            >
              PREFIRO NÃO DIZER
            </Button>
        </div>
      </div>

      <div className="flex justify-end w-full max-w-md mx-auto mt-8">
        <Button variant="outline" size="icon" onClick={handleNext}>
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
}
