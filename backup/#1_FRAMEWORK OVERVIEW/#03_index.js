// #03_Static Pre Rendering
//next.js 가장 좋은 기능 중 하나 : 앱 페이지들이 미리 렌더링됨!, 정적으로 생성됨!

//[create react app과 next.js 차이점]
//1. create react app은 client-side render를 하는 앱을 만든다는 것이다.
// 잠깐, client-side render란? => 브라우저가 자바스크립트를 가져와서 유저가 보는 UI를 만드는 모든 것을 한다!!!
// 💁‍♀️ 리액트를 예로 들자면, 리액트로 만든 페이지는 HTML에 root(비어있는 div)만 있고 나머지는 모두 자바스크립트로 보여주는거니까! 그 말이다!
// 그렇기 때문에, 속도가 느린 곳에서는 빈 하얀 화면이 먼저 보여지고 자바스크립트가 불러오는 동안 흰 화면이 보여진다! => 별루다!!!
//2. ⭐ next.js는 페이지 소스코드 어딘가에, 실제 html 태그가 있다.⭐
//속도가 느린 곳에서 또는 자바스크립트가 비활성화 되더라도 페이지가 문제없이 잘 보인다!


//[hydration] : react.js를 프론트엔드 안에서 실행하는 것!
//next.js는 초기 상태로 pre-rendering을 한다.
//1. 페이지를 처음 열었을 때 : 초기 상태 => 자바스크립트와 react.js가 로딩되지 않았더라도 html이 있어서 콘텐츠를 확인할 수 있음
//2. react.js가 (클라이언트로) 전송, 로딩됐을 때 : (이미 존재하던 것들과 연결되어서) react.js 앱으로 변환!

//hydration의 장점
//1. 유저가 웹사이트에 가면 초기 상태에 컴포넌트로 미리 생성된 html 페이지를 볼 수 있다.
//2. 이후에 상호작용이 일어나면 react.js는 그걸 받아서 잘 동작함! (자바스크립트가 비활성화되면 페이지는 보이지만 상호작용 안됨)
// 🪄 SEO에 정말 좋다. 구글 같은 검색엔진에게도 유저에게도 좋다 
import { useState } from "react";

export default function Home(){
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <h1>hello {counter}</h1>
            <button onClick={() => setCounter(prev => prev + 1)}></button>
        </div>
    );
}
