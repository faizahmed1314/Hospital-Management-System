public with sharing class homePageControllerHMS {

    public List<Paitent__c>  patlists{set;get;}
    public List<Doctor__c>  doclists{set;get;}
    public List<Appointment__c> applists{set;get;}

    public homePageControllerHMS()
    {
     patlists=[Select id,name,Phone__c,(Select Id,  Name, Appointment_Date__c From Appointments__r) From Paitent__c];
     doclists=[select id,name,Phone__c,(Select Id,  Name, Appointment_Date__c From Appointments__r) from Doctor__c];
     applists=[select id,name,Appointment_Date__c, Patient_Name__c,Doctor_Name__c,Doctor_Name__r.Name,Patient_Name__r.Name from Appointment__c];
    }
}