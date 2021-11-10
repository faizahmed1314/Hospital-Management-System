({
	callDeleteRecord : function(component, event, helper) {		
        var currentRecordId = component.get("v.view.Id");
        alert ('Current Record Id ' + currentRecordId + '. Now you could pass the current record Id to server to delete the record.' )
	},
    callUpdateRecord : function(component, event, helper) {		
        var currentRecordId = component.get("v.view.Id");
        var currentRecord = component.get("v.view");
        alert ('Current Record Id ' + currentRecordId + ' and Current Record Object is ' + component.get('v.view') +'. Now you could pass the current object to a modal popup and show the fields accordingly to update the record.' )
	}
})