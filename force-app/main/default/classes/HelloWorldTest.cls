@isTest
public with sharing class HelloWorldTest {
    @isTest
    public static void TestHelloWorld(){
        Integer num=HelloWorld.PrintHelloWorld();
        System.assertEquals(10, num);
    }
}