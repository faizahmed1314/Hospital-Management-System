({
	getAccountRecord : function(component, event, helper) {
		var action = component.get("c.getAllRecords"); 
        action.setCallback(this, function(a) 
        {            
            if (a.getState() === "SUCCESS") 
            {
            	component.set('v.manageView',a.getReturnValue());                    
            } 
            else if (a.getState() === "ERROR") 
            {
            	console.log(a.getError());       
            }           
        });
        $A.enqueueAction(action);
	}
})