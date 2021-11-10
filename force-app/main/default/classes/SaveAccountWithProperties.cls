public with sharing class SaveAccountWithProperties {
    public SaveAccountWithProperties() {

    }

    public String accountName{get;set;}
    public String accountType{get;set;}

    public Pagereference saveAccount(){
        Account obj=new Account();
        obj.Name=accountName;
        obj.Type=accountType;
        insert obj;
        return new Pagereference('/'+obj.Id);
    }
}