import { useLazyQuery } from "@apollo/client/react"
import { useState } from "react"
import type { Movie } from "../types/movie"
import { gql } from "@apollo/client"


const GET_MOVIE=gql`
query GetMovie($name:String!){
  movie(name:$name){
    name
    yearOfPublication
    isInTheaters
  }
}`
const FindMovies = () => {

  const [findMovie, setFindMovie] = useState<string>("")




  const [fetchMovie,{data:movieData,loading:movieLoading,error:movieError}]=useLazyQuery<{movie: Movie}>(GET_MOVIE)

 
  return (
    <div>
        <h1>Search Movie</h1>
        <input type="text" placeholder="Enter Movie Name..." value={findMovie} onChange={(e)=>setFindMovie(e.target.value)} />
        <button onClick={()=>fetchMovie({variables:{name:findMovie}})}>Search</button>
        <hr />
        {movieLoading && <p>Loading...</p>}
        {movieError && <p>Error: {movieError.message}</p>}
        {movieData && movieData.movie?
          <div>
            <h2>Movie Details:</h2>
            <p>Name: {movieData.movie.name}</p>
            <p>Year Of Publication: {movieData.movie.yearOfPublication}</p>
            <p>Is In Theaters: {movieData.movie.isInTheaters ? "Yes" : "No"}</p>
          </div>:<p>No Movie Found</p>
        }
        <hr />
      </div>
  )
}

export default FindMovies