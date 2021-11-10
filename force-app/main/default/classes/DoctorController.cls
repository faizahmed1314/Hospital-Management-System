public with sharing class DoctorController {
    public DoctorController() {

    }

    @AuraEnabled 
    public static List<Doctor__c> getDoctor() {
        List<Doctor__c> doctors = [Select Id, Doctor_Name__c, Email__c,Phone__c,DOB__c,Gender__c,Blood_Group__c,Specialization__c FROM Doctor__c];
        return doctors;
    }

    @AuraEnabled 
    public static void upsertDoctor(String name, String email,String phone,date dob,String gender, String bloodGroup, String specialization, Id id) {
        Doctor__c doctor = new Doctor__c();
        doctor.Doctor_Name__c = name;
        doctor.Email__c = email;
        doctor.Phone__c=phone;
        doctor.DOB__c=dob;
        doctor.Gender__c=gender;
        doctor.Blood_Group__c=bloodGroup;
        doctor.Specialization__c=specialization;
        if(id!=null) doctor.Id = id;
        Upsert doctor;
    }

    @AuraEnabled 
    public static void deleteRecord(Id id) {
        Doctor__c doctor = new Doctor__c(Id=id);
        delete doctor;
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