from django.shortcuts import render
from acadtutor.utils import get_collection_handle,get_db_handle
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_protect
from rest_framework.decorators import permission_classes,api_view
from rest_framework.response import Response
from accounts.models import HOD,Teacher,CustomUser
from bson.objectid import ObjectId
from bson.json_util import dumps,loads
import json
db_handle, mongo_client = get_db_handle()

subj_collection_handle = get_collection_handle(db_handle, "subjects")
unit_collection_handle = get_collection_handle(db_handle, "units")
branch_collection_handle = get_collection_handle(db_handle, "branches")
# uncomment to create branches
# def createbranch():
#     dict=[{
#         "branch":"CS",
#         "semester":[{"id":1,"subjects":[]},{"id":2,"subjects":[]},{"id":3,"subjects":[]},{"id":4,"subjects":[]},{"id":5,"subjects":[]},{"id":6,"subjects":[]},{"id":7,"subjects":[]},{"id":8,"subjects":[]}],
#     },{"branch":"CE",
#         "semester":[{"id":1,"subjects":[]},{"id":2,"subjects":[]},{"id":3,"subjects":[]},{"id":4,"subjects":[]},{"id":5,"subjects":[]},{"id":6,"subjects":[]},{"id":7,"subjects":[]},{"id":8,"subjects":[]}],
#     },{"branch":"ME",
#         "semester":[{"id":1,"subjects":[]},{"id":2,"subjects":[]},{"id":3,"subjects":[]},{"id":4,"subjects":[]},{"id":5,"subjects":[]},{"id":6,"subjects":[]},{"id":7,"subjects":[]},{"id":8,"subjects":[]}],
#     },{"branch":"ET",
#         "semester":[{"id":1,"subjects":[]},{"id":2,"subjects":[]},{"id":3,"subjects":[]},{"id":4,"subjects":[]},{"id":5,"subjects":[]},{"id":6,"subjects":[]},{"id":7,"subjects":[]},{"id":8,"subjects":[]}],
#     },{"branch":"EE",
#         "semester":[{"id":1,"subjects":[]},{"id":2,"subjects":[]},{"id":3,"subjects":[]},{"id":4,"subjects":[]},{"id":5,"subjects":[]},{"id":6,"subjects":[]},{"id":7,"subjects":[]},{"id":8,"subjects":[]}],
#     }]
#     branch_collection_handle.insert_many(dict)
# createbranch()
@csrf_protect
@api_view(('POST',))
def createSubj(request):
    if (request.method == 'POST'):
        data = request.data
        user = request.user
        try:
            isAuth = user.is_authenticated
            if isAuth:
                is_teach = CustomUser.objects.get(email=request.user.email).is_teach
                if is_teach:
                    teacher = Teacher.objects.get(user=user)
                    hod = teacher.hod
                    if hod is None:
                        branch = ""
                    else:
                        branch = hod.branch
                    dict = {
                        "c_name":data['subj_name'],
                        "sem": data['sem'],
                        "summary": data['summary'],
                        "branch": branch,
                        "units":[],
                        "start_date":data['date'],
                        "weightage": data['weightage'],
                        "author_email":user.email,
                        "author_name":user.name
                    }
                    sub = subj_collection_handle.insert_one(dict)
                    branch = branch_collection_handle.find_one_and_update(
                        {
                            "branch": branch,"semester.id":data['sem']
                        },
                    {'$push': {'semester.$.subjects': 
                    {"sub_name":data['subj_name'],
                        "sub_id":sub.inserted_id,
                        "summary": data['summary'],
                        "author_email":user.email,
                        }
                    
                    }}
                    )
                    return Response({'success':f"add subj successfully,subject id:{sub.inserted_id}"})
                else:
                    return Response({'success':"you are not authorized to access"})

            else:
                return Response({'error':'You are not authenticated, please login first'})
        except Exception as e:
            # return Response({ 'error': 'Something went wrong when checking authentication status' })
            return Response({ 'error': str(e) })

@csrf_protect
@api_view(('POST',))
def addUnit(request):
    if (request.method == 'POST'):
        data = request.data
        user = request.user
        try:
            isAuth = user.is_authenticated
            if isAuth:
                is_teach = CustomUser.objects.get(email=request.user.email).is_teach
                obj = subj_collection_handle.find_one({"_id": ObjectId(data['subj_id'])})
                if is_teach and (obj['author_email']==user.email):
                    unitdict = {
                        "u_name":"untitled topic",
                        "subtopics":[],
                        "subj_id": data['subj_id']
                    }
                    unit = unit_collection_handle.insert_one(unitdict)
                    subj_collection_handle.find_one_and_update(
                        {
                            "_id": ObjectId(data['subj_id'])
                        },
                        {'$push': {'units': {"unit_id":unit.inserted_id,"u_name":"untitled_topic"}}}
                    )
                    return Response({'success':f"add unit successfully,unit id:{unit.inserted_id}"})
                else:
                    return Response({'error':"you are not authorized to access"})

            else:
                return Response({'error':'You are not authenticated, please login first'})
        except Exception as e:
            # return Response({ 'error': 'Something went wrong when checking authentication status' })
            return Response({ 'error': str(e) })

@csrf_protect
@api_view(('POST',))
def addSubTopic(request):
    if (request.method == 'POST'):
        data = request.data
        user = request.user
        try:
            isAuth = user.is_authenticated
            if isAuth:
                is_teach = CustomUser.objects.get(email=request.user.email).is_teach
                obj = subj_collection_handle.find_one({"units.unit_id": ObjectId(data['unit_id'])})
                if is_teach and (obj['author_email']==user.email):
                    topic_dict = {
                        "subtopic_name" : data['subtopic_name'],
                        "link":[data['link']],
                        "notes" : data['notes']
                    }
                    unit_collection_handle.find_one_and_update(
                        {
                            "_id": ObjectId(data['unit_id'])
                        },
                        {'$push': {'subtopics': topic_dict}}
                    )
                    return Response({'success':f"add subtopic successfully"})
                else:
                    return Response({'error':"you are not authorized to access"})

            else:
                return Response({'error':'You are not authenticated, please login first'})
        except Exception as e:
            # return Response({ 'error': 'Something went wrong when checking authentication status' })
            return Response({ 'error': str(e) })

@csrf_protect
@api_view(('GET',))
def getUnit(request,unit_id):
    if (request.method == 'GET'):
        user = request.user
        print(user)
        try:
            isAuth = user.is_authenticated
            if isAuth:
                obj = unit_collection_handle.find_one(
                    {"_id": ObjectId(unit_id)},{"_id": 0 }
                    )
                if obj is not None:
                    return Response(obj)
                else:
                    return Response({'error':"Invalid request"})

            else:
                return Response({'error':'You are not authenticated, please login first'})
        except Exception as e:
            # return Response({ 'error': 'Something went wrong when checking authentication status' })
            return Response({ 'error': str(e) })

@csrf_protect
@api_view(('GET',))
def getBranch(request,branch):
    if (request.method == 'GET'):
            obj = branch_collection_handle.find_one({"branch": branch},{"_id": 0 })
            data = dumps(obj)
            if obj is not None:
                return Response(data)
            else:
                return Response({'error':"Invalid request"})

@csrf_protect
@api_view(('GET',))
def getSubj(request,subj_id):
    if (request.method == 'GET'):
            obj = subj_collection_handle.find_one({"_id": ObjectId(subj_id)},{"_id": 0 })
            data = dumps(obj)
            if obj is not None:
                return Response(data)
            else:
                return Response({'error':"Invalid request"})
