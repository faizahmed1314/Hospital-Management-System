({
    doInit : function(component, event, helper) {
        helper.fetchGenderPicklist(component); // fetches PickList Values of Gender Field
        helper.fetchBloodGroupPicklist(component); // fetches PickList Values of Blood Group Field
        helper.fetchSpecializationPicklist(component); // fetches PickList Values of Blood Group Field
    },

    updateDoctor : function(component, event, helper) {

        console.log("update clicked");
        let name = component.get("v.name");
        let email = component.get("v.email");
        let phone = component.get("v.phone");
        let dob = component.get("v.dob");
        let gender = component.get("v.gender");
        let bloodGroup = component.get("v.bloodGroup");
        let specialization = component.get("v.specialization");
        let id = component.get("v.id");

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
            id: id
        })
        action.setCallback(this, function(response, error) {
            if(response.getState() == 'SUCCESS') {
                console.log('Updated saved!');
                var msg="Record Updated successfully!";
                helper.helperUpdateMessage(component, event, helper,msg);
                var p = component.get("v.parent");
                p.doInit();
            }
        })
        console.log("before ending");
        $A.enqueueAction(action);
        console.log("ending");
    },

    deleteDoctor : function(component, event, helper) {
        let id = component.get("v.id");
        var action = component.get("c.deleteRecord");
        action.setParams({
            id : id
        })
        action.setCallback(this, function(response, error) {
            if(response.getState() == 'SUCCESS') {
                console.log('deleted!');
                var msg="Record deleted successfully!";
                helper.helperDeleteMessage(component, event, helper,msg);
                var p = component.get("v.parent");
                p.doInit();
            }
        })
        console.log("before ending");
        $A.enqueueAction(action);
        console.log("ending");
    },

    handleConfirmDialog : function(component, event, helper) {
        component.set('v.showConfirmDialog', true);
    },
     
    handleConfirmDialogYes : function(component, event, helper) {
        console.log('Yes');
        var a = component.get('c.deleteDoctor');
        $A.enqueueAction(a);
        component.set('v.showConfirmDialog', false);
    },
     
    handleConfirmDialogNo : function(component, event, helper) {
        console.log('No');
        component.set('v.showConfirmDialog', false);
    },
})
