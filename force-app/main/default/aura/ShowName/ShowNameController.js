({
	myAction : function(component, event, helper) {
		
	},
    
    ShowFullName : function(component, event, helper) {
		var f1=component.get("v.fName");
        var f2=component.get("v.lName");
        var f3=f1+' '+f2;
        component.set("v.flName", f3);
	},
})