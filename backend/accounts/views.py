from rest_framework.decorators import permission_classes,api_view
from rest_framework import permissions
from . models import CustomUser,Teacher,HOD,Student
from rest_framework.response import Response
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_protect
from django.contrib.auth import authenticate,login,logout
from django.http import HttpResponse
@ensure_csrf_cookie
@permission_classes([permissions.AllowAny])
@api_view(('GET',))
def home(request):
    return HttpResponse("hello there")

@ensure_csrf_cookie
@permission_classes([permissions.AllowAny])
@api_view(('GET',))
def get_CSRF_token(request):
    return Response({ 'success': 'CSRF cookie set' })

@permission_classes([permissions.AllowAny])
@csrf_protect
@api_view(('POST',))
def student_register(request):
    if (request.method == 'POST'):
        data = request.data
        name = data['name']
        email = data['email']
        password = data['password']
        re_password = data['re_password']
        branch = data['branch']
        sem = data['semester']

        try:
            if password == re_password:
                if CustomUser.objects.filter(email=email).exists():
                    return Response({ 'error': 'Email already exists' })
                else:
                    user = CustomUser.objects.create_user(
                        email=email,name=name
                    )
                    user.set_password(password)
                    user.is_student = True
                    user.is_active = True
                    stud = Student(user=user,branch=branch,sem=sem)
                    stud.save()
                    user.save()
                    return Response({ 'success': 'User created successfully' })
            else:
                    return Response({ 'error': 'Passwords do not match' })

            
        except Exception as e:
            # return Response({ 'error': 'Something went wrong when registering account' })
            return Response({ 'error': str(e) })


@permission_classes([permissions.AllowAny])
@csrf_protect
@api_view(('POST',))
def teacher_register(request):
    if (request.method == 'POST'):
        data = request.data
        name = data['name']
        email = data['email']
        password = data['password']
        re_password = data['re_password']
        ref = data['refc']

        try:
            if password == re_password:
                if CustomUser.objects.filter(email=email).exists():
                    return Response({ 'error': 'Email already exists' })
                else:
                    if HOD.objects.filter(refid=ref).exists():
                        user = CustomUser.objects.create_user(
                            email=email,name=name
                        )
                        user.set_password(password)
                        user.is_teach = True
                        user.is_active = True
                        user.save()
                        Hod = HOD.objects.get(refid=ref)
                        teacher = Teacher(hod=Hod,user=user)
                        teacher.save()
                        return Response({ 'success': 'User created successfully' })
                    else:
                        return Response({ 'error': 'Referal Code not valid' })
            else:
                    return Response({ 'error': 'Passwords do not match' })

            
        except Exception as e:
            # return Response({ 'error': 'Something went wrong when registering account' })
            return Response({ 'error': str(e) })

@permission_classes([permissions.AllowAny])
@csrf_protect
@api_view(('GET',))
def IsAuthenticated(request):
    user = request.user
    try:
        isAuth = user.is_authenticated
        if isAuth:
            return Response({ 'isAuthenticated': 'success' })
        else:
            return Response({ 'isAuthenticated': 'error' })
    except Exception as e:
        # return Response({ 'error': 'Something went wrong when checking authentication status' })
        return Response({ 'error': str(e) })

@csrf_protect
@permission_classes([permissions.AllowAny])
@api_view(('POST',))
def Login(request):
    data = request.data
    email = data['email']
    password = data['password']

    try:
        user = authenticate(request, email=email, password=password)
        if user is not None:
            login(request, user)
            type_obj = CustomUser.objects.get(email=email)
            if user.is_authenticated and type_obj.is_student:
                return Response({'url': 'student dashboard'}) 
            elif user.is_authenticated and type_obj.is_teach:
                return Response({'url':'teacheher dashboard'}) 
        else:
            return Response({'error':'Invalid Email/Password'})
    except Exception as e:
        # return Response({ 'error': 'Something went wrong while Login' })
        return Response({ 'error': str(e) })

@csrf_protect
@api_view(('POST',))
def Logut(request):
    try:
        logout(request)
        return Response({ 'success': 'Loggout Out' })
    except Exception as e:
        # return Response({ 'error': 'Something went wrong while Lggout' })
        return Response({ 'error': str(e) })