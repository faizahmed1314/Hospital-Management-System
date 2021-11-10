({
    doInit : function(component, event, helper) {
        var action = component.get("c.getStudent");
        action.setCallback(this, function(response, error) {
            if(response.getState() == 'SUCCESS') {
                var response = response.getReturnValue();
                console.log(response);
                component.set("v.students", response);
                console.log('students',component.get("v.students"));
            }
        })
        console.log("before ending");
        $A.enqueueAction(action);
        console.log("ending");
    },

    saveStudent : function(component, event, helper) {
        let name = component.get("v.name");
        let address = component.get("v.address");
        let email=component.get("v.email");
        console.log("name : " + name + " address : "+address+ " Email : "+email);
        var action = component.get("c.createStudent");
        action.setParams({
            name : name,
            address : address,
            email: email,
        })
        action.setCallback(this, function(response, error) {
            if(response.getState() == 'SUCCESS') {
                console.log('Successfully saved!');
            }
        })
        console.log("before ending");
        $A.enqueueAction(action);
        console.log("ending");
    }
})