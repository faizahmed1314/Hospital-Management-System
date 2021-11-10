({
    fetchGenderPicklist : function(component){
        var action = component.get("c.getPicklistvalues");
        action.setParams({
            'objectName': "Doctor__c",
            'field_apiname': "Gender__c",
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

    helperUpdateMessage : function(component, event, helper,msg) {
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

    helperDeleteMessage : function(component, event, helper,msg) {
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            title : 'Warning',
            message: msg,
            duration:' 5000',
            key: 'info_alt',
            type: 'warning',
            mode: 'dismissible'
        });
        toastEvent.fire();
    },
})