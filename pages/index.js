// #07_Custom App (Global 전역 style 적용하기)
// next.js의 중요한 컨셉 : app component와 app page
// app component
//-> nextJS가 모든 페이지를 렌더링할 수 있게 만든다.
//-> 반드시 pages폴더 안에 '_app.js'로 만들어야만 사용 가능! (_app.js로 만드는 이유 : _app.js가 about, index보다 위에 위치하기 때문에 next.js는 about이 랜더링되기 전에 먼저 app을 보기 때문)

import NavBar from "../components/NavBar";

export default function Home(){
    return (
        <div>
            {/* <NavBar /> */}
            <h1 className="active">hello</h1>
            {/*
                'global'이라는 prop을 추가해주면 전역 스타일 적용 가능!
                하지만 아래처럼 수정하는 경우, about페이지에서는 적용이 안됨!
                (about 페이지에는 스타일이 적용되어있지 않으니까!)
                => 그래서 필요한 것이 바로 app component!!!!!!!!!!!!!!!!!!!!
                <style jsx global>{` 
                    a {
                        color: white;
                    }
                `}</style>
            */}
        </div>
    );
}
