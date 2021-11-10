public class DML_Query {

    
    /*
     * Insert=>
     * 
    Integer num=12;
	Account acc=new Account(Name='Faiaz Ahmed', Phone='12345343');
	insert acc;
	system.debug('Account Id => '+ acc.ID);

    Account acc1=new Account(Name='Nusrat Ahmed', Phone='12345343');
    Account acc2=new Account(Name='Monisa Ahmed', Phone='12345343');
    insert acc1;
    insert acc2;

    List<Account> accList=new List<Account>();
    Account acc1=new Account(Name='Ahmed1', Phone='12345343');
    Account acc2=new Account(Name='Ahmed2', Phone='12345343');
    accList.add(acc1);
    accList.add(acc2);
    insert accList;


    Account acc=new Account(Name='Raju Ahmed', Phone='12345343');
    insert acc;
    Contact con=new Contact(FirstName='Tofael', LastName='Ahmed', AccountId=acc.Id);
    insert con;

    List<Account> accList=new List<Account>();
    
    for(Integer i=0; i<100; i++){
        Account acc=new Account();
        acc.Name='Training'+i;
        accList.add(acc);
    }

insert accList;

	*Update =>

    Account acc=[SELECT Id,Name,Phone From Account Where Name='Ahmed1'];
    system.debug('acc=>'+acc);
    acc.Phone='3542531';
    update acc;
    
    Account UpdatedAcc=[SELECT Id,Name,Phone From Account Where Name='Raju Ahmed'];
    system.assertEquals(UpdatedAcc.Phone, acc.Phone, 'Equal');



    Contact con=[SELECT Id, FirstName, LastName, Phone, Account.Phone FROM Contact Where 
                FirstName='Tofael' AND LastName='Ahmed' AND AccountId!=null];
    
    con.Phone='123435';
    con.Account.Phone='111111';
    update con;
    update con.Account;

    List<Account> accList=[SELECT Id,Name
                           From Account 
                           Where Name
                           Like '%Training%'];
    
    for(Integer i=0; i<100; i++){
        accList[i].Name='BJIT Account '+i;
    }
    
    update accList;

	*upsert


 List<Account> accList=new List<Account>();
    Account acc1=new Account(Name='Ahmed3', Phone='12345343');
    Account acc2=[SELECT Id,Name,Phone From Account Where Name='Ahmed2'];
    
	acc2.Phone='12121212';
	accList.add(acc1);
    accList.add(acc2);
    upsert accList;

* Merge =>

	Account masterAcc=[SELECT Id,Name,Phone From Account Where Name='Ahmed3'];
    Account mergeAcc=[SELECT Id,Name,Phone From Account Where Name='Raju Ahmed'];
    merge masterAcc mergeAcc;

* Delete =>

	Account acc=[SELECT Id,Name,Phone From Account Where Name='Ahmed2'];
    delete acc;

    List<Account> accList=[SELECT Id,Name
                           From Account 
                           Where Name
                           Like '%BJIT%'];
    
    delete accList;

* UnDelete=>

  Account acc=[SELECT Id,Name,Phone From Account Where Name='Ahmed2' ALL ROWS];
  undelete acc;

    List<Account> accList=[SELECT Id,Name
                           From Account 
                           Where Name
                           Like '%BJIT Account%'
                           All Rows];
    
    undelete accList;

* Handle Exception

try{
    Account acc=new Account();
    insert acc;
}
catch(DMLException e){
    system.debug('Error=>'+e.getMessage());
}
	*/

    
   
}