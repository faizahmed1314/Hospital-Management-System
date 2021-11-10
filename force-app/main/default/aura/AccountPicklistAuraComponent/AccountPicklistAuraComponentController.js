({
    doInit: function(component, event, helper) {
        helper.fetchRatingPicklist(component); // fetches PickList Values of Rating Field
        helper.fetchActivePicklist(component); // fetches PickList Values of Active Field
        helper.fetchIndustryPicklist(component); // fetches PickList Values of Industry Field
    },
})
