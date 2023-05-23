import { Outlet, Link, useSearchParams } from "react-router-dom";
import {useEffect} from "react";


function Home () {

    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        setSearchParams({params: 'paramètre'})
        console.log(searchParams.get("params"))
    }, [])

    return (
        <>
            <h1>Home</h1>
            <nav>
                <Link to={'hello'} >Hello</Link>
                <Link to={'bye'} >Bye</Link>
            </nav>
            {/* il est possible de faire passer des information au components charger par Outlet
             au travers du props context
             De l'autre côté 'components enfant' il sera possible de le récupèrer au traver du hook
             useOutletContext
             */}
            <Outlet context={{msg: 'coucou'}} />
        </>
    )
}

export default Home;