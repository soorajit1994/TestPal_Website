from django.shortcuts import render
import os
BASE_DIR = os.path.dirname(__file__)
import sys
sys.path.insert(1, os.path.join(BASE_DIR, 'engine'))
from django.http import HttpResponse
import StepRun
from django.http import JsonResponse
def base(request):
    return render(request,'base.html')
def index(request):
    return render(request,'index.html')
def Run_Step(request):
    if request.method=="GET":
        step=(request.GET['step'])
        status,objects=StepRun.run_step(step)
        
        return JsonResponse({"status":status,"objects":objects})