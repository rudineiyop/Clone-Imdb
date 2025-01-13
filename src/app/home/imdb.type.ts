export type IMDBRatingType = {
    Source: string;
    Value: string;
  };
  
  export type IMDBListType = {
    Title: string;
    Year: string;
    Poster: string;
    Type: string;
    imdbID: string
  };
  
  export type IMDBFilmDetailType = {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: IMDBRatingType[];
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: string;
  };
  