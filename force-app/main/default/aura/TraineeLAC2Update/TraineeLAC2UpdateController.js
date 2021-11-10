({
    updateTrainee : function(component, event, helper) {
        let name = component.get("v.name");
        let address = component.get("v.address");
        let age = component.get("v.age");
        let id = component.get("v.id");
        console.log(id);
        var action = component.get("c.upsertTrainee");
        console.log(id+address+age+name);
        action.setParams({
            name : name,
            address : address,
            age:age,
            id : id
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
    
    deleteTrainee : function(component, event, helper) {
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
        var a = component.get('c.deleteTrainee');
        $A.enqueueAction(a);
        component.set('v.showConfirmDialog', false);
    },
     
    handleConfirmDialogNo : function(component, event, helper) {
        console.log('No');
        component.set('v.showConfirmDialog', false);
    },
})