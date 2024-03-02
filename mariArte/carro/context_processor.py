def importe_total(request):
    total = 200
    if request.user.is_authenticated:
        if 'carro' in request.session:     
            for key, value in request.session["carro"].items():
                total = total + (float(value["precio"])*value["cantidad"])
    return {"importe_total":total}