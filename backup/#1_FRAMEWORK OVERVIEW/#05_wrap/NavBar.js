// #05_CSS Modules
import Link from "next/link";
import { useRouter } from "next/router";
//module.css란?
//우리가 평범한 css를 사용할 수 있도록 해줌!
//사용방법
//: 클래스이름을 텍스트로 적지 않고 자바스크립트 오브젝트에서의 프로퍼티 형식으로 기재
//-> 무작위의 클래스 네임이 들어감 -> 충돌이 안남!


//css 모듈 파일 임포트
import styles from "./NavBar.module.css";

export default function NavBar(){
    const router = useRouter();
    return (
        <div>
            <nav className={styles.nav}>
                <Link style={{color: router.pathname === "/" ? "red" : "blue"}} href="/" className="hello">Home</Link>
                <Link style={{color: router.pathname === "/about" ? "red" : "blue"}} href="/about" className="about">About</Link>
            </nav>
            {/* pathname에 따라 클래스 넣기 */}
            <nav>
                <Link className={router.pathname === "/" ? styles.active : ""} href="/">Home</Link>
                <Link className={router.pathname === "/about" ? styles.active : ""} href="/about">About</Link>
            </nav>
            {/* pathname에 따라 클래스 넣기 & 조건부 삽입 */}
            <nav>
                <Link className={`${styles.link} ${
                    router.pathname === "/" ? styles.hello : ""
                    }`} href="/">Home</Link>
                {/* 한 클래스 이름과 다른 클래스 이름의 배열을 만들고 공백을 간격으로 한 문자열로서 합쳐버리기 */}
                <Link
                    className={[styles.link,
                    router.pathname === "/about" ? styles.hello : "",].join(" ")} href="/about">About</Link>
            </nav>
        </div>
    );
}

//하지만! 모듈.css를 쓰지 않는 이유
//1. 파일을 2개로 관리해야함
//2. 클래스이름을 기억해야함
