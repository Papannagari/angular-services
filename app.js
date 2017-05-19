var app=angular.module("myApp",[])

app.controller("myController",["$scope","example","CustomerService","CustomFactory","AppName",function($scope,example,CustomerService,CustomFactory,AppName){
	//console.log("myController :myProvider")
	console.log("from contoller provider:"+example.name)
	console.log("from contoller provider:"+example.getName())
	$scope.name=example.getName()
	$scope.message=CustomerService.getCustomerDetails()
	$scope.customFactoryMessage=CustomFactory
	
	$scope.constvalue=AppName
}])
