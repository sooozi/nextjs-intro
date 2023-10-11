// #2.02_Redirect and Rewrite
import NavBar from "../components/NavBar";

export default function Layout({ children }) {
    return (
        <>
            <NavBar />
            <div>{children}</div>
        </>
    )
};
