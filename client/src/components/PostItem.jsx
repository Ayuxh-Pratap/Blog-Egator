import React from 'react'
import { Link } from 'react-router-dom'
import PostAuthor from './PostAuthor'

const PostItem = ({postID , category , thumbnail , title , desc , authorID}) => {

  const shortDescription = desc.length > 145 ? desc.substr(0 , 145) + '...' : desc;
  const postTitle = title.length > 45 ? title.substr(0 , 30) + '...' : title;

  return (
    <article className="post">
      <div className="post_thumbnail">
        <img src={thumbnail} alt="" />
      </div>
      <div className="post_content">
        <Link to={`/posts/${postID}`}>
          <h3>{postTitle}</h3>
        </Link>
        <p>{shortDescription}</p>
        <div className="post_footer">
          <PostAuthor />
          <Link to={`/posts/categories/${category}`} className='btn category'>{category}</Link>
        </div>
      </div>
    </article>
  )
}

export default PostItem