from datetime import timezone
import datetime
from django.db import models

# Create your models here.

""" """ # Create your models here.

class Envio(models.Model):
    envio = models.CharField(max_length = 20, verbose_name = 'tipo_envio')

    def __str__(self):
        return self.envio


class Cliente(models.Model):
    id_cliente = models.CharField(primary_key = True, max_length = 10, verbose_name = 'id_cliente')
    nombre = models.CharField(max_length = 20, verbose_name = 'nombre')
    apellido = models.CharField(max_length = 20, verbose_name = 'apellido')
    correo = models.CharField(max_length = 20, verbose_name = 'correo')
    telefono = models.CharField(max_length = 20, verbose_name = 'telefono')
    comuna = models.CharField(max_length = 20, verbose_name = 'comuna')
    ciudad = models.CharField(max_length = 20, verbose_name = 'ciudad')
    region = models.CharField(max_length = 20, verbose_name = 'region')

    def __str__(self):
        return self.id_cliente
    



class Despacho(models.Model):
    id_envio = models.CharField(primary_key=True, max_length = 10, verbose_name='id_envio')
    fecha_envio = models.DateField(verbose_name='fecha_envio')
    valor_envio = models.CharField(max_length = 20, verbose_name = 'valor_envio')
    tipo_envio =  models.ForeignKey(Envio, on_delete=models.CASCADE)
    cliente =     models.ForeignKey(Cliente, on_delete=models.CASCADE)

    def __str__(self):
        return self.id_envio
    
class Categoria(models.Model):
    nombre = models.CharField(max_length=50)

    def __str__(self):
        return self.nombre


class Producto(models.Model):
    ID= models.CharField(primary_key=True, max_length = 10, verbose_name='id_producto')
    nombre = models.CharField(max_length=50)
    precio = models.IntegerField()
    categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE)
    imagen = models.ImageField(upload_to="productos", blank=True, null=True)

    def __str__(self):
        return self.nombre

class Boleta(models.Model):
    contenido_pdf = models.FileField(upload_to='boletas/')
    fecha_creacion = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Boleta {self.id}'