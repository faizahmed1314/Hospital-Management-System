public with sharing class doctorAppointmentController {


    @AuraEnabled(cacheable=true)
    public static List<Doctor__c> doctorsNameAndIdList() {
    return [SELECT Id, Doctor_Name__c FROM Doctor__c];
    }

    @AuraEnabled(cacheable=true)
    public static List<Appointment__c> getAppointmentByDoctorId(Id doctorId) {
    return [SELECT Id,Name,	Doctor_Name__c,Patient_Name__c, Appointment_Date__c,doctor_Name__r.Name FROM Appointment__c where doctor_Name__r.Id=:doctorId];
    }


    //Get all doctors
    // @AuraEnabled
    // public static List<Doctor> getAllDoctors() {
    // List<SObject> doctors = Database.query(
    //     'SELECT Id, Doctor_Name__c FROM Doctor__c'
    // );
    // return getDoctors(doctors);
    // }

     //Wrap Doctor__c SObject into Doctor object
  // public static List<Doctor> getDoctors(List<SObject> objs) {
  //   List<Doctor> doctors = new List<Doctor>();
  //   for (SObject obj : objs) {
  //       Doctor doctor = new Doctor();
  //       doctor.doctorId = obj.Id;
  //       doctor.doctorName = String.valueOf(obj.get('Doctor_Name__c'));
  //       doctors.add(doctor);
  //   }

  //   return doctors;
  // }

    //Wrapper Class to represent a Doctor
    // public class Doctor {
    //     @AuraEnabled
    //     public String doctorId;
    //     @AuraEnabled
    //     public String doctorName;
    //   }
}