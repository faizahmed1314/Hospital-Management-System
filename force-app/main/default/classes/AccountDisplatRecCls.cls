Public class AccountDisplatRecCls{
    public List<Account> getAccounts(){
     List<Account> accList = [select id,Name,AccountNumber from Account LIMIT 10];
     return accList;
    
    }  
}