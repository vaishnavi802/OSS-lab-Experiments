from django.shortcuts import render
from django.http import HttpResponse

def login(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        # Add your authentication logic here
        # For simplicity, let's just check if username and password are not empty
        if username and password:
            return HttpResponse(f'Login successful! Welcome, {username}!')
        else:
            return HttpResponse('Invalid login credentials.')

    return render(request, 'login.html')
