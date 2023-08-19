import React, { useEffect, useState } from 'react'
import Header from './Header'
import PostsList from './PostsList'
import { getPostsAPI } from '../../api/posts'
import './index.css'

export default function Posts() {
  const [searchText, setSearchText] = useState('')
  const [posts, setPosts] = useState([])
  const [loader, setLoader] = useState(true)
  const handlePostSearch = (e) => {
    setSearchText(e.target.value)
  }

  const getPosts = async (e) => {
    setLoader(true)
    const { posts, count } = await getPostsAPI(searchText)
    setPosts(posts)
    setLoader(false)
  }
  useEffect(() => {
    const getData = setTimeout(() => {
      getPosts()
    }, 300)
    return () => clearTimeout(getData)
  },[searchText])

  return (
    <div>
      <Header searchText={searchText} handlePostSearch={handlePostSearch} />
      <PostsList loader={loader} posts={posts} />
    </div>
  )
}
