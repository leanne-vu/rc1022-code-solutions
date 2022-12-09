select "c"."firstName",
       "c"."lastName",
       sum("payments"."amount")
from "customers" as "c"
join "rentals" using ("customerId")
join "payments" using ("rentalId")
group by "c"."firstName", "c"."lastName"
order by sum("payments"."amount") desc;
