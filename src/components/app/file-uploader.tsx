'use client';

import { UploadCloud } from 'lucide-react';
import React, { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';

type FileUploaderProps = {
  onFileSelect: (file: File) => void;
  disabled?: boolean;
};

export function FileUploader({ onFileSelect, disabled }: FileUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onFileSelect(file);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    if (disabled) return;

    const file = event.dataTransfer.files?.[0];
    if (file) {
      onFileSelect(file);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleClick = () => {
    if (disabled) return;
    fileInputRef.current?.click();
  };

  return (
    <Card
      className="group transition-all duration-300 ease-in-out hover:shadow-xl hover:border-primary"
      onClick={handleClick}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <CardContent className="p-6">
        <div className="relative border-2 border-dashed border-muted-foreground/30 rounded-lg p-8 md:p-12 text-center transition-colors duration-300 group-hover:border-primary/80 cursor-pointer">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/png, image/jpeg, image/webp"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            onChange={handleFileChange}
            disabled={disabled}
          />
          <div className="flex flex-col items-center gap-4">
            <UploadCloud className="w-12 h-12 text-muted-foreground transition-colors duration-300 group-hover:text-primary" />
            <div className="space-y-1">
                <p className="font-semibold text-foreground text-lg">
                Drag & drop a screenshot here
                </p>
                <p className="text-muted-foreground">
                or click to select a file from your computer
                </p>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              PNG, JPG, or WEBP files supported
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
