"use strict";app.controller("UserCtrl",["$scope","$location","User","Questions","$rootScope","responses","$state",function($scope,$location,User,Questions,$rootScope,responses){$scope.questions=Questions,$scope.responses=responses.responses,$scope.answer="";var qNo=$rootScope.counter;$scope.addResponse=function(state,answer){$scope.responses.push({question:$scope.questions[qNo],answer:answer}),$rootScope.counter+=1,$rootScope.progressTracker.push($scope.state.current.name),$rootScope.go(state)},console.log($scope.responses),$scope.users=User.all(),$scope.submitResponse=function(){if(""===$scope.firstname||void 0===$scope.firstname)return(""===$scope.email||void 0===$scope.email)&&($scope.vEmail=!0),void($scope.vFname=!0);if(""===$scope.email||void 0===$scope.email)return(""===$scope.firstname||void 0===$scope.firstname)&&($scope.vFname=!0),void($scope.vEmail=!0);var attr={};attr.firstname=$scope.firstname,attr.lastname=$scope.lastname,attr.email=$scope.email,attr.response=$scope.responses,console.log(attr);var newUser=User.create(attr);$scope.users.push(newUser),$rootScope.go("demo.end")},$scope.deleteUser=function(id,idx){return $scope.users.splice(idx,1),User.delete(id)}}]);