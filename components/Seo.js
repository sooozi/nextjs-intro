// #2.00_Patterns
//모든 페이지에 헤드 넣기!
import Head from "next/head"

export default function Seo({title}) {
    return(
        <Head>
            <title>{title} | Next Movies</title>
        </Head>
    );
}