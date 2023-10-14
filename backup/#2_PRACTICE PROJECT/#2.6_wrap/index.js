// #2.06_Movie Detail 
import { useEffect, useState } from "react";
import { useRouter } from "next/router"
import Seo from "../components/Seo";


//홈에서 영화를 클릭하면 상세페이지로 넘어가도록 작업하기!
import Link from "next/link";

export default function Home({results}){
    //navigating하는 다른 방법 : router hook
    const router = useRouter();
    // const onClick = (id) => {
    //   router.push(`/movies/${id}`);
    // }; 

    //상세페이지 입장 시 노출되는 url 숨기기 (url 마스킹)
    const onClick = (id, title) => {
      //url 정보 넣어주기
      router.push({
        pathname: `/movies/${id}`,
        query: {
          title,
        },
      },
      //url숨기고 아래 텍스트로 보이도록 url 마스킹
      `/movies/${id}`);
    };

    return (
      <div className="container">
        <Seo title="Home" />
        {results?.map((movie) => (

          //방법 1.아래와 같이 수정하기(포스터 클릭 시 상세페이지로 연결)
          //=> a링크가 div를 감싸니까 html적으로 좀 이상~
          //<Link href={`/movies/${movie.id}`} key={movie.id}>
          //    <div className="movie">
          //      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          //      <h4>{movie.original_title}</h4>
          //    </div>
          //</Link>


          //방법 2.타이틀을 클릭하면 상세페이지로 연결
              <div onClick={() => onClick(movie.id, movie.original_title)} className="movie" key={movie.id}>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                <h4>
                  <Link href={{
                    pathname: `/movies/${movie.id}`,
                    query: {
                      title: movie.original_title,
                    },
                  }}
                  as={`/movies/${movie.id}`}
                  >
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

