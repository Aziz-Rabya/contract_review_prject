def analyze_contract(content):
    # Mock analysis function - in production, this would integrate with GPT-4
    return {
        "documentType": "Freelance Services Agreement",
        "overallRisk": 7.5,
        "summary": "This contract contains several high-risk clauses that significantly favor the client.",
        "clauses": [
            {
                "title": "Unlimited Revisions",
                "text": content[:100],  # Just for demo
                "category": "Scope of Work",
                "riskLevel": "high",
                "issue": "Unlimited revisions with no additional compensation can lead to scope creep.",
                "suggestion": "Specify a limited number of revision rounds included in the base price."
            }
        ]
    }