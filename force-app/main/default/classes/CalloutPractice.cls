public with sharing class CalloutPractice {
    public CalloutPractice() {

    }

    static String api_endpoint='https://th-apex-http-callout.herokuapp.com/animals';
    static String get_request='GET';
    static String post_request='POST';


    public static void getAnimalFromExternalService(){
        
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint(api_endpoint);
        request.setMethod(get_request);
        HttpResponse response = http.send(request);
        // If the request is successful, parse the JSON response.
        if (response.getStatusCode() == 200) {
            // Deserialize the JSON string into collections of primitive data types.
            Map<String, Object> results = (Map<String, Object>) JSON.deserializeUntyped(response.getBody());
            // Cast the values in the 'animals' key as a list
            List<Object> animals = (List<Object>) results.get('animals');
            System.debug('Received the following animals:');
            for (Object animal: animals) {
                System.debug(animal);
            }
        }        
    }

    public static void postAnimalToExternalService(){
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint(api_endpoint);
        request.setMethod('POST');
        request.setHeader('Content-Type', 'application/json;charset=UTF-8');
        // Set the body as a JSON object
        request.setBody('{"name":"mighty moose"}');
        HttpResponse response = http.send(request);
        if (response.getStatusCode() != 201) {
            System.debug('The status code returned was not expected: ' + 
                response.getStatusCode() + ' ' +
        response.getStatus());
        } else {
            System.debug(response.getBody());
        }

    }

    public static void getAnimalFromNamedCredential(){
        
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint('callout:animal_nc/animals');
        request.setMethod(get_request);
        HttpResponse response = http.send(request);
        // If the request is successful, parse the JSON response.
        if (response.getStatusCode() == 200) {
            // Deserialize the JSON string into collections of primitive data types.
            Map<String, Object> results = (Map<String, Object>) JSON.deserializeUntyped(response.getBody());
            // Cast the values in the 'animals' key as a list
            List<Object> animals = (List<Object>) results.get('animals');
            System.debug('Received the following animals:');
            for (Object animal: animals) {
                System.debug(animal);
            }
        }        
    }
}