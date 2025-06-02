import { AnalysisResult } from '../types';

export const mockContractAnalysis: AnalysisResult = {
  documentType: 'Freelance Services Agreement',
  overallRisk: 7.5,
  summary: 'This contract contains several high-risk clauses that significantly favor the client. The payment terms, revision policy, and intellectual property clauses are particularly concerning.',
  clauses: [
    {
      title: 'Unlimited Revisions',
      text: 'Freelancer agrees to provide unlimited revisions until Client is fully satisfied with the deliverables, at no additional cost.',
      startIndex: 1250,
      endIndex: 1350,
      category: 'Scope of Work',
      riskLevel: 'high',
      issue: 'Unlimited revisions with no additional compensation can lead to scope creep and unpaid work.',
      suggestion: 'Specify a limited number of revision rounds (e.g., 2-3 rounds) included in the base price, with additional revisions billed at your hourly or per-revision rate.',
      alternativeText: 'Freelancer will provide up to three (3) rounds of revisions based on the original project scope. Additional revision requests beyond the included rounds will be billed at Freelancer\'s standard hourly rate of $X.'
    },
    {
      title: 'Work-for-Hire IP Assignment',
      text: 'All work produced by Freelancer shall be considered "work made for hire" and all intellectual property rights shall automatically transfer to Client upon creation, without any additional compensation beyond the fees outlined in this agreement.',
      startIndex: 2150,
      endIndex: 2350,
      category: 'Intellectual Property',
      riskLevel: 'high',
      issue: 'This clause transfers all your IP rights without fair compensation and prevents you from reusing components of your work in future projects.',
      suggestion: 'Negotiate for a license-based approach instead of full transfer, or ensure proper compensation for the IP transfer.',
      alternativeText: 'Upon receipt of full payment, Freelancer grants Client an exclusive license to use the deliverables for their intended purpose. Freelancer retains the right to use the work in their portfolio and to reuse general concepts, code patterns, or non-client-specific elements in future projects.'
    },
    {
      title: 'Net-60 Payment Terms',
      text: 'Client shall pay all invoices within sixty (60) days of receipt. No late fees or interest will accrue on unpaid balances.',
      startIndex: 890,
      endIndex: 970,
      category: 'Payment Terms',
      riskLevel: 'high',
      issue: 'Net-60 payment terms are excessively long for freelance work, and the lack of late payment penalties removes incentives for timely payment.',
      suggestion: 'Negotiate for Net-15 or Net-30 payment terms with late payment penalties (e.g., 1.5% per month after due date).',
      alternativeText: 'Client shall pay all invoices within fifteen (15) business days of receipt. Late payments will incur a late fee of 1.5% per month on any outstanding balance.'
    },
    {
      title: 'Termination Clause',
      text: 'Client may terminate this agreement at any time for any reason upon written notice to Freelancer. Upon termination, Client shall only be responsible for payment of approved deliverables completed prior to termination.',
      startIndex: 3100,
      endIndex: 3250,
      category: 'Termination',
      riskLevel: 'medium',
      issue: 'This one-sided termination clause allows the client to cancel at any time without compensation for work in progress.',
      suggestion: 'Add a kill fee or similar protection to ensure you\'re compensated for time invested in projects that are terminated.',
      alternativeText: 'Either party may terminate this agreement with 7 days written notice. Upon termination by Client, Client shall pay for all completed work plus 50% of the fee for any work in progress at the time of termination.'
    },
    {
      title: 'Non-Compete Clause',
      text: 'During the term of this agreement and for twelve (12) months thereafter, Freelancer shall not provide similar services to any of Client\'s competitors, as determined by Client in its sole discretion.',
      startIndex: 4200,
      endIndex: 4350,
      category: 'Restrictive Covenants',
      riskLevel: 'medium',
      issue: 'The non-compete is overly broad and could prevent you from working with many potential clients in your industry.',
      suggestion: 'Either remove the non-compete entirely or limit it to a specific, narrowly defined set of direct competitors for a shorter period.',
      alternativeText: 'Freelancer agrees not to work on substantially similar projects for Client\'s three primary competitors (as listed in Exhibit A) for a period of three (3) months following completion of the project.'
    },
    {
      title: 'Indemnification Clause',
      text: 'Freelancer shall indemnify, defend, and hold harmless Client from and against any and all claims, damages, liabilities, costs, and expenses arising from or relating to Freelancer\'s performance under this agreement.',
      startIndex: 5100,
      endIndex: 5250,
      category: 'Liability',
      riskLevel: 'medium',
      issue: 'This one-sided indemnification places all liability on you without any reciprocal protection.',
      suggestion: 'Make the indemnification mutual, or limit your liability to issues directly caused by your negligence and cap it at the total amount paid under the contract.',
      alternativeText: 'Each party shall indemnify the other against claims arising from their own negligent acts or omissions. Freelancer\'s total liability under this agreement shall not exceed the total fees paid by Client.'
    },
    {
      title: 'Confidentiality Clause',
      text: 'Freelancer shall maintain the confidentiality of all proprietary information disclosed by Client during the term of this agreement and for five (5) years thereafter.',
      startIndex: 1800,
      endIndex: 1900,
      category: 'Confidentiality',
      riskLevel: 'low',
      issue: 'Five-year confidentiality term is longer than typical for freelance work but not unreasonable.',
      suggestion: 'Consider negotiating for a shorter term (1-3 years) for confidentiality obligations.',
      alternativeText: 'Freelancer shall maintain the confidentiality of all proprietary information disclosed by Client during the term of this agreement and for two (2) years thereafter.'
    },
    {
      title: 'Portfolio Rights',
      text: 'Freelancer may include a general description of the services provided under this agreement in their portfolio, but shall not use Client\'s name or any Client materials without prior written approval.',
      startIndex: 2700,
      endIndex: 2850,
      category: 'Intellectual Property',
      riskLevel: 'low',
      issue: 'Requiring written approval for portfolio use could make it difficult to showcase your work.',
      suggestion: 'Specify that approval for portfolio use shall not be unreasonably withheld or delayed.',
      alternativeText: 'Freelancer may include a general description of the services provided under this agreement in their portfolio and may use Client\'s name and representative samples of the deliverables for portfolio purposes. If Client has specific confidentiality concerns, they will provide these in writing, and Freelancer will accommodate reasonable restrictions.'
    }
  ]
};