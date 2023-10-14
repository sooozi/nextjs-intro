// #2.07_Catch All
import { useRouter } from "next/router";
import Seo from "../../components/Seo";

export default function Detail({params}) {
    const router = useRouter();
    //우리는 router.query.params가 두 개의 element를 가지고는 배열이라는걸 아니까 아래처럼 작성해줌!
    //하지만 server에서는 router.query.params가 아직 존재하지 않아 시크릿모드에서는 에러발생!
    // || [] 추가하면 에러가 사라짐!

    // || []란?
    //직접 client-side rendering을 해줌

    const [title, id] = params || [];
    return (
        <div>
            {/* seo를 추가해 head title도 바꿔줌 */}
            <Seo title={title}/>
            <h4>{title}</h4>
        </div>
    );
}

//만약 유저에게 절대로 로딩 단계를 보여주고 싶지 않고 SEO에 최적화하고 싶다면 아래 방법 사용!
//단순히 영화제목, id를 얻기 위해 사용도 가능!
export function getServerSideProps({params: {params}}) {
    return {
        props: {
            params,
        },
    };
}

//이전에는 컴포넌트 내부에서 router를 사용
//컴포넌트 내부에서 router를 사용하면 router는 프론트에서만 실행이 된다.
//이번 강의에서는 getServerSideProps 함수로 url 정보를 가져오는 것만 사용해봤음
//api에서 데이터를 fetch하지는 않음!!
//하지만 index.js에서는 getServerSideProps에서 api fetch를 했었음
//여기서는 제목만 가져와도 충분하니까 굳이 api fetch가 필요없음! 그래서 위 방법으로 진행!


