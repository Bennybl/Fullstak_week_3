

const NewPost = () => {

    return (
        <>
            <form>
                <label>
                    Title:
                    <input type="text" name="title"/>
                </label>
                <label>
                    Content:
                    <input type="textarea" name="content" rows={10}  cols={10}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}


export default NewPost