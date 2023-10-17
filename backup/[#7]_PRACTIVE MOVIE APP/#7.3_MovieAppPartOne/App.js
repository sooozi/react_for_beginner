//#7.3 Movie App part One
import { useEffect, useState } from "react";

function App() {
  //로딩 중임을 보여주고 로딩이 끝나면 영화를 보여준다.
  const [loading, setLoading] = useState(true);
  //영화를 보여주는 state 만들기
  const [movies, setMovies] = useState([]);
  //then 대신 await함수를 쓰는 방법
  const getMovies = async () => {
    const json = await (
      await fetch(
        'https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year'
      )
    ).json();
    setMovies(json.data.movies);
    //로딩 텍스트 없애주기
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {/* map을 사용해 영화 보이게 만들기 (map을 쓸 때는 반드시 key도 넣어줘야함!!!!) */}
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
          <div key={movie.id}>
            <img src={movie.medium_cover_image} />
            <h2>{movie.title}</h2>
            <p>{movie.summary}</p>
            <ul>
              {movie.genres.map(g => <li key={g}>{g}</li>)}
            </ul>
          </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
