// #2.01_Fetching Data
import { useEffect, useState } from "react";
import Seo from "../components/Seo";

// next.js를 이용해 API keys를 숨겨보자!!! => 먼저 영화 api부터 불러올게요!
// 영화 api 가져오기 
// 1. 키 작성
const API_KEY = "81a92362658e35f04c2b390845ea5f68";

export default function Home(){
    // 2. useState 생성
    const [movies, setMovies] = useState([]);
    // 3. useEffect로 영화 정보를 줄 api url을 fetch해오기!
    useEffect(() => {
        (async () => {
          const { results } = await (
            await fetch(
              `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
            )
          ).json();
          setMovies(results);
        })();
    }, []);
    return (
      <div>
        <Seo title="Home" />
        {/* 
          4. 영화 데이터들 노출 & 영화 데이터 존재 여부 확인
        */}
        {!movies && <h4>Loading...</h4>}
        {movies?.map((movie) => (
          <div key={movie.id}>
            <h4>{movie.original_title}</h4>
          </div>
        ))}
      </div>
    );
}
