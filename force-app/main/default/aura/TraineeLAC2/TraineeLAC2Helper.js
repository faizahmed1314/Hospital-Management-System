({
    helperFetchData: function(component, event, helper) {
        var action = component.get("c.getTrainee");
        action.setCallback(this, function(response, error) {
            if(response.getState() == 'SUCCESS') {
                var response = response.getReturnValue();
                console.log(response);
                component.set("v.trainees", response);
                console.log('trainees',component.get("v.trainees"));
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