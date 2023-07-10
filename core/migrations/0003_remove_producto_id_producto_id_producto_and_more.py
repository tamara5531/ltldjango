# Generated by Django 4.2.1 on 2023-07-10 02:11

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_categoria_producto'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='producto',
            name='id',
        ),
        migrations.AddField(
            model_name='producto',
            name='id_producto',
            field=models.CharField(default=0, max_length=10, primary_key=True, serialize=False, verbose_name='id_producto'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='producto',
            name='imagen',
            field=models.ImageField(blank=True, null=True, upload_to='productos'),
        ),
        migrations.CreateModel(
            name='Boleta',
            fields=[
                ('id_compra', models.CharField(max_length=10, primary_key=True, serialize=False, verbose_name='id_compra')),
                ('valor_compra', models.CharField(max_length=20, verbose_name='valor_compra')),
                ('fecha_compra', models.DateField(verbose_name='fecha_envio')),
                ('id_envio2', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.despacho')),
                ('nombre_producto', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.producto')),
            ],
        ),
    ]