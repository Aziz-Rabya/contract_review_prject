export type RiskLevel = 'high' | 'medium' | 'low';

export interface ClauseAnalysis {
  title: string;
  text: string;
  startIndex: number;
  endIndex: number;
  category: string;
  riskLevel: RiskLevel;
  issue: string;
  suggestion: string;
  alternativeText?: string;
}

export interface AnalysisResult {
  documentType: string;
  overallRisk: number; // 1-10 scale
  summary: string;
  clauses: ClauseAnalysis[];
}