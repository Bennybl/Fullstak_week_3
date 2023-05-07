import { useParams } from "react-router-dom"
import Post from "../components/Post"

const SinglePost = (props) => {
    const { posts} = props
    const {id} = useParams()
    const {title, data} = posts.find(post => post.id.toString() === id) || {}
    return (
        <div class="single_post">
            <Post title={title} data={data}></Post>
        </div>
    )
}

export default SinglePost