public class ClassInsert {
    public ClassInsert(){
         mv=new Movie__c();
    }

    public Movie__c mv{get;set;}

    public Pagereference insertMe(){
        insert mv;
        return null;
    }

    public Pagereference updateMe(){
        update mv;
        return null;
    }

    public Pagereference deleteMe(){
        delete mv;
        return null;
    }
}