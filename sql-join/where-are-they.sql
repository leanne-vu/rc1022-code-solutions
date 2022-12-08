select "a"."line1",
       "c"."name",
       "a"."district",
       "count"."name"
  from "addresses" as "a"
  join "cities" as "c" using ("cityId")
  join "countries" as "count" using ("countryId")
