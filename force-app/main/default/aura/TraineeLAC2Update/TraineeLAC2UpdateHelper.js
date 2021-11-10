({
    helperMethod : function() {

    },
    helperDeleteMessage : function(component, event, helper,msg) {
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            // title : 'Info',
            // message: msg,
            // duration:' 5000',
            // key: 'info_alt',
            // type: 'info',
            // mode: 'dismissible'

            title : 'Warning',
            message: msg,
            duration:' 5000',
            key: 'info_alt',
            type: 'warning',
            //mode: 'sticky'
            mode: 'dismissible'
        });
        toastEvent.fire();
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
})