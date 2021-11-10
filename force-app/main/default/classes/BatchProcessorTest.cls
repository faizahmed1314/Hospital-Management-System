@isTest
public class BatchProcessorTest {

    @isTest
    private static void testBatchClass(){
        //Load Test Data
        List<Lead> leads=new List<Lead>();
        for(Integer i=0;i<200;i++){
            leads.add(new Lead(LastName='Connock', Company='Salesforc'));
            
        }
        insert leads;
        
        //Perform the test
        Test.startTest();
        BatchProcessor lp=new BatchProcessor();
        Id batchId=Database.executeBatch(lp,200);
        Test.stopTest();
        
        //Check the result

        List<Lead> updatedLeads=[SELECT Id, Name FROM Lead Where leadSource='DreamForce'];
        System.assertEquals(200, updatedLeads.size(), 'ERROR : At least 1 lead record not updated correctly');
    }
}