select "f"."releaseYear",
       "genres"."name"
  from "films" as "f"
  join "filmGenre" using ("filmId")
  join "genres" using ("genreId")
  where "films"."title" = 'Boogie Amelie'
