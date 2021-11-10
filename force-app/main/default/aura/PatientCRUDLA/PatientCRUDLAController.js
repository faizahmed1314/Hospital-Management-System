({
    doInit : function(component, event, helper) {
        helper.fetchGenderPicklist(component); // fetches PickList Values of Gender Field
        helper.fetchBloodGroupPicklist(component); // fetches PickList Values of Blood Group Field
        helper.fetchAllData(component); // fetch all data in page load
    },

    savePatient : function(component, event, helper) {
        let name = component.get("v.name");
        let address = component.get("v.address");
        let email = component.get("v.email");
        let phone = component.get("v.phone");
        let dob = component.get("v.dob");
        let weight = component.get("v.weight");
        let gender = component.get("v.gender");
        let bloodGroup = component.get("v.bloodGroup");

        console.log("name : " + name +"address : " + address + " email : "+email + " phone : "+phone+ "dob : " + dob + " gender : "+gender + " bloodGroup : "+bloodGroup+ " weight : "+weight);

        var action = component.get("c.upsertPatient");
        action.setParams({
            name : name,
            address : address,
            email : email,
            phone:phone,
            dob:dob,
            weight:weight,
            gender:gender,
            bloodGroup:bloodGroup,
            id: null
        })
        action.setCallback(this, function(response, error) {
            if(response.getState() == 'SUCCESS') {
                console.log('Successfully saved!');
                component.set("v.name",null);
                component.set("v.address",null);
                component.set("v.email",null);
                component.set("v.phone",null);
                component.set("v.dob",null);
                component.set("v.gender",null);
                component.set("v.bloodGroup",null);
                component.set("v.weight",null);
                var msg="Record saved successfully!";

                helper.showSuccess(component, event, helper,msg);
                helper.fetchAllData(component, event, helper);
            }
        })
        console.log("before ending");
        $A.enqueueAction(action);
        console.log("ending");
    },
})