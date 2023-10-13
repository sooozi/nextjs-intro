// #2.03_Server Side Rendering
import { useEffect, useState } from "react";
import Seo from "../components/Seo";

//Server Side Rendering
//우리 페이지가 오직 server side render만 할지 선택할 수 있도록 만들어보자!
//getServerSideProps
//=> 이름이 정말 중요!! 다른 걸로 바꾸면 안됨!!!
//=> 해당 함수에 쓴 코드는 server에서 돌아가게 됨(run), 클라이언트쪽이 아니라 server쪽에서만 작동
//=> 이곳은 클라이언트가 볼 수 없기 때문에 api키 숨기기도 가능!

//react이 주도권은 프론트가 가지고 있다.
//nextJS가 백엔드에서 받아온 props를 리턴해서 프론트에 가져다 주면, 리액트가 props를 가져와서 result array를 뽑아줌


export default function Home({results}){
    return (
      <div className="container">
        <Seo title="Home" />
        {results?.map((movie) => (
          <div className="movie" key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
            <h4>{movie.original_title}</h4>
          </div>
        ))}
        <style jsx>{`
          .container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            padding: 20px;
            gap: 20px;
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

//page가 유저에게 보여지기 전에 props를 받아오는 function
export async function getServerSideProps(){
  const { results } = await (await fetch(`http://localhost:3000//api/movies`)).json();
  return {
    props: {
      results,
    },
  };
}

