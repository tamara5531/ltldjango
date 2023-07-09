from django.urls import path
from .views import index, nosotros, blusas, vestidos, faldas, blusassale, vestidossales, faldassale, contacto, registrar, productos, form_mod_cliente, listar_mod_cliente, elim_cliente, listar_mod_despacho, crear_despacho, form_mod_despacho, agregar_producto, listar_productos, BoletaView, boleta
from .views import  eliminar_producto, modificar_producto
from django.conf import settings
from django.conf.urls.static import static 

urlpatterns = [
    path('', index, name='index'),
    path('nosotros/', nosotros, name='nosotros'),
    path('blusas/', blusas, name='blusas'),
    path('vestidos/',vestidos, name='vestidos'),
    path('faldas/',faldas, name='faldas'),
    path('blusassale/', blusassale, name='blusassale'),
    path('vestidossales/', vestidossales, name='vestidossales'),
    path('faldassale/', faldassale, name='faldassale'),
    path('contacto/', contacto, name='contacto'),
    path('registrar/', registrar, name = 'registrar'),
    path('productos/', productos, name = 'productos'),
    path('crear_despacho/', crear_despacho, name = 'crear_despacho'),
    path('form_mod_cliente/<id>', form_mod_cliente, name = 'form_mod_cliente'),
    path('listar_mod_cliente', listar_mod_cliente, name = 'listar_mod_cliente'),
    path('elim_cliente/<id>', elim_cliente, name = 'elim_cliente'),
    path('listar_mod_despacho', listar_mod_despacho, name = 'listar_mod_despacho'),
    path('form_mod_despacho/<id>', form_mod_despacho, name = 'form_mod_cliente'),
    path('agregar-producto/', agregar_producto, name ='agregar-producto'),
    path('listar-productos/', listar_productos, name ='listar_productos'),
    path('modificar-producto/<id>/', modificar_producto, name='modificar_producto'),
    path('eliminar-producto/<id>/', eliminar_producto, name="eliminar_producto"),
    path('boleta/', boleta, name='guardar_boleta'),
    path('generar-boleta/',BoletaView.as_view(), name='generar_boleta'),
    ]
    
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)