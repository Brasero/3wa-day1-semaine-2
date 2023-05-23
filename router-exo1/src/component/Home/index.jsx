import {posts} from "../../utils/data.jsx";
import {Link} from "react-router-dom";

function Home () {

    const style = {padding: '5px'}

    return (
        <>
            {
                posts.map((post, i) => {
                    return <Link key={i} to={`/detail/${post.id}`} state={post} style={style} >{post.title}</Link>
                })
            }
        </>
    )
}

export default Home