'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronDown, Download } from 'lucide-react';
import { useQRCode } from 'next-qrcode';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';

export default function GenerateQrCode() {
  const [inputValue, setInputValue] = useState('');
  const [textToGenerate, setTextToGenerate] = useState('Created by Flamerson Andrade');
  const [selectedFormat, setSelectedFormat] = useState('PNG');
  const { Canvas, SVG } = useQRCode();

  const handleGenerate = () => {
    if (!inputValue) {
      alert("Please, write a text to generate.");
      return;
    }
    setTextToGenerate(inputValue);
    setInputValue('');
  };

  const handleDownload = () => {
    const canvas = document.querySelector('canvas');
    if (canvas) {
      canvas.toBlob((blob) => {
        if (blob) {
          const imageUrl = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.style.display = 'none';
          a.href = imageUrl;
          a.download = `qrcode.${selectedFormat.toLowerCase()}`;
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(imageUrl);
        }
      }, `image/${selectedFormat.toLowerCase()}`);
    } else {
      alert('No canvas found for downloading!');
    }
  };

  const handleFormatSelect = (format: string) => {
    setSelectedFormat(format);
  };

  return (
    <div className="max-w-md mx-auto p-6 space-y-6">
      <div className="flex space-x-2">
        <Input
          type="text"
          placeholder="Enter text to generate"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-grow"
        />
        <Button onClick={handleGenerate}>Generate</Button>
      </div>

      <div className="w-full p-1 aspect-[4/3] bg-gray-200 rounded-lg">
        <SVG
          text={textToGenerate}
        />
        <div className='invisible fixed'>
            <Canvas text={textToGenerate} />
        </div>
      </div>

      <Button onClick={handleDownload} className="w-full">
        <Download className="mr-2 h-4 w-4" /> Download
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="w-full">
            {selectedFormat} <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-full">
          <DropdownMenuItem onClick={() => handleFormatSelect('PNG')}>PNG</DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleFormatSelect('SVG')}>SVG</DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleFormatSelect('JPG')}>JPG</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
