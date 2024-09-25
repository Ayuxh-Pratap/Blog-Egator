import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const CreatePost = () => {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('uncategorized')
  const [description, setDiscription] = useState('')
  const [thumbnail, setThumbnail] = useState('')

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
      ['link', 'image'],
      ['clean']
    ],
  }

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]

  const POST_CATEGORIES = ["Agriculture", "Business", "Education", "Art", "Investment", "Uncategorized", "Weather"]

  return (
    <section className="create-post">
      <div className="container">
        <h2>Create Post</h2>
        <p className='form_error-message'>
          ohh no , Something unusual happened !!
        </p>
        <form className="form create-post_form">
          <input type='text' placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} autoFocus />
          <select name="category" value={category} onChange={e => setCategory(e.target.value)} >
            {
              POST_CATEGORIES.map(cat => <option key={cat}>{cat}</option>)
            }
          </select>
          <ReactQuill modules={modules} formats={formats} value={description} onChange={setDiscription} />
          <input type="file" onChange={e => setThumbnail(e.target.files[0])} accept='png, jpg, jpeg' />
          <button type='submit' className='btn primary'>Publish Post</button>
        </form>
      </div>
    </section>
  )
}

export default CreatePost