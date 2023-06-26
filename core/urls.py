
from django.urls import path
from .views import index, nosotros, blusas, vestidos, faldas, blusassale, vestidossales, faldassale, contacto

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
]