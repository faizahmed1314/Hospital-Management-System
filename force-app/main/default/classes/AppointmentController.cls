public class AppointmentController {

    public Appointment__c a{get;set;}
    
    public AppointmentController(){
    a=new Appointment__c();
    }
    
    public pagereference save(){
    insert a;
    return null;
    }

    public pagereference saveandnew(){
    insert a;
    
    pagereference pageref =new PageReference('/apex/HospitalManagementSystem');
    a.clear();
    return pageref;
    }
    
}