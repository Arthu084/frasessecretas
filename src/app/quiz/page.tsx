'use client';

import { Button } from '@/components/ui/button';
import { Man, PersonStanding, Woman } from 'lucide-react';

const GenderIcon = () => (
  <div className="flex items-center justify-center space-x-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      viewBox="0 0 24 24"
      fill="#3b82f6"
      stroke="white"
      strokeWidth="0"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="6" r="4" fill="white" />
      <path
        d="M12 10c-2.2 0-4 1.8-4 4v8h8v-8c0-2.2-1.8-4-4-4z"
        fill="white"
      />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      viewBox="0 0 24 24"
      fill="#ec4899"
      stroke="white"
      strokeWidth="0"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="6" r="4" fill="white" />
      <path
        d="M12 10c-2.2 0-4 1.8-4 4v2h2.5l-1.5 6h6l-1.5-6H16v-2c0-2.2-1.8-4-4-4z"
        fill="white"
      />
    </svg>
  </div>
);

export default function QuizGenderPage() {
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

      <div className="flex flex-col items-center justify-center text-center mt-16 flex-grow">
        <GenderIcon />

        <h1 className="text-3xl font-bold mt-8">Qual o seu gênero?</h1>
        <p className="text-zinc-400 mt-2">Selecione a sua resposta</p>

        <div className="flex flex-col gap-4 mt-8 w-full max-w-sm">
          <Button
            className="w-full text-lg py-6 rounded-lg font-bold text-white"
            style={{
              background: 'linear-gradient(to right, #c026d3, #a21caf)',
              border: '1px solid #c026d3',
            }}
          >
            MULHER
          </Button>
          <Button
            className="w-full text-lg py-6 rounded-lg font-bold text-white"
            style={{
              background: 'linear-gradient(to right, #4f46e5, #3730a3)',
              border: '1px solid #4f46e5',
            }}
          >
            HOMEM
          </Button>
          <Button
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
    </div>
  );
}
