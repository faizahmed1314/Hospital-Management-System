public class BankAccount {
    
	Integer balance;
    String accountNumber;
    Date openingDate;
    
    public BankAccount(){
        
        balance=0;
        accountNumber='1234';
		openingDate=Date.newInstance(2021, 12, 1);
        
        system.debug('Account No'+accountNumber);
        system.debug('Opening Date'+openingDate);
    }
}