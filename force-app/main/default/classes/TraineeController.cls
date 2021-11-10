public with sharing class TraineeController {
    public TraineeController() {

    }

   
    // public static void createTrainee(String name, String address,Integer age) {
    //     Trainee__c trainee = new Trainee__c();
    //     trainee.Name = name;
    //     trainee.Address__c = address;
    //     trainee.Age__c=age;
    //     insert trainee;
    // }
     @AuraEnabled 
    public static void upsertTrainee(String name, String address,Integer age, Id id) {
        Trainee__c trainee = new Trainee__c();
        trainee.Name = name;
        trainee.Address__c = address;
        trainee.Age__c=age;
        if(id!=null) trainee.Id = id;
        Upsert trainee;
    }

    @AuraEnabled 
    public static List<Trainee__c> getTrainee() {
        List<Trainee__c> trainee = [Select Id, Name, Address__c,Age__c FROM Trainee__c];
        return trainee;
    }

    @AuraEnabled 
    public static void deleteRecord(Id id) {
        Trainee__c trainee = new Trainee__c(Id=id);
        delete trainee;
    }
}