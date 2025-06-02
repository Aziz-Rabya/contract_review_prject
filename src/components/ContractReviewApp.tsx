import React, { useState } from 'react';
import { ContractUploader } from './ContractUploader';
import { ContractAnalysis } from './ContractAnalysis';
import { ContractSummary } from './ContractSummary';
import { mockContractAnalysis } from '../data/mockContractAnalysis';
import { AnalysisResult } from '../types';

export const ContractReviewApp: React.FC = () => {
  const [step, setStep] = useState<'upload' | 'analyzing' | 'results'>('upload');
  const [contractText, setContractText] = useState<string>('');
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);

  const handleFileUpload = (text: string) => {
    setContractText(text);
    setStep('analyzing');
    
    // Simulate API call to analyze contract
    setTimeout(() => {
      setAnalysis(mockContractAnalysis);
      setStep('results');
    }, 2500);
  };

  const handleReset = () => {
    setContractText('');
    setAnalysis(null);
    setStep('upload');
  };

  return (
    <div className="max-w-4xl mx-auto">
      {step === 'upload' && (
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            AI Contract Review for Freelancers
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Upload your contract to identify unfair terms, hidden clauses, and potential risks
          </p>
          <ContractUploader onUpload={handleFileUpload} />
        </div>
      )}

      {step === 'analyzing' && (
        <div className="text-center p-12">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-indigo-600 border-t-transparent mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-900">Analyzing your contract...</h2>
          <p className="text-gray-600 mt-2">Our AI is reviewing the document for potential issues.</p>
        </div>
      )}

      {step === 'results' && analysis && (
        <div>
          <div className="mb-6">
            <button 
              onClick={handleReset}
              className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center"
            >
              ← Upload another contract
            </button>
          </div>
          
          <ContractSummary analysis={analysis} />
          
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Detailed Analysis</h2>
            <ContractAnalysis analysis={analysis} contractText={contractText} />
          </div>
        </div>
      )}
    </div>
  );
};