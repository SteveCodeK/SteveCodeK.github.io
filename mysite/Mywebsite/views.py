from django.http import HttpResponse
from django.shortcuts import render
from django.contrib.auth.models import User
from django.shortcuts import render

# Create your views here.

def home(response):
    return render(response, 'home.html', {})
