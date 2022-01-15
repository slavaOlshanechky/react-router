import PostsList from "./postsList";
import Post from "./post";
import query from 'query-string'
import _ from "lodash";

const Posts = ({match, location}) => {
    const posts = [
        {id: 1, label: 'post1'},
        {id: 2, label: 'post2'},
        {id: 3, label: 'post3'}
    ]

    const search = query.parse(location.search)
    const postId = match.params.postId
    // const display = match.params.display

    const cropPosts = search ? _(posts).slice(0).take(search.count).value() : posts
    return <>
        {postId ? (
            <>
                {/*{display && <h2>{display}</h2>}*/}
                <Post posts={posts} id={postId}/>
            </>
        ) : (
            <PostsList posts={cropPosts}/>
        )}
    </>
}

export default Posts