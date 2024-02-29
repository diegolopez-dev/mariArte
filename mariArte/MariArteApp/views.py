from django.shortcuts import render, HttpResponse

# Create your views here.

def home(request):
    return render(request, "MariArteApp/home.html")

def servicios(request):
    return render(request, "MariArteApp/servicios.html")

def tienda(request):
    return render(request, "MariArteApp/tienda.html")

def contacto(request):
    return render(request, "MariArteApp/contacto.html")