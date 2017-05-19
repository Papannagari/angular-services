app.provider("example",function(){
	    myObj = {}
		myObj.name ="papa"
		myObj.lastname ="srinivas"
		myObj.getName = function(){
		return	this.name +" "+this.lastname;
		}
		this.$get = function(){
		return myObj;
	}
})
app.service("CustomerService",function(){
	this.getCustomerDetails = function(){
        return "This will return customer details"
	}
})


app.run(["CustomerService","AppName",function(CustomerService,AppName){
	console.log(CustomerService.getCustomerDetails())
	console.log("app name in run:"+AppName)
}])

app.config(["exampleProvider","AppName",function(exampleProvider,AppName){
	console.log(exampleProvider.$get().name)
	AppName = "changed angilar app"
	console.log("app name:"+AppName)
}])

app.factory("CustomFactory",function(){
	return "This is custom factory";
})

app.constant("AppName","Angular app Constant");

app.value("AppVersion","1.0.0")