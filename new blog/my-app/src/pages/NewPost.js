import axios from 'axios';

const NewPost = () => {

    const handleSubmit =  async () => {
        const title = document.querySelector("#title")
        const content = document.querySelector("#content")
        if (title === "" || content === "" ){
            alert("Must insert title and content to submit!")
            return
        }
        await axios.post("http://localhost:5000/post", {title: title, body: content } )
    }
    return (
        <>
            <form>
                <label>
                    Title:
                    <input type="text" name="title" id="title"/>
                </label>
                <label>
                    Content:
                    <input type="textarea" name="content" rows={10}  cols={10} id="content"/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}

export default NewPost