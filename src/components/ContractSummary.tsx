import React from 'react';
import { AlertTriangle, Info, Check, Download, Share2 } from 'lucide-react';
import { AnalysisResult } from '../types';

interface ContractSummaryProps {
  analysis: AnalysisResult;
}

export const ContractSummary: React.FC<ContractSummaryProps> = ({ analysis }) => {
  const riskCounts = {
    high: analysis.clauses.filter(c => c.riskLevel === 'high').length,
    medium: analysis.clauses.filter(c => c.riskLevel === 'medium').length,
    low: analysis.clauses.filter(c => c.riskLevel === 'low').length,
  };

  const getOverallRiskColor = () => {
    if (analysis.overallRisk >= 7) return 'bg-red-100 text-red-800';
    if (analysis.overallRisk >= 4) return 'bg-amber-100 text-amber-800';
    return 'bg-green-100 text-green-800';
  };

  const getOverallRiskText = () => {
    if (analysis.overallRisk >= 7) return 'High Risk';
    if (analysis.overallRisk >= 4) return 'Medium Risk';
    return 'Low Risk';
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Contract Summary</h2>
            <p className="text-gray-600 mt-1">{analysis.documentType}</p>
          </div>
          <div className="flex space-x-2">
            <button className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 border border-gray-300 rounded-md px-3 py-1.5 hover:bg-gray-50 transition-colors">
              <Download className="h-4 w-4 mr-1" />
              Export
            </button>
            <button className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 border border-gray-300 rounded-md px-3 py-1.5 hover:bg-gray-50 transition-colors">
              <Share2 className="h-4 w-4 mr-1" />
              Share
            </button>
          </div>
        </div>

        <div className="mt-6 flex flex-col md:flex-row md:space-x-6">
          <div className="flex-1 mb-4 md:mb-0">
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium text-gray-900">Overall Risk Assessment</h3>
                <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-sm font-medium ${getOverallRiskColor()}`}>
                  {getOverallRiskText()}
                </span>
              </div>
              
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${
                    analysis.overallRisk >= 7 
                      ? 'bg-red-500' 
                      : analysis.overallRisk >= 4 
                        ? 'bg-amber-500' 
                        : 'bg-green-500'
                  }`}
                  style={{ width: `${(analysis.overallRisk / 10) * 100}%` }}
                ></div>
              </div>
              
              <p className="mt-3 text-sm text-gray-600">
                {analysis.summary}
              </p>
            </div>
          </div>
          
          <div className="flex-1">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-4">Issues Breakdown</h3>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-8">
                    <AlertTriangle className="h-5 w-5 text-red-500" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">High Risk</span>
                      <span className="text-sm text-gray-600">{riskCounts.high}</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full mt-1 overflow-hidden">
                      <div 
                        className="h-full bg-red-500"
                        style={{ width: `${(riskCounts.high / analysis.clauses.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-8">
                    <Info className="h-5 w-5 text-amber-500" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">Medium Risk</span>
                      <span className="text-sm text-gray-600">{riskCounts.medium}</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full mt-1 overflow-hidden">
                      <div 
                        className="h-full bg-amber-500"
                        style={{ width: `${(riskCounts.medium / analysis.clauses.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-8">
                    <Check className="h-5 w-5 text-green-500" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">Low Risk</span>
                      <span className="text-sm text-gray-600">{riskCounts.low}</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full mt-1 overflow-hidden">
                      <div 
                        className="h-full bg-green-500"
                        style={{ width: `${(riskCounts.low / analysis.clauses.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};