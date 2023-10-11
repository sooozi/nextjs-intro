// #2.00_Patterns
// 많은 사람들이 next.js를 이용할 때 따르는 아주 흔한 패턴을 배워보자!
//그것은 바로! layout 패턴 => custom app component를 사용할 때 씀
//사용 방법
//1. components 폴더에 Layout.js 생성


import Layout from "@/components/Layout";
import "../styles/globals.css";

export default function App({ Component, pageProps}) {
    return (
        <Layout>
            {/* layout children이란 여기에 있는 컴포넌트를 말함 */}
            <Component {...pageProps} />
        </Layout>
    );
}

//이곳에서는 이미 하는 일이 많기 때문에, 아주 큰 react.js 컴포넌트를 사용하기 보다는
//layout 컴포넌트에 만들어주어 일을 나눈다!