import { useQuery } from "@apollo/client/react";
import { gql } from "@apollo/client";

import Loading from "./Loading";
import type { Movie } from "../types/movie";
import ErrorMessage from "./ErrorMessage";

const GET_ALL_MOVIES = gql`
  query GetAllMovies {
    movies {
      id
      name
      yearOfPublication
      isInTheaters
    }
  }
`;
const Movies = () => {
  const {
    data: moviesData,
    loading: moviesLoading,
    error: moviesError,
  } = useQuery<{ movies: Movie[] }>(GET_ALL_MOVIES);
  if (moviesLoading) return <Loading />;
  if (moviesError) return <ErrorMessage error={moviesError} />;
  return (
    <div>
      <h1>List Of Movies</h1>
      {moviesData && moviesData.movies ? (
        moviesData.movies.map((movie: Movie) => {
          return (
            <div key={movie.id}>
              <p>Name: {movie.name}</p>
              <p>Year Of Publication: {movie.yearOfPublication}</p>
              <p>Is In Theaters: {movie.isInTheaters ? "Yes" : "No"}</p>
              <hr />
            </div>
          );
        })
      ) : (
        <p>No Movies Found</p>
      )}
    </div>
  );
};

export default Movies;
