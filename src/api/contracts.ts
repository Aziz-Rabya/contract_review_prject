import axios from 'axios';
import { AnalysisResult } from '../types';

const API_URL = 'http://localhost:8000/api';

export const analyzeContract = async (content: string): Promise<AnalysisResult> => {
  const response = await axios.post(`${API_URL}/contracts/analyze/`, { content });
  return response.data;
};

export const saveContract = async (title: string, content: string, analysisResult: AnalysisResult) => {
  const response = await axios.post(`${API_URL}/contracts/`, {
    title,
    content,
    analysis_result: analysisResult
  });
  return response.data;
};