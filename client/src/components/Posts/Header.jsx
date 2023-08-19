import { Button, FormControl, InputAdornment, OutlinedInput } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import EditNoteIcon from '@mui/icons-material/EditNote';
import React from 'react'
import { Link } from 'react-router-dom';

const headerStyle={display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin:'10px 5%'}

export default function Header({handlePostSearch, searchText}) {
  return (
    <div style={headerStyle} >
      <h2>Blogs</h2>
      <div>
      <FormControl sx={{ m: 1, width: '50ch' }} variant="outlined">
          <OutlinedInput
            sx={{borderRadius:'20px'}}
            onChange={handlePostSearch}
            startAdornment={<InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
            value={searchText}
          />
        </FormControl>
      </div>
      <div style={{ display: 'flex', gap: '50px', alignItems: 'center' }}>
        <Link style={{all: 'unset'}} to='/write'>
          <Button style={{ color: 'black', display: 'flex', gap: '10px' }}>
            <EditNoteIcon />
            Write
          </Button>
        </Link>
        
        <Button variant="contained" sx={{ background: '#dcdcdc7a', color: 'black' }}>
          <PersonIcon />
        </Button>
      </div>
    </div>
  )
}
