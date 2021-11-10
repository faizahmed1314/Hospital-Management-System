@isTest
public with sharing class HelloApexTest {
    @isTest
    public static void testPrintName(){
        HelloApex.printYourName();
    }

    @isTest
    public static void testGetAge(){
        Integer age=HelloApex.getAge();
        System.assertEquals(18, age);
    }

    @TestSetup
    static void makeData(){
     Account acc=new Account();
     acc.Name='Dummy Account';
     acc.Phone='111111111';
     insert acc;   
    }

    @isTest
    public static void testUpdateAccountPhoneNumber(){
        
        HelloApex.updateAccountPhoneNumber('Dummy Account', '19438437');

        String accPhone=[
            SELECT Name, Phone
            FROM Account
            WHERE Name='Dummy Account'
            Limit 1
        ].Phone;

        System.assertEquals(accPhone, '19438437');
        
    }
}