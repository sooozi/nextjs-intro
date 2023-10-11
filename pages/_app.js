// #07_Custom App (Global 전역 style 적용하기)
//next.js가 about페이지를 렌더링하려고 할 때,
//next.js는 about페이지의 컴포넌트를 가져다가 component 프롭으로서 _app.js 파일 내의 App 함수에 전달
//(예 : component 텍스트가 있는 자리에 어바웃 페이지의 About이 들어감!)

import NavBar from "../components/NavBar";

//next.js로 앱을 만들때는 global css 파일을 임포트할 수 없다. (모듈만 임포트 가능)
//하지만 커스텀 app 컴포넌트가 있는 곳에서라면 global css 파일 임포트 가능!!!!!

import "../styles/globals.css";

export default function App({ Component, pageProps}) {
    return (
        <div>
            {/* 
                이 곳에 NavBar을 넣어주면 모든 페이지에 다 적용됨!
                💁‍♀️ 헤더, 푸터를 요렇게 사용하면 되겠다!
            */}
            <NavBar />
            <Component {...pageProps} />
            <span>hello ☺️</span>
            {/* 이곳에 global을 넣어주면 모든 페이지에 적용됨! */}
            <style jsx global>{` 
                a {
                    color: white;
                }
            `}</style>
        </div>
    );
}