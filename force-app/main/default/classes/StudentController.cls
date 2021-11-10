public with sharing class StudentController {
    public StudentController() {

    }
    @AuraEnabled 
    public static void createStudent(String name, String address,String email) {
        Student__c student = new Student__c();
        student.Name = name;
        student.Address__c = address;
        student.Email__c=email;
        insert student;
    }

    @AuraEnabled 
    public static List<Student__c> getStudent() {
        List<Student__c> student = [Select Id, Name, Address__c,Email__c FROM Student__c];
        return student;
    }
}