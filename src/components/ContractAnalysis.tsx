import React, { useState } from 'react';
import { AlertTriangle, Info, Check } from 'lucide-react';
import { AnalysisResult, RiskLevel, ClauseAnalysis } from '../types';
import { ClauseCard } from './ClauseCard';

interface ContractAnalysisProps {
  analysis: AnalysisResult;
  contractText: string;
}

export const ContractAnalysis: React.FC<ContractAnalysisProps> = ({ analysis, contractText }) => {
  const [activeFilter, setActiveFilter] = useState<RiskLevel | 'all'>('all');

  const getFilteredClauses = () => {
    if (activeFilter === 'all') {
      return analysis.clauses;
    }
    return analysis.clauses.filter(clause => clause.riskLevel === activeFilter);
  };

  const filteredClauses = getFilteredClauses();
  
  const riskCounts = {
    high: analysis.clauses.filter(c => c.riskLevel === 'high').length,
    medium: analysis.clauses.filter(c => c.riskLevel === 'medium').length,
    low: analysis.clauses.filter(c => c.riskLevel === 'low').length,
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-4 border-b">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              activeFilter === 'all'
                ? 'bg-gray-200 text-gray-800'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            All ({analysis.clauses.length})
          </button>
          
          <button
            onClick={() => setActiveFilter('high')}
            className={`px-3 py-1 rounded-full text-sm font-medium flex items-center ${
              activeFilter === 'high'
                ? 'bg-red-100 text-red-800'
                : 'bg-gray-100 text-gray-600 hover:bg-red-50'
            }`}
          >
            <AlertTriangle className="h-3.5 w-3.5 mr-1" />
            High Risk ({riskCounts.high})
          </button>
          
          <button
            onClick={() => setActiveFilter('medium')}
            className={`px-3 py-1 rounded-full text-sm font-medium flex items-center ${
              activeFilter === 'medium'
                ? 'bg-amber-100 text-amber-800'
                : 'bg-gray-100 text-gray-600 hover:bg-amber-50'
            }`}
          >
            <Info className="h-3.5 w-3.5 mr-1" />
            Medium Risk ({riskCounts.medium})
          </button>
          
          <button
            onClick={() => setActiveFilter('low')}
            className={`px-3 py-1 rounded-full text-sm font-medium flex items-center ${
              activeFilter === 'low'
                ? 'bg-green-100 text-green-800'
                : 'bg-gray-100 text-gray-600 hover:bg-green-50'
            }`}
          >
            <Check className="h-3.5 w-3.5 mr-1" />
            Low Risk ({riskCounts.low})
          </button>
        </div>
      </div>

      <div className="divide-y divide-gray-200">
        {filteredClauses.length > 0 ? (
          filteredClauses.map((clause, index) => (
            <ClauseCard 
              key={index} 
              clause={clause}
              contractText={contractText}
            />
          ))
        ) : (
          <div className="p-6 text-center text-gray-500">
            No clauses match the selected filter.
          </div>
        )}
      </div>
    </div>
  );
};