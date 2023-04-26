const Left = function(props){

    return (
        <div className='leftSide'>
            <table>
                <tr>
                    <td><h1>Latest posts</h1></td>
                </tr>
                <tr>
                    <td id="lat">
                    <div><span>Blog Post #1</span> <a href='#'>go to page</a></div>
                    <div><span>Blog Post #2</span> <a href='#'>go to page</a></div>
                    <div><span>Blog Post #3</span> <a href='#'>go to page</a></div>
                    </td>
                </tr>
                <tr>
                    <td><h1>Popular posts</h1></td>
                </tr>
                <tr>
                    <td id="pop">
                    <div><span>Blog Post #3</span> <a href='#'>go to page</a></div>
                    <div><span>Blog Post #1</span> <a href='#'>go to page</a></div>
                    <div><span>Blog Post #2</span> <a href='#'>go to page</a></div>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default Left