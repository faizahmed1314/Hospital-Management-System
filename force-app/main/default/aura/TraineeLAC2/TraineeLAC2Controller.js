({
    doInit : function(component, event, helper) {

        var myBreadcrumbs = [
            {label: 'Account', name: 'objectName' },
            {label: 'Record Name', name: 'record' }
        ];
        component.set('v.myBreadcrumbs', myBreadcrumbs);

        // document.addEventListener('click',()=>{
        //     console.log("clicked");
        // })

        helper.helperFetchData(component, event, helper);

        

        // var action = component.get("c.getTrainee");
        // action.setCallback(this, function(response, error) {
        //     if(response.getState() == 'SUCCESS') {
        //         var response = response.getReturnValue();
        //         console.log(response);
        //         component.set("v.trainees", response);
        //         console.log('trainees',component.get("v.trainees"));
        //     }
        // })
        // console.log("before ending");
        // $A.enqueueAction(action);
        // console.log("ending");
    },

    saveTrainee : function(component, event, helper) {
        let name = component.get("v.name");
        let address = component.get("v.address");
        let age = component.get("v.age");
        console.log("name : " + name + " address : "+address + " age : "+age);
        var action = component.get("c.upsertTrainee");
        action.setParams({
            name : name,
            address : address,
            age:age,
            id: null
        })
        action.setCallback(this, function(response, error) {
            if(response.getState() == 'SUCCESS') {
                console.log('Successfully saved!');
                component.set("v.name",null);
                component.set("v.address",null);
                component.set("v.age",null);
                var msg="Record saved successfully!";
                helper.showSuccess(component, event, helper,msg);
                helper.helperFetchData(component, event, helper);
            }
        })
        console.log("before ending");
        $A.enqueueAction(action);
        console.log("ending");
    },

    handleShowActiveSectionName: function (cmp, event, helper) {
        alert(cmp.find("accordion").get('v.activeSectionName'));
    },

    handleSetActiveSectionC: function (cmp) {
        cmp.find("accordion").set('v.activeSectionName', 'C');
    },

    navigateTo: function (cmp, event, helper) {
        //get the name of the breadcrumb that's clicked
        var name = event.getSource().get('v.name');

        //your custom navigation here
    },

    navigateToCustomPage1: function (cmp, event) {
        event.preventDefault();
        //your custom navigation here
    },

    navigateToCustomPage2: function (cmp, event) {
        event.preventDefault();
        //your custom navigation here
    },

    clickedMe: function (cmp, event) {
        var src=event.getSource();
        console.log("level of the button "+src.get("v.label"))
        console.log("Name of the button "+src.get("v.name"))

        var inp=cmp.find("input1");
        var inpValue=inp.get("v.value");
        console.log("Input value is "+inpValue);

        src.set("v.label",inpValue);
    },

    disableInput: function (cmp, event) {
        var src=event.getSource();

        var value=src.get("v.value");

        if(value==='faiz'){
            src.set("v.disabled",true);
        }
        console.log(value);
    },

    nameValidation: function (cmp, event) {

        var inp=cmp.find("name");
        var inpValue=inp.get("v.value");

        var src=event.getSource();
        var value=src.get("v.value");

        if(inpValue===''){
            src.set("v.required",true);
        }
        console.log(value);
    },


})