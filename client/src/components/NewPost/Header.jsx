import { Button, IconButton } from '@mui/material'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import EditNoteIcon from '@mui/icons-material/EditNote';
import React from 'react'
import { Link } from 'react-router-dom';

export default function Header({handleSave}) {
  return (
    <div className="write-post-header">
      <Link style={{all: 'unset'}} to='/'>
        <IconButton aria-label="back">
          <KeyboardBackspaceIcon />
        </IconButton>
      </Link>
      <div id='title'>
        <EditNoteIcon sx={{fontWeight:700, fontSize:'23px'}} /> Draft by you!
      </div>
      <div>
        <Button onClick={handleSave} sx={{width:'100px', borderRadius:'50px'}} variant='contained'> Save</Button>
      </div>
    </div>
  )
}
