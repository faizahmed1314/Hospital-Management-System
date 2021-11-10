public class AjaxWildcard {
    Public string inputtext{get;set;}
        Public List<account> accList{get;set;}
        Public boolean flagshow{get;set;}
        Public AjaxWildcard(){
        flagshow = false;
        }    
        
        Public void actionSupMethod(){
         system.debug('inputtext-->'+inputtext);
        
          accList = database.Query('select name,accountnumber from account where name like '+'\''+'%'+inputtext+'%'+'\'');
        }
            
    
    }