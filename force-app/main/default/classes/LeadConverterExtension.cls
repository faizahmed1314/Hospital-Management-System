public with sharing class LeadConverterExtension {
    private Lead l;
    public LeadConverterExtension(ApexPages.StandardController ctr) {
      l = [SELECT FirstName,LastName,Phone,Company FROM Lead WHERE Id=:ctr.getRecord().Id];
    }
 
    public PageReference convertLead() {
      // Contact fields that will be copied from the Lead
      String [] contactUpdateFields = new String [] {'FirstName',
                                                     'LastName',
                                                     'Phone',
                                                     'AccountId'};
 
      // Obtaining the field name/token map for the Contact object
      Map<String,Schema.SObjectField> m = Schema.SObjectType.Contact.fields.getMap();
      for (String fieldToCheck : contactUpdateFields) {
        // Check if the user has create access on the each field
        if (!m.get(fieldToCheck).getDescribe().isCreateable()) {
          ApexPages.addMessage(new ApexPages.Message(ApexPages.Severity.FATAL,
                                                    'Insufficient access'));
          return null;
        }
      }
       
      List<Account> accts = [SELECT Id FROM Account WHERE Name=:l.Company LIMIT 1];
      Account a;
      if (accts.size() == 0) {
        // Check if the user has create access on the Account.Name field
        if (!Schema.sObjectType.Account.fields.Name.isCreateable()){
         ApexPages.addMessage(new ApexPages.Message(ApexPages.Severity.FATAL,
                                                    'Insufficient access'));
         return null;
        }
        a = new Account(Name=l.Company);
        insert a;
         
      } else {
        a = accts.get(0);
      }
       
      Contact c = new Contact(FirstName=l.FirstName,
                              LastName =l.LastName,
                              Phone    =l.Phone,
                              AccountId=a.Id);
      insert c;
      return null;
    }
 
}