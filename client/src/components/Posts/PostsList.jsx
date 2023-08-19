import { Avatar, Divider } from '@mui/material'
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import PersonIcon from '@mui/icons-material/Person';
import moment from 'moment'
import React from 'react'
const imageBaseUrl = import.meta.env.VITE_SERVER_BASE_URL + '/uploads/'

export default function PostsList({ posts, loader }) {
  
  return (
    <div style={{ display: 'grid', width: '80%', gap: '20px', margin: 'auto', marginTop: '5%' }}>
      {loader ? <div>Loading .... </div> :
      posts?.length > 0 && posts.map(post =>
        <div className="post-list-item" key={post._id}>
          <div id='post-row'>
            <div style={{ display: 'grid', gap: '10px' }}>
              <div style={{ display: 'flex', gap: '20px', alignItem: 'center' }}>
                <Avatar sx={{background:'#FFFFFF', boxShadow:'1px 0 5px 5px #B0736F2B'}}>
                  <PersonIcon sx={{color:"gray"}} />
                </Avatar>
                <div>
                  <div>{post.created_by}</div>
                  <div style={{color:'gray'}}>{moment(post?.created_at).format("HH:mm a, DD MMM YYYY ")}</div>
                </div>
              </div>
              <h2>{post?.title}</h2>
              <div style={{ fontSize: '16px' }}>{post?.body?.split(/\s+/).slice(0, 50).join(" ")} ...</div>
              <div>
                <ImportContactsIcon />
                <p>10</p>
              </div>
            </div>
            <div >
              {post?.image && <img width='240' height='150' src={imageBaseUrl + post.image} alt='thumbnail' />}
            </div>
          </div>
          <Divider />
        </ div>
        ) }
    </div>
  )
}
