({
    myAction : function(component, event, helper) {

    },

    enableSubmitButton: function (component, event) {

        // var name=cmp.find("name");
        // var nameValue=name.get("v.value");


        // var pass=cmp.find("password");
        // var passValue=pass.get("v.value");
        // var btn=cmp.find("button");

        // if(nameValue && passValue && nameValue.length>=1 & passValue.length>=6){
        //     btn.set("v.disabled",false);
        // }else{
        //     btn.set("v.disabled",true);
        // }

        console.log('name : ',component.get("v.name"))
        let src = event.getSource();
        console.log('inp : ',src.get("v.value"))
        if(src.get("v.validity").valid) {
          component.set("v.nameValid", src.get("v.value"))
        } else {
          src.set("v.value", component.get("v.nameValid"));
        }

    },

    onClicked: function (cmp, event,helper) {

        var name=cmp.find("name");
        var nameValue=name.get("v.value").toLowerCase();
        console.log(nameValue);
        
        var pass=cmp.find("password");
        var passValue=pass.get("v.value");
        var btn=event.getSource();

        if(nameValue==='trainee' && passValue==='Bjit1234'){

            console.log("pass");
            
            btn.set("v.disabled",true);
            name.set("v.disabled",true);
            pass.set("v.disabled",true);
            btn.set("v.label",'Thank You');
            // var a = cmp.get('c.showSuccess');
            // $A.enqueueAction(a);
         helper.helperShowSuccess(cmp, event, helper);
        }else{
            btn.set("v.disabled",true);
            btn.set("v.label",'Try again!');
        }

        // console.log(value);
    },
})