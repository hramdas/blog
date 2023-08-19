import { SpeedDial, SpeedDialAction, SpeedDialIcon, TextField, TextareaAutosize } from '@mui/material'
import ImageIcon from '@mui/icons-material/Image';
import React, { useState } from 'react'
import { styled } from '@mui/system';

const actions = [
  { icon: 'A', name: 'Print' },
  { icon: 'T', name: 'Share' },
];

export default function Form({handleChange, title,  subTitle, postBody, error}){
  const StyledTextarea = styled(TextareaAutosize)(
    ({ theme }) => `
    width: 98%;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    padding: 12px;
    border-radius: 12px 12px 0 12px;
    color: ${theme.palette.mode === 'dark' ? 'grey[300]' : 'grey[900]'};
    background: ${theme.palette.mode === 'dark' ? 'grey[900]' : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? 'grey[700]' : 'grey[200]'};
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? 'grey[900]' : 'grey[50]'};
    &:hover {
      border-color: ${'blue[400]'};
    }
    &:focus {
      border-color: ${'blue[400]'};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? 'blue[500]' : 'blue[200]'};
    }
    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
  );

  const [isSubTitle, setIsSubTitle] = useState(false)
  const [isBody, setIsBody] = useState(false)
  const [isImage, setIsImage] = useState(false)
  const [open, setOpen] = useState(false)
  const handleSpeedDial = () => {
    setOpen(true)
  }
  const handleButtons = (name) => {
    if (name === 'subtitle') {
      setIsSubTitle(true)
    } else if (name === 'image') {
      setIsImage(true)
    } else if (name === 'body') {
      setIsBody(true)
    } 
  }

  return (
    <div className="write-post-form">
      <TextField onChange={handleChange} name='title' type='textfield' id="outlined-basic" label="Title" variant="outlined" value={title} />
      {error && <p>Title is required</p>}
      {isBody && <StyledTextarea onChange={handleChange} name='body' minRows={5} id="outlined-basic" placeholder="Text" value={postBody} />}
      {isSubTitle && <TextField onChange={handleChange} name='subtitle' id="outlined-basic" label="Subtitle" variant="outlined" value={subTitle} />}
      {isImage && <input onChange={handleChange} name='image' style={{ fontSize: '16px' }} type='file' />}
      
      <div>
        <SpeedDial
          direction='right'
          ariaLabel="SpeedDial controlled open example"
          icon={<SpeedDialIcon />}
          onClick={handleSpeedDial}
          open={open}
        >          
          {!isBody && <SpeedDialAction
            icon='T'
            tooltipTitle='Text'
            onClick={() => handleButtons('body')}
          />}
          {!isSubTitle && <SpeedDialAction
            icon='S'
            tooltipTitle='Subtitle'
            onClick={() => handleButtons('subtitle')}
          />}
          {!isImage && <SpeedDialAction
            icon={<ImageIcon />}
            tooltipTitle='Image'
            onClick={() => handleButtons('image')}
          />}
        </SpeedDial>
      </div>
    </div>
  )
}
