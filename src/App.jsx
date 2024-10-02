
import './App.css'
import {Navigate, Route,Routes} from 'react-router-dom'
import SignIn from './pages/SignIn'
import HomePage from './pages/HomePage'
import SignUp from './pages/SignUp'
import VideoPlayer from './components/VideoPlayer'

function App() {

  return (
    <div className='App bg-black'>
      <Routes>
      <Route path='/' element={<Navigate to="/signin" />} />
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/video/:id' element={<VideoPlayer/>}/>
      </Routes>
    </div>
  )
}

export default App
