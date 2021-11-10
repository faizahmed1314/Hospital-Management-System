({
    fetchHelper : function(component, event, helper) {
        component.set('v.mycolumns', [
            {label: 'Trainee Name', fieldName: 'Name', type: 'text'},
                {label: 'Address', fieldName: 'Address__c', type: 'text'},
                {label: 'Age', fieldName: 'Age__c', type: 'Integer'},
            ]);
        var action = component.get("c.getTrainee");
        action.setParams({
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.trainees", response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    }
})