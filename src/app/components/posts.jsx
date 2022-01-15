import PostsList from "./postsList";
import Post from "./post";
import {useParams} from "react-router-dom";

// const Posts = ({match, location}) => {
const Posts = ({}) => {
    const params=useParams()
    const posts = [
        {id: 1, label: 'post1'},
        {id: 2, label: 'post2'},
        {id: 3, label: 'post3'}
    ]

    // const search = query.parse(location.search)
    // const postId = match.params.postId
    const {postId} = params
    // const display = match.params.display

    // const cropPosts = search ? _(posts).slice(0).take(search.count).value() : posts
    return <>
        {postId ? (
            <>
                {/*{display && <h2>{display}</h2>}*/}
                <Post posts={posts} id={postId}/>
            </>
        ) : (
            // <PostsList posts={cropPosts}/>
            <PostsList posts={posts}/>
        )}
    </>
}

export default Posts