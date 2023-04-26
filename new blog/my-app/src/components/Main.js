const Main = function(props){

    return(
        <div>
            <h2>This is my blog</h2>
            <div className="container">
                <div className="shape">
                    <div className="x-square"></div>
                    <h2>Blog post #1</h2>
                    <p>My first blog post is all about my blog post and how to write a new post in my blog, you can find it <a href="#">here</a></p>
                    <p>Published 1 days ago by Israel</p>
                </div>
            <div className="shape">
                <div className="x-square"></div>
                <h2>Blog post #2</h2>
                <p>My second blog post is all about my blog post</p>
                <p>Published 2 days ago by Joe</p>
            </div>
            </div>
            <div className="shape">
                <div className="x-square"></div>
                <h2>Blog post #3</h2>
                <p>My third blog post is all about my blog post</p>
                <p>Published 1 days ago by Israel</p>
            </div>
        </div>
    )
}

export default Main