public class AccountDisplatRecClsExtn2 {
   
    public List<Contact> contList {get;set;}
    
     public AccountDisplatRecClsExtn2(AccountDisplatRecCls act){
       contList = [select id,FirstName,LastName,Email from Contact LIMIT 5];
     } 
}