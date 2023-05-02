import Post from "./Post.js"

const Main = function(props){
    const {posts} = props
    return(
        <div>
            <h2>This is my blog</h2>
            <div className="container">
                {
                    posts.map(post=> Post(post))
                }
            </div>
        </div>
    )
}

export default Main