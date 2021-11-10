public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
        public static List<Contact> getContactList() {
            List<Contact> contacts = 
                    [SELECT Id, Name, MailingStreet, Phone, Email, LeadSource FROM Contact];
    
            //Add isAccessible() check
            return contacts;
        }
    }