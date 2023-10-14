// #2.06_Movie Detail 
import { useRouter } from "next/router"

export default function Detail() {
    const router = useRouter();
    return (
        <div>
            {/* 유저가 홈페이지를 통해 상세페이지로 들어오지않으면 loading이 보임!!! */}
            <h4>{router.query.title || "Loading..."}</h4>
        </div>
    );
}
