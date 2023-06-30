from django.contrib import admin
from .models import Cliente, Envio, Despacho


# Register your models here.

admin.site.register(Cliente)
admin.site.register(Envio)
admin.site.register(Despacho)

