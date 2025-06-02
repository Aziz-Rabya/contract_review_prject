import React, { useState } from 'react';
import { AlertTriangle, Info, Check, ChevronDown, ChevronUp } from 'lucide-react';
import { ClauseAnalysis } from '../types';

interface ClauseCardProps {
  clause: ClauseAnalysis;
  contractText: string;
}

export const ClauseCard: React.FC<ClauseCardProps> = ({ clause, contractText }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(clause.riskLevel === 'high');
  
  const getRiskIcon = () => {
    switch (clause.riskLevel) {
      case 'high':
        return <AlertTriangle className="h-5 w-5 text-red-500" />;
      case 'medium':
        return <Info className="h-5 w-5 text-amber-500" />;
      case 'low':
        return <Check className="h-5 w-5 text-green-500" />;
    }
  };

  const getRiskBadgeColor = () => {
    switch (clause.riskLevel) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-amber-100 text-amber-800';
      case 'low':
        return 'bg-green-100 text-green-800';
    }
  };

  const getClauseText = () => {
    // In a real implementation, we would extract the exact text from the contract
    // using the start and end indices. For the mock, we'll return the sample text.
    return clause.text;
  };

  return (
    <div className="p-4 hover:bg-gray-50 transition-colors">
      <div 
        className="flex items-start justify-between cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start space-x-3">
          {getRiskIcon()}
          <div>
            <h3 className="font-medium text-gray-900">{clause.title}</h3>
            <div className="flex items-center mt-1 space-x-2">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getRiskBadgeColor()}`}>
                {clause.riskLevel.charAt(0).toUpperCase() + clause.riskLevel.slice(1)} Risk
              </span>
              <span className="text-sm text-gray-500">
                {clause.category}
              </span>
            </div>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </button>
      </div>
      
      {isExpanded && (
        <div className="mt-4 pl-8">
          <div className="bg-gray-50 p-3 rounded-md border border-gray-200 mb-3 text-sm text-gray-700">
            {getClauseText()}
          </div>
          
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-1">Issue</h4>
              <p className="text-sm text-gray-700">{clause.issue}</p>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-1">Suggestion</h4>
              <p className="text-sm text-gray-700">{clause.suggestion}</p>
            </div>
            
            {clause.alternativeText && (
              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-1">Alternative Text</h4>
                <div className="bg-green-50 p-3 rounded-md border border-green-200 text-sm text-gray-700">
                  {clause.alternativeText}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};