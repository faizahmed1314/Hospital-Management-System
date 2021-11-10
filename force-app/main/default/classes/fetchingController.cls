public class fetchingController {

    public list<Book__c>  bookList {get;set;}
    public Integer id{get;set;}
    public Integer uid{get;set;}

    public fetchingController(){
           bookList = [Select Id ,Name , author__c , title__c , price__c from Book__c];
    }

// Method to delete Record  
        public PageReference deleteBook() {
                String bookId = ApexPages.currentPage().getParameters().get('id');
                System.debug('book lsit id is--------------------- '+bookId);
                if (bookId!=''){
                 Book__c book = [Select id from Book__c where id=:bookId ];
                  delete book ;
                }
        return null;
   }

   // Method to update Book Record 

   public PageReference updateBook() {
        String bookUid = ApexPages.currentPage().getParameters().get('uid');
        System.debug('The id for update is ------------------'+bookUid);
        if (bookUid!=''){
        Book__c book =[select Id  from Book__c where id = : bookUid];
            book.Author__c = 'Galvin & Galvin';
        update book;
        }
        return null;
   }

}