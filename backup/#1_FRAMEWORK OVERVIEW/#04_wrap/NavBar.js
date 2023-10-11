// #04_Routing
//[링크 연결 방법]
//a 링크 사용 시 오류 
//새로고침을 원하지 않는데 a 링크 사용 시 어플리케이션이 새로고침 => 클라이언트 사이드 네비게이션이 없다는 의미
//=> 브라우저가 다른 페이지로 보내기 위해 전체 페이지를 새로고침 중이다!!! (속도 이슈 발생)

//a태그를 사용 (잘못된 방법)
//export default function NavBar(){
//    return <nav>
//        <a href="/">Home</a>
//        <a href="/about">About</a>
//    </nav>
//}

//next/link 사용 (옳은 방법)
//Link : next.js 어플리케이션의 클라이언트 사이드 네비게이션을 제공해준다.
//속도가 훨씬 빨라짐!
//import Link from "next/link";
//export default function NavBar(){
//    return (
//        <nav>
//            {/* link에는 인라인 스타일 적용 안됨! */}
//            <Link href="/" className="hello">Home</Link>
//            <Link href="/about" className="about">About</Link>
//        </nav>
//    );
//}

// ⭐ anchor를 사용하지 않는다! Link를 쓴다! ⭐ 


//[Router에 Hook 걸기]
//next.js에서는 router설치, router rendering 모두 필요없음! 바로 사용 가능!
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar(){
    const router = useRouter();
    return (
        <nav>
            {/* link에는 인라인 스타일 적용 안됨! */}
            <Link style={{color: router.pathname === "/" ? "red" : "blue"}} href="/" className="hello">Home</Link>
            <Link style={{color: router.pathname === "/about" ? "red" : "blue"}} href="/about" className="about">About</Link>
        </nav>
    );
}