import React from "react";

const Post = ({id, posts, history}) => {
    const getPostById = (id) => {
        return posts.find((post) => post.id.toString() === id)
    }
    const handleSave = () => {
        // history.push('/posts')// if we use backward arrow button on the page we will be back to the previous if we don't we should use .replace()

        history.replace('/posts')
    }

    const post = getPostById(id)
    return <>
        <h2>{post ? post.label : `Post with id:${id} not found`}</h2>
        <button onClick={() => {
            handleSave()
        }}>Save
        </button>
    </>
}


export default Post