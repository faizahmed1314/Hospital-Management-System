public with sharing class HelloApex {
    public HelloApex() {

    }

    public static void updateAccountPhoneNumber(String name, String phoneNumber){
        List<Account> accList=[
            SELECT Name, Phone
            FROM Account
            WHERE Name=:name
            Limit 1
        ];

        if(accList.size()>0){
            accList[0].Phone=phoneNumber;
            update accList;
        }
    }

    public static void printYourName(){
        System.debug('My name is Faiz');
    }

    public static Integer getAge(){
        return 18;
    }

    public static Student getStudent(){
        Student student=new Student();
        student.name='Faiz Ahmed';
        student.age=0;

        return student;
    }

    public class Student{
        public String name;
        public Integer age;
    }
}