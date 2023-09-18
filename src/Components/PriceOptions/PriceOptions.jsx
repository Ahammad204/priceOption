
import PriceOption from "../priceOption/priceOption";

const PriceOptions = () => {

    
        const priceOptions = [
          {
            "id": "1",
            "name": "Basic Membership",
            "price": "$30 per month",
            "features": [
              "Access to cardio and weight equipment",
              "Locker room access",
              "Open during regular hours",
              "No commitment",
              "Discounts on gym merchandise",
              "Monthly fitness newsletter"
            ]
          },
          {
            "id": "2",
            "name": "Premium Membership",
            "price": "$50 per month",
            "features": [
              "Access to all gym facilities",
              "Free fitness classes",
              "Personal trainer consultation",
              "Locker and towel service",
              "24/7 access",
              "Access to sauna and steam room",
              "Discounts on spa services"
            ]
          },
          {
            "id": "3",
            "name": "Family Membership",
            "price": "$80 per month",
            "features": [
              "Access for up to 4 family members",
              "Access to all gym facilities",
              "Free childcare during workouts",
              "Monthly family fitness class",
              "24/7 access",
              "Discounts on family nutrition workshops",
              "Access to swimming pool"
            ]
          }
        ]
      
      


    return (
        <div className="m-10">
            
        <h2 className="text-5xl mb-4">Best Prices In the Town</h2>

             <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
             {

                priceOptions.map(option => <PriceOption  key={option.id} option = {option}></PriceOption>)

}
             </div>

        </div>
    );
};

export default PriceOptions;