const Post = (props)=>{
    const {title, data} = props

    return (
        <div className="shape">
            <div className="x-square"></div>
            <h2>{title}</h2>
            <p>{data}</p>
            <p>Published N/A days ago by</p>
        </div>
    )
}

export default Post