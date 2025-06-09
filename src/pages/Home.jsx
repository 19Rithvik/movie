import { useState, useEffect } from "react";
import { searchmovies, getpopularmovies } from "../services/api";
import "../css/Home.css";
import Moviecard from "../components/Moviecard";

function Home() {
  const [searchQuery, Setsearchuery] = useState();
  const [data, setdata] = useState([]);
  const [errdata, seterrdata] = useState(null);
  const [loaddata, setloaddata] = useState(true);

  useEffect(() => {
    const loadpopularmovies = async () => {
      try {
        const popularmovies = await getpopularmovies();
        setdata(popularmovies);
      } catch (err) {
        console.log(err);
        seterrdata("failed to load the movie");
      } finally {
        setloaddata(false);
      }
    };
    loadpopularmovies();
  }, []);

  const SeacrhMovie = async (e) => {
    e.preventDefault();
    if(!searchQuery.trim()) return
    if(loaddata) return

    setloaddata(true)
    try{
      const results = await searchmovies(searchQuery)
      setdata(results)
      seterrdata(null)
    } catch(err){
      console.log(err)
      seterrdata("falied to search")
    } finally{
      setloaddata(false)
    }

    Setsearchuery("");
  };

  return (
    <div className="home">
      <form onSubmit={SeacrhMovie} className="search-form">
        <input
          type="text"
          placeholder="Search for movie"
          className="search-input"
          value={searchQuery}
          onChange={(e) => Setsearchuery(e.target.value)}
        />
        <button type="submit" className="submit-button">
          Search
        </button>
      </form>
      {errdata && <div className="error-message">{errdata}</div>}
      {loaddata ? (
        <div className="Loading">Movies are loading</div>
      ) : (
        <div className="movies-grid">
          {data.map((movie) => (
            <Moviecard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
