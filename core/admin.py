from django.contrib import admin
from .models import Cliente, Envio, Despacho, Producto, Categoria


# Register your models here.

admin.site.register(Cliente)
admin.site.register(Envio)
admin.site.register(Despacho)
admin.site.register(Producto)
admin.site.register(Categoria)

