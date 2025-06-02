from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Contract
from .serializers import ContractSerializer
from .analysis import analyze_contract

class ContractViewSet(viewsets.ModelViewSet):
    queryset = Contract.objects.all()
    serializer_class = ContractSerializer

    @action(detail=False, methods=['post'])
    def analyze(self, request):
        content = request.data.get('content')
        if not content:
            return Response({'error': 'No content provided'}, status=400)
        
        analysis_result = analyze_contract(content)
        return Response(analysis_result)
