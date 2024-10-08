import React, { useState } from 'react'

import Avatar1 from '../images/avatar1.jpg'
import Avatar2 from '../images/avatar2.jpg'
import Avatar3 from '../images/avatar3.jpg'
import Avatar4 from '../images/avatar4.jpg'
import Avatar5 from '../images/avatar5.jpg'
import { Link } from 'react-router-dom'

const authorData = [
  {
    id: 1,
    avatar: Avatar1 ,
    name: 'Roshan Dubey' ,
    posts: 5
  } ,
  {
    id: 2,
    avatar: Avatar2 ,
    name: 'Suraj Singh' ,
    posts: 4
  } ,
  {
    id: 3,
    avatar: Avatar3 ,
    name: 'Ganesh Pratap' ,
    posts: 8
  } ,
  {
    id: 4,
    avatar: Avatar4 ,
    name: 'Yuvraj Singh' ,
    posts: 2
  } ,
  {
    id: 5,
    avatar: Avatar5 ,
    name: 'Saubhagya Singh' ,
    posts: 1
  } ,
]

const Authors = () => {
  const [authors, setAuthors] = useState(authorData)
  return (
    <section className='authors'>
      { authors.length > 0 ?
        <div className="container authors_container">
          {
            authors.map(({id , avatar , name , posts}) => {
              return <Link key={id} to={`/posts/users/${id}`} className='author'>
                <div className="author_avatar">
                  <img src={avatar} alt="" />
                </div>
                <div className="author_info">
                  <h4>{name}</h4>
                  <small>verified author</small>
                  <p>total posts - {posts}</p>
                </div>
              </Link>
            })
          }
        </div> : <h2 className='center'>No Authors Found</h2>
      }

      
    </section>
  )
}

export default Authors