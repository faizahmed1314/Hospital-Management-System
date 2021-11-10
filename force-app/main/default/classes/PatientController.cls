public with sharing class PatientController {

    // Fetch all patient data
    @AuraEnabled 
    public static List<Paitent__c> getPaitent() {
        List<Paitent__c> patients = [Select Id, Paitent_Name__c,Address__c, Email__c,Phone__c,DOB__c,Weight__c,Gender__c,Blood_Group__c FROM Paitent__c];
        return patients;
    }

    // Create and update patient data
    @AuraEnabled 
    public static void upsertPatient(String name,String address, String email,String phone,date dob,Integer weight,String gender, String bloodGroup,  Id id) {
        Paitent__c patient = new Paitent__c();
        patient.Paitent_Name__c = name;
        patient.Address__c = address;
        patient.Email__c = email;
        patient.Phone__c=phone;
        patient.DOB__c=dob;
        patient.Weight__c=weight;
        patient.Gender__c=gender;
        patient.Blood_Group__c=bloodGroup;
        
        if(id!=null) patient.Id = id;
        Upsert patient;
    }

    @AuraEnabled 
    public static void deleteRecord(Id id) {
        Paitent__c patient = new Paitent__c(Id=id);
        delete patient;
    }

    @AuraEnabled
    public static List<String> getPicklistvalues(String objectName, String field_apiname,Boolean nullRequired){
        List<String> optionlist = new List<String>();
        
        Map<String,Schema.SObjectType> gd = Schema.getGlobalDescribe(); 
        Map<String, Schema.SObjectField> field_map = gd.get(objectName.toLowerCase()).getDescribe().fields.getMap(); 
        
        List<Schema.PicklistEntry> picklistValues = field_map.get(field_apiname).getDescribe().getPickListValues();
        
        if(nullRequired == true){
            optionlist.add('--None--');
        }
        
        for (Schema.PicklistEntry pv : picklistValues) {
            optionlist.add(pv.getValue());
        }
        return optionlist;
    }
}