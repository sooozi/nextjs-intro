// #06_Styles JSX : 어플리케이션에 styles를 추가하는 또 다른 방식, Next.js 고유 방식

import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar(){
    const router = useRouter();
    return (
        <nav>
            <Link href="/" className={router.pathname === "/" ? "active" : ""}>Home</Link>
            <Link href="/about" className={router.pathname === "/about" ? "active" : ""}>About</Link>
            {/* styles jsx는 현재 페이지에서만 적용된다 */}
            <style jsx global>{` 
                nav {
                    background-color: tomato;
                }
                a {
                    text-decoration: none;
                }
                .active {
                    color: yellow;
                }
            `}</style>
        </nav>
    );
}
