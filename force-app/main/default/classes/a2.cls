public class a2 {
    public a2(Apexpages.StandardController cont) {

    }

    List<Campaign> camps=[select Name, Description, StartDate, EndDate, BudgetedCost, ActualCost, Status From Campaign];

    public List<Campaign> getcamps(){
        return camps;
    }
}