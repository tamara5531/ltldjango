from django.shortcuts import render, redirect

def index(request):

     return render(request,'core/index.html') 


def nosotros(request):
    return render(request, 'core/nosotros.html')
def blusas(request):
    return render(request, 'core/blusas.html')
def vestidos(request):
    return render(request, 'core/vestidos.html')
def faldas(request):
    return render(request, 'core/faldas.html')
def blusassale(request):
    return render(request, 'core/blusassale.html')
def vestidossales(request):
    return render(request, 'core/vestidossales.html')
def faldassale(request):
    return render(request, 'core/faldassale.html')
def contacto(request):
    return render(request, 'core/contacto.html')
# Create your views here.
