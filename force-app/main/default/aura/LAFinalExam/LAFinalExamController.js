({
    myAction : function(component, event, helper) {

    },

    findSum: function (component, event) {

        var n1=component.find("A");
        var n1Value=parseInt(n1.get("v.value"));

        var n2=component.find("B");
        var n2Value=parseInt(n2.get("v.value"));

        var nSum=n1Value+n2Value;
        console.log("total"+nSum);

        if(n1Value && n2Value){
            component.find("C").set("v.value",nSum);
        }

        

        // var btn=cmp.find("button");

        // if(nameValue && passValue && nameValue.length>=1 & passValue.length>=6){
        //     btn.set("v.disabled",false);
        // }else{
        //     btn.set("v.disabled",true);
        // }

        // console.log('name : ',component.get("v.name"))
        // let src = event.getSource();
        // console.log('inp : ',src.get("v.value"))
        // if(src.get("v.validity").valid) {
        //   component.set("v.nameValid", src.get("v.value"))
        // } else {
        //   src.set("v.value", component.get("v.nameValid"));
        // }

    },

    findValueB: function (component, event) {

        var n1=component.find("A");
        var n1Value=parseInt(n1.get("v.value"));

        var n3=component.find("C");
        var n3Value=parseInt(n3.get("v.value"));

        var b=n3Value-n1Value;
        console.log("b"+b);

        if(n1Value && n3Value){
            component.find("B").set("v.value",b);
        }

    },
})