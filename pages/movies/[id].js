// #2.05_Dynamic Routes
//url에 변수를 넣는 방법 : 대괄호를 사용하여 페이지를 만든다!
//[변수명].js
import { useRouter } from "next/router"

export default function Detail() {
    const router = useRouter();
    console.log(router);
    return "detail";
}
