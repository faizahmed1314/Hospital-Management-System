public class AccountControllerExtension {
    private final Account acct;
    public List<Account> accountList {get;set;}
    //The Extension constructor initialize the private member
    //variable acct by using the getRecord method from the standerd
    //Controller
    public AccountControllerExtension(Apexpages.StandardController stdController) {
        this.acct=(Account)stdController.getRecord();

        accountList=[SELECT Id, Name,Website FROM Account LIMIT 10];
    }

    public string GetGreeting(){
        return 'Hello '+acct.Name+' (' +acct.Id+ ')';
    }
}