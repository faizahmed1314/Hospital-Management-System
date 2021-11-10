({
    doInit : function(component, event, helper) {
        
        helper.fetchHelper(component, event, helper);

        // var action = component.get("c.getTrainee");
        // action.setCallback(this, function(response, error) {
        //     if(response.getState() == 'SUCCESS') {
        //         var response = response.getReturnValue();
        //         console.log(response);
        //         component.set("v.trainees", response);
        //         console.log('trainees',component.get("v.trainees"));
        //     }
        // })
        // console.log("before ending");
        // $A.enqueueAction(action);
        // console.log("ending");
    },

    saveTrainee : function(component, event, helper) {
        let name = component.get("v.name");
        let address = component.get("v.address");
        let age = component.get("v.age");
        console.log("name : " + name + " address : "+address);
        var action = component.get("c.createTrainee");
        action.setParams({
            name : name,
            address : address,
            age:age,
        })
        action.setCallback(this, function(response, error) {
            if(response.getState() == 'SUCCESS') {
                console.log('Successfully saved!');
                component.set("v.name",null);
                component.set("v.address",null);
                component.set("v.age",null);
                helper.fetchHelper(component, event, helper);
            }
            else if(state === "ERROR"){
                var errors = response.getError();
                if(errors){
                    if(errors[0] && errors[0].message){
                        console.log("Error message: " + errors[0].message);
                    }
                }else{
                    console.log("Unknown error");
                }
            }
        })
        console.log("before ending");
        $A.enqueueAction(action);
        console.log("ending");
    }
})