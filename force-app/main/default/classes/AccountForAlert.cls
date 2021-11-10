public class AccountForAlert {

    public Account acc {get;set;}

    public AccountForAlert() {
        acc=new Account();
    }

    public Pagereference saveAccount(){
        insert acc;
        return new Pagereference('/'+acc.Id);
    }
}