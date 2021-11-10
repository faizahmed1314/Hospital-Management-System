public with sharing class WrapperExample {

    public  class AccountWrapper {
        public String accountName{get;set;}
        public String accountType{get;set;}
        public Boolean isChecked{get;set;}
    }

    public List<AccountWrapper> accountWrapperList{get;set;}
    public List<AccountWrapper> selectedWrapperList{get;set;}

    public WrapperExample() {

        selectedWrapperList=new List<AccountWrapper>();
        accountWrapperList=new List<AccountWrapper>();

        AccountWrapper obj=new AccountWrapper();
        obj.accountName='test corp';
        obj.accountType='other';
        obj.isChecked=false;

        accountWrapperList.add(obj);

        AccountWrapper obj2=new AccountWrapper();
        obj2.accountName='poc12 corp';
        obj2.accountType='prospect';
        obj2.isChecked=false;

        accountWrapperList.add(obj2);

        for(Account acObj:[Select id, name, type from Account LIMIT 5]){

            AccountWrapper obj3=new AccountWrapper();

            obj3.accountName=acObj.Name;
            obj3.accountType=acObj.Type;
            obj3.isChecked=false;

            accountWrapperList.add(obj3);
        }
    }

    public void displaySelectedRecords(){
        selectedWrapperList=new List<AccountWrapper>();
        for(AccountWrapper o:accountWrapperList){
            if(o.isChecked){
                selectedWrapperList.add(o);
            }
        }
    }
   
}