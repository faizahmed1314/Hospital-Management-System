({
    doInit : function(component, event, helper) {
        // var action = component.get("c.getDoctor");
        // action.setCallback(this, function(response, error) {
        //     if(response.getState() == 'SUCCESS') {
        //         var response = response.getReturnValue();
        //         console.log(response);
        //         component.set("v.doctors", response);
        //         console.log('doctors',component.get("v.doctors"));
        //     }
        // })
        // console.log("before ending");
        // $A.enqueueAction(action);
        // console.log("ending");

        helper.fetchAllData(component);  // fetches all doctor data when page loaded

        helper.fetchGenderPicklist(component); // fetches PickList Values of Gender Field
        helper.fetchBloodGroupPicklist(component); // fetches PickList Values of Blood Group Field
        helper.fetchSpecializationPicklist(component); // fetches PickList Values of Blood Group Field

        // var opts = [
        //     { value: "Red", label: "Red" },
        //     { value: "Green", label: "Green" },
        //     { value: "Blue", label: "Blue" }
        // ];
        // component.set("v.options", opts);
    
    },

    saveDoctor : function(component, event, helper) {
        let name = component.get("v.name");
        let email = component.get("v.email");
        let phone = component.get("v.phone");
        let dob = component.get("v.dob");
        let gender = component.get("v.gender");
        let bloodGroup = component.get("v.bloodGroup");
        let specialization = component.get("v.specialization");

        console.log("name : " + name + " email : "+email + " phone : "+phone+ "dob : " + dob + " gender : "+gender + " bloodGroup : "+bloodGroup+ " specialization : "+specialization);

        var action = component.get("c.upsertDoctor");
        action.setParams({
            name : name,
            email : email,
            phone:phone,
            dob:dob,
            gender:gender,
            bloodGroup:bloodGroup,
            specialization:specialization,
            id: null
        })
        action.setCallback(this, function(response, error) {
            if(response.getState() == 'SUCCESS') {
                console.log('Successfully saved!');
                component.set("v.name",null);
                component.set("v.email",null);
                component.set("v.phone",null);
                component.set("v.dob",null);
                component.set("v.gender",null);
                component.set("v.bloodGroup",null);
                component.set("v.specialization",null);
                var msg="Record saved successfully!";

                helper.showSuccess(component, event, helper,msg);
                helper.fetchAllData(component, event, helper);
            }
        })
        console.log("before ending");
        $A.enqueueAction(action);
        console.log("ending");
    },

    handleOnChange : function(component, event, helper) {
        var specialization = component.get("v.specialization");
        if(specialization==="--None--"){
            alert("Doctor must be specialized in a specific department!");
        }
    }

})