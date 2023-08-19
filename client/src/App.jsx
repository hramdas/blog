import './App.css'
import { Stack } from '@mui/material'
import Posts from './components/Posts'
import NewPost from './components/NewPost'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Stack spacing={2}>
      <Routes>
        <Route path='/' element={ <Posts />} />
        <Route path='/write' element={ <NewPost />} />
      </Routes>
    </Stack>
  )
}

export default App
