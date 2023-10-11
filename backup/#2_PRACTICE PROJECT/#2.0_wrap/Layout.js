// #2.00_Patterns
import NavBar from "../components/NavBar";

//children이란, react.js가 제공하는 prop이며 하나의 컴포넌트를 또 다른 컴포넌트 안에 넣을 때 사용한다.
//아래 코드에서는 layout 컴포넌트는 children이라는 prop을 가지고 있다.
export default function Layout({ children }) {
    return (
        <>
            <NavBar />
            <div>{children}</div>
        </>
    )
};

//이제 헤드를 만들어보자!