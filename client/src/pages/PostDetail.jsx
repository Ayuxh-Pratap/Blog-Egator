import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'
import Thumbnail from '../images/blog58.jpg'

const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className="container post-detail_container">
        <div className="post-detail_header">
          <PostAuthor />
          <div className="post-detail_buttons">
            <Link to={`/posts/werwer/edit`} className='btn sm primary'>Edit</Link>
            <Link to={`/posts/werwer/delete`} className='btn sm danger'>Delete</Link>
          </div>
        </div>
        <h1>This is Post Title</h1>
        <div className="post-detail_thumbnail">
          <img src={Thumbnail} alt="" />
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, dicta aut.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi laudantium ab velit. Minus veritatis architecto ut cupiditate modi, accusamus beatae esse earum voluptatem nobis dolores quas nesciunt porro quis cum magni voluptatum adipisci deserunt! Earum porro sed voluptate voluptas fuga reprehenderit rem ipsa tempora!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, harum natus. Earum rem nulla enim sapiente ipsa soluta nisi quaerat, sint vel iure, magnam quo harum doloremque doloribus, accusamus quod est alias maiores quisquam autem. Vero, facere assumenda mollitia consectetur eius, natus necessitatibus omnis iure, sit accusantium error facilis. Autem eaque modi sunt aperiam, facere rerum accusamus ut libero inventore, doloribus vel voluptatem officiis eius.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolores cumque quibusdam esse rerum, sapiente assumenda soluta, dicta id nihil voluptatem, alias aspernatur eos. Debitis aspernatur harum, autem hic voluptates, repudiandae deleniti tempora sunt magnam vitae esse quasi amet sed quas minima labore facilis unde laboriosam cupiditate? Veniam nam soluta sapiente incidunt dolores esse ut, facilis voluptas ullam. Molestiae esse repudiandae eligendi nihil quos delectus ducimus repellendus id amet, temporibus nemo voluptatum, aliquid inventore praesentium harum? Itaque sit odio nesciunt dolore at, facere laboriosam omnis? Rem, deserunt? Reiciendis commodi dolor veniam, corporis accusantium quam possimus, et tenetur obcaecati asperiores doloribus animi soluta sapiente beatae fuga natus ipsam voluptatibus nihil velit quibusdam.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod quos numquam rerum enim nostrum? Cupiditate tenetur consequuntur animi voluptatum deserunt eum, illo quae aliquam optio, eaque harum recusandae perspiciatis odit!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid asperiores repellendus nobis nihil suscipit quo impedit reiciendis fugit tenetur, odit, accusamus debitis aliquam aspernatur quod iure temporibus omnis deserunt ducimus ab, adipisci atque beatae? Quisquam minus sit perspiciatis? Quidem officia in accusamus quas odit ratione, pariatur similique corrupti officiis culpa commodi recusandae illo molestiae quis sunt, sapiente, eligendi totam ducimus dolores eius omnis tempore! Aliquid deleniti nemo corporis numquam libero eius accusantium suscipit, quo a assumenda fugiat ipsum itaque sunt non illum alias aliquam beatae quos cupiditate mollitia sit esse, iste quia magnam! Alias corporis iure porro sunt ab necessitatibus, quos cumque facere! Eum laboriosam quae ut repellendus sit odio iusto temporibus, consequatur, nulla nisi a commodi dolor iure doloribus sunt voluptatem autem repudiandae suscipit soluta voluptatum dolorum, nemo deleniti nihil? Nobis ratione officia sapiente dolor labore, obcaecati quisquam commodi id itaque iste. Magnam optio repudiandae accusamus, amet, repellendus blanditiis dolores, esse laudantium aspernatur hic maiores nisi nesciunt fugit eum. Voluptate itaque nihil, laborum rerum impedit dolor vel quibusdam ullam, doloribus tempora illum vero. Aut ad eligendi quis ut qui enim, unde facilis nostrum, similique odio molestias incidunt reprehenderit eius reiciendis debitis aliquid deserunt consectetur! Quaerat inventore asperiores nihil? Blanditiis.
        </p>
      </div>
    </section>
  )
}

export default PostDetail