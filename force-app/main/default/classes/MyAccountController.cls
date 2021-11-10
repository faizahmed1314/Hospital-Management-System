public  class MyAccountController {




        public Account account { get; private set; }
        public List<Account> accountList {get;set;}
    
        public MyAccountController() {
            Id id = ApexPages.currentPage().getParameters().get('id');
            account = (id == null) ? new Account() : 
                [SELECT Name, Phone, Industry FROM Account WHERE Id = :id];

            accountList=[SELECT Id, Name,Website FROM Account LIMIT 10];
        }
    
        public PageReference save() {
            try {
                upsert(account);
            } catch(System.DMLException e) {
                ApexPages.addMessages(e);
                return null;
            }
            //  After successful Save, navigate to the default view page
            PageReference redirectSuccess = new ApexPages.StandardController(Account).view();
            return (redirectSuccess);
        }

        public PageReference deleteMe() {
            try {
                delete(account);
            } catch(System.DMLException e) {
                ApexPages.addMessages(e);
                return null;
            }
            //  After successful Save, navigate to the default view page
            PageReference redirectSuccess = new ApexPages.StandardController(Account).view();
            return (redirectSuccess);
        }
    

}





    // public List<Account> accountList {get;set;}
    // private final Account account;

    // public MyAccountController() {
    //     accountList=[SELECT Id, Name,Website FROM Account LIMIT 10];

    //     account = [SELECT Id, Name, Site FROM Account 
    //     WHERE Id = :ApexPages.currentPage().getParameters().get('id')];
    // }


    // public Account getAccount() {
    //     return account;
    // }

    // public PageReference save() {
    //     update account;
    //     return null;
    // }