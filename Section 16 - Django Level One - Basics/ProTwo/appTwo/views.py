from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    dict1 = {'dynamic_para':'This is a dynamic line'} 
    return render(request, 'AppTwo/index.html', context=dict1)
