from django import forms
from django.contrib.auth.forms import UserCreationForm
from .models import Cliente, Despacho
from django.forms import ModelForm
from django.contrib.auth.models import User







class CreacionUsuario(UserCreationForm):
	
	class Meta:
		model = User
		fields = ['username', 'first_name', 'last_name', 'email', 'password1', 'password2']


class FormCliente(ModelForm):
	class Meta:
		model = Cliente
		fields = ['id_cliente', 'nombre', 'apellido', 'correo', 'telefono', 'comuna', 'ciudad', 'region' ]
	
widget = {
		    
    'id_cliente': forms.TextInput(attrs={'class':'form-control'}),
	'nombre': forms.TextInput(attrs={'class':'form-control'}),
	'apellido': forms.TextInput(attrs={'class':'form-control'}),
	'correo': forms.TextInput(attrs={'class':'form-control'}),
	'telefono': forms.TextInput(attrs={'class':'form-control'}),
	'comuna': forms.TextInput(attrs={'class':'form-control'}),
	'ciudad': forms.TextInput(attrs={'class':'form-control'}),
	'region': forms.TextInput(attrs={'class':'form-control'})

     }


class FormDespacho(ModelForm):
    class Meta:
        model = Despacho
        fields = ['id_envio', 'fecha_envio', 'valor_envio', 'tipo_envio', 'cliente']
        widgets = {
            'id_envio': forms.TextInput(attrs={'class': 'form-control'}),
            'fecha_envio': forms.DateInput(attrs={'class': 'form-control'}),
            'valor_envio': forms.TextInput(attrs={'class': 'form-control'}),
            'tipo_envio': forms.Select(attrs={'class':'form-control'}),
            'cliente': forms.Select(attrs={'class':'form-control'}),
        }

		
		




