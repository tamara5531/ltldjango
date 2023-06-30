from django.shortcuts import render, redirect
from django.contrib.auth import logout
from django.contrib.auth.decorators import login_required
from .forms import CreacionUsuario, FormCliente, FormDespacho
from django.contrib.auth import authenticate, login
from .models import Cliente, Despacho


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
@login_required
def productos(request):
    datos = {
        'form': FormCliente()
    }

    if request.method=='POST':
        formulario= FormCliente(request.POST)
        if formulario.is_valid:
            formulario.save()
            datos['mensaje'] = "Guardado Correctamente"


    return render(request, 'core/productos.html', datos)


def crear_despacho(request):
    datos = {
        'form': FormDespacho()
    }

    if request.method == 'POST':
        formulario2 = FormDespacho(request.POST)
        if formulario2.is_valid:
            formulario2.save()
            datos['mensaje'] = "Guardado correctamente"

    return render(request, 'core/crear_despacho.html', datos)



        
def form_mod_cliente(request, id):
    modifcliente = Cliente.objects.get(id_cliente=id)
    datos = {
        'form': FormCliente(instance=modifcliente)
    }
    if request.method=='POST':
        formulario= FormCliente(data=request.POST, instance=modifcliente)
        if formulario.is_valid:
            formulario.save()
            datos['mensaje'] = "Modificado Correctamente"

    return render(request, 'core/form_mod_cliente.html', datos)        
        

def listar_mod_cliente(request):
    clientes = Cliente.objects.all()
    datos = {
        "clientes":clientes
    }
    return render(request, 'core/listar_mod_cliente.html',datos)




def elim_cliente(request, id):
    elim = Cliente.objects.get(id_cliente=id)
    datos = {
        'form': FormCliente(instance=elim)
    }

    if request.method=='POST':
        formulario=FormCliente(data=request.POST, instance=elim)
        elim.delete()
        datos['mensaje'] = "Eliminado correctamente"

    return render(request, 'core/elim_cliente.html', datos)


def form_mod_despacho(request, id):
    modifdespacho = Despacho.objects.get(id_envio=id)
    datos = {
        'form': FormDespacho(instance=modifdespacho)
    }
    if request.method=='POST':
        formulario= FormDespacho(data=request.POST, instance=modifdespacho)
        if formulario.is_valid:
            formulario.save()
            datos['mensaje'] = "Modificado Correctamente"

    return render(request, 'core/form_mod_despacho.html', datos)




def listar_mod_despacho(request):
    despachos = Despacho.objects.all()
    datos = {
        "despachos":despachos
    }
    return render(request, 'core/listar_mod_despacho.html',datos)





def registrar(request):
    data = {
        'form' : CreacionUsuario()
    }

    if request.method == 'POST':
        usuario_form = CreacionUsuario(data=request.POST)

        if usuario_form.is_valid():
            usuario_form.save()

            usuario = authenticate(username=usuario_form.cleaned_data['username'], password=usuario_form.cleaned_data['password1'])
            login(request, usuario)
            return redirect('index')

    return render(request, 'registration/registrar.html',data)





