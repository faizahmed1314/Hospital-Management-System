({
    fetchGenderPicklist : function(component){
        var action = component.get("c.getPicklistvalues");
        action.setParams({
            'objectName': "Doctor__c",
            // 'objectName': component.get("v.ObjectName"),
            'field_apiname': "Gender__c",
            // 'field_apiname': component.get("v.gender"),
            'nullRequired': false
        });
        action.setCallback(this, function(a) {
            var state = a.getState();
            if (state === "SUCCESS"){
                component.set("v.GenderPicklist", a.getReturnValue());
            } 
        });
        $A.enqueueAction(action);
    },

    fetchBloodGroupPicklist : function(component){
        var action = component.get("c.getPicklistvalues");
        action.setParams({
            'objectName': "Doctor__c",
            'field_apiname': "Blood_Group__c",
            // 'field_apiname': component.get("v.bloodGroup"),
            'nullRequired': true // includes --None--
        });
        action.setCallback(this, function(a) {
            var state = a.getState();
            if (state === "SUCCESS"){
                component.set("v.BloodGroupPicklist", a.getReturnValue());
            } 
        });
        $A.enqueueAction(action);
    },
    
    fetchSpecializationPicklist : function(component){
        var action = component.get("c.getPicklistvalues");
        action.setParams({
            'objectName': "Doctor__c",
            'field_apiname': "Specialization__c",
            'nullRequired': true // includes --None--
        });
        action.setCallback(this, function(a) {
            var state = a.getState();
            if (state === "SUCCESS"){
                component.set("v.SpecializationPicklist", a.getReturnValue());
            } 
        });
        $A.enqueueAction(action);
    },

    fetchAllData: function(component, event, helper) {
        var action = component.get("c.getDoctor");
        action.setCallback(this, function(response, error) {
            if(response.getState() == 'SUCCESS') {
                var response = response.getReturnValue();
                console.log(response);
                component.set("v.doctors", response);
                console.log('doctors',component.get("v.doctors"));
            }
        })
        console.log("before ending");
        $A.enqueueAction(action);
        console.log("ending");
    },

    showSuccess : function(component, event, helper,msg) {
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            title : 'Success',
            message: msg,
            duration:' 5000',
            key: 'info_alt',
            type: 'success',
            mode: 'pester'
        });
        toastEvent.fire();
    },
})