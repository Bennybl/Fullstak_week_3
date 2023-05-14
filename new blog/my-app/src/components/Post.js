import { useNavigate } from "react-router-dom"
const Post = (props)=>{
    const {title, data, id} = props
    const navigate = useNavigate()

    return (
        <div className="shape" onClick={() => navigate('/post/' + id)} key={id}>
            <div className="x-square"></div>
            <h2>{title}</h2>
            <p>{data}</p>
            <p>Published N/A days ago by</p>
        </div>
    )
}

export default Post