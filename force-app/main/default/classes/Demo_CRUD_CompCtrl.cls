public class Demo_CRUD_CompCtrl {
	@AuraEnabled
    public static List<Account> getAllRecords()
    {   
        return [select id, Name,Industry, Phone from Account where Industry != null and Phone != null Limit 10];    
    }
}