// #2.05_Dynamic Routes
//이 파일의 컴포넌트는 우리가 "/movies"로 접속하면 실행!
//"/movies/all" => movies폴더 안 all / "/movies" => movies폴더 안 index
//폴더를 만들어주면 /@@@/@@@으로 갈 수 있도록 만들 수 있음!
//💁‍♀️ (폴더만 만들면 바로 연결되니까 간편쓰!)


export default function All() {
    return "movies index";
}