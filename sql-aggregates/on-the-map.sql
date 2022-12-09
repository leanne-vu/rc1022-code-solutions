select "countries"."name" as "countryName",
        count(*) as "cities"
  from "cities"
  join "countries" using ("countryId")
  group by "countryId"
