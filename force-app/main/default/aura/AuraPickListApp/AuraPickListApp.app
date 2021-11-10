<aura:application extends="force:slds">    
    <aura:attribute name="selectedValue" type="String" description="Picklist selected value" ></aura:attribute>
    <c:ShowPickListValueLWC fieldName="Level__c" value="{!v.selectedValue}"></c:ShowPickListValueLWC>
</aura:application>
