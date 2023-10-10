// #02_pages
//react.js 컴포넌트를 export하고 있는 파일을 pages 폴더 안에 두기만 하면 웹에서 보인다!
//next.js가 알아서 파일명을 url명으로 사용
// 컴포넌트의 이름(Home)보다는 파일명이 더 중요 ⭐
export default function Home(){
    return (
        <div>
            <h1>hello</h1>
        </div>
    );
}

//next.js의 예외
//1. index.js 페이지 = 앱의 "홈"
//2. jsx를 사용한다면 React.js를 임포트할 필요 없음 (하지만 리액트 메소드(useState, useEffect)를 쓰고 싶다면 임포트 필수!)

