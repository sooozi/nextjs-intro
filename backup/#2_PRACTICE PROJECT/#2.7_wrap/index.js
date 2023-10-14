// #2.07_Catch All
//1.catch-all URL(뭐든 캐치해내는 URL)만들기!
//(홈페이지에서 클릭해서 들어오지 않아도 상세페이지의 영화 제목을 볼 수 있다!)
//=>[id].js > [...params].js로 파일명 변경


import { useEffect, useState } from "react";
import { useRouter } from "next/router"
import Seo from "../components/Seo";
import Link from "next/link";

//아래 코드 수정해주기 ==> 상세페이지 url에서 제목 보임!!!
export default function Home({results}){
    const router = useRouter();
    const onClick = (id, title) => {
      router.push(`/movies/${title}/${id}`);
    };

    return (
      <div className="container">
        <Seo title="Home" />
        {results?.map((movie) => (
              <div onClick={() => onClick(movie.id, movie.original_title)} className="movie" key={movie.id}>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                <h4>
                  <Link href={`/movies/${movie.original_title}/${movie.id}`}>
                    {movie.original_title}
                  </Link>
                </h4>
              </div>
        ))}
        <style jsx>{`
          .container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            padding: 20px;
            gap: 20px;
          }
          .movie {
            cursor: pointer;
          }
          .movie img {
            max-width: 100%;
            border-radius: 12px;
            transition: transform 0.2s ease-in-out;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
          }
          .movie:hover img {
            transform: scale(1.05) translateY(-10px);
          }
          .movie h4 {
            font-size: 18px;
            text-align: center;
          }
        `}</style>
      </div>
    );
}

export async function getServerSideProps(){
  const { results } = await (await fetch(`http://localhost:3000//api/movies`)).json();
  return {
    props: {
      results,
    },
  };
}
