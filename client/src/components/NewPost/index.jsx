import React, { useState } from 'react'
import Header from './Header'
import './index.css'
import Form from './Form'
import { createPostAPI } from '../../api/posts'
import { useNavigate } from 'react-router-dom'

export default function NewPost() {
  const [title, setTitle] = useState('')
  const [subTitle, setSubTitle] = useState('')
  const [postBody, setPostBody] = useState('')
  const [image, setImage] = useState('')
  const [loader, setLoader] = useState(false)
  const [error, setError] = useState(false)
  const navigate = useNavigate()

  const handleSave = async () => {
    if (!title) {
      setError(true)
      reurn
    }
    setLoader(true)
    const body = {title, subtitle : subTitle, body : postBody, image}
    await createPostAPI(body)
    setLoader(false)
    return navigate('/')
  }
  
  const handleChange = (e) => {
    const { name, value } = e.target
    console.log(name, value,)
    if (name === 'title') {
      setTitle(value)
      setError(false)
    } else if (name === 'subtitle') {
      setSubTitle(value)
    } else if (name === 'body') {
      setPostBody(value)
    } else if (name === 'image') {
      const file = e.target.files[0]
      console.log("G+FILE", file)
      setImage(file)
    }

  }
  return (
    <div className="new-post">
      <Header handleSave={handleSave} />
      <Form handleChange={handleChange} title={title} subTitle={subTitle} postBody={postBody} error={error} />
      {loader && <p>Loading......</p>}
    </div>
  )
}
