// #2.00_Patterns
import NavBar from "../components/NavBar";
//Seo.js 생성 후 헤드 임포트
import Seo from "../components/Seo"

export default function About(){
    return (
        <div>
            {/* Seo.js 생성 후 코드 */}
            <Seo title="About" />
            <h1>about page</h1>
        </div>
    );
}