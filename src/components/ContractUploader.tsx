import React, { useState, useRef } from 'react';
import { Upload, FileText } from 'lucide-react';

interface ContractUploaderProps {
  onUpload: (text: string) => void;
}

export const ContractUploader: React.FC<ContractUploaderProps> = ({ onUpload }) => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [text, setText] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(e.target.files);
    }
  };

  const handleFiles = (files: FileList) => {
    const file = files[0];
    const reader = new FileReader();
    
    reader.onload = (event) => {
      if (event.target && typeof event.target.result === 'string') {
        setText(event.target.result);
      }
    };
    
    reader.readAsText(file);
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = () => {
    if (text.trim()) {
      onUpload(text);
    }
  };

  return (
    <div className="space-y-6">
      <div
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
          isDragging ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300 hover:border-indigo-400'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          accept=".txt,.pdf,.doc,.docx"
        />
        <div className="flex flex-col items-center justify-center cursor-pointer">
          <Upload className="h-12 w-12 text-indigo-500 mb-3" />
          <p className="text-lg font-medium text-gray-700">
            Drag & drop your contract file here
          </p>
          <p className="text-sm text-gray-500 mt-1">
            or click to browse your files
          </p>
          <p className="text-xs text-gray-400 mt-2">
            Supports .txt, .pdf, .doc, .docx files
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center mb-4">
          <FileText className="h-5 w-5 text-indigo-500 mr-2" />
          <h3 className="font-medium text-gray-800">Or paste your contract text below</h3>
        </div>
        <textarea
          className="w-full h-64 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Paste your contract text here..."
          value={text}
          onChange={handleTextAreaChange}
        ></textarea>
      </div>

      <div className="text-center">
        <button
          onClick={handleSubmit}
          disabled={!text.trim()}
          className={`px-6 py-3 rounded-md text-white font-medium transition-colors ${
            text.trim() 
              ? 'bg-indigo-600 hover:bg-indigo-700' 
              : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          Analyze Contract
        </button>
      </div>
    </div>
  );
};