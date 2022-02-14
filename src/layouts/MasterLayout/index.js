import Header from "./components/Header";

export default function Example({children}) {
    return (
        <>
            <Header/>
            {children}
        </>
    )
}
