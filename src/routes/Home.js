import { useEffect, useState } from "react";
import styles from "../AppStyle.module.css";
import Movie from "../commponents/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovie] = useState([]);
  /*const getMovies = async () => {
        const response = await fetch(
          "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
        );
        const jsonData = await response.json();

        setMovie(jsonData.data.movies);
        setLoading(false);

        console.log(jsonData);
      };*/
  const getMovies = async () => {
    //위 주석과 비교해서 줄수 가 많이 줄어듬
    const jsonData = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
      )
    ).json();
    setMovie(jsonData.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <h2>Movie Ranking</h2>
      {loading ? (
        <div>loading...</div>
      ) : (
        <div className={styles.liWrap}>
          <ul>
            {movies.map((movieItem) => (
              <Movie
                key={movieItem.id}
                id={movieItem.id}
                rank={movieItem.rating}
                year={movieItem.year}
                img={movieItem.medium_cover_image}
                title={movieItem.title}
                summary={movieItem.summary}
                url={movieItem.url}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
export default Home;
