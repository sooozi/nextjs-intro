// #2.00_Patterns

import NavBar from "../components/NavBar";

//헤드 만들기 시작!
import Head from "next/head"

//Seo.js 생성 후 헤드 임포트
import Seo from "../components/Seo"

export default function Home(){
    return (
        <div>
            {/*
                Head 컴포넌트 안에 들어가는 모든 것들이 우리 html의 head 안에 보여짐
                하지만 index.js에 넣어두면 해당 페이지에서만 타이틀이 다르게 보임!
                => 그래서 컴포넌트 폴더에 Seo.js를 생성!!
            */}
            {/*
                <Head>
                    <title>Home | Next Movies</title>
                </Head> 
            */}

            {/* Seo.js 생성 후 코드 */}

            <Seo title="Home" />
            <h1 className="active">hello</h1>
        </div>
    );
}
