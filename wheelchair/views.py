from django.http import HttpResponse
import requests
from django.shortcuts import render


# Create your views here.
def index(request):
    return render(request, 'wheelchair/pages/index.html')


def update_data(request):
    response = requests.get("http://127.0.0.1:5000/status/")
    return HttpResponse(str(response.json()["Accelerometer"])+":"+str(response.json()["FallStatus"]))


def trigger(request):
    requests.post("http://127.0.0.1:5000/trigger/", data={"isTriggered": 1})
    return HttpResponse("OK")
