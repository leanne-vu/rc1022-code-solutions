select "genres"."name" as "genre",
        count("filmGenre".*) as "numberOfFilms"
from "actors"
join "castMembers" using ("actorId")
join "films" using ("filmId")
join "filmGenre" using ("filmId")
join "genres" using ("genreId")
where "actors"."actorId" = 178
group by "genreId"
