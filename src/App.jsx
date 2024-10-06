
import './App.css'
import {Navigate, Route,Routes} from 'react-router-dom'
import SignIn from './pages/SignIn'
import HomePage from './pages/HomePage'
import SignUp from './pages/SignUp'
import VideoPlayer from './components/VideoPlayer'
import { checkSession } from './lib/checkSession';
import { useEffect, useState } from 'react'
import { useAuth } from './Context/AuthContext'
import Spinner from './components/Spinner'

function App() {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const verifySession = async () => {
      const session = await checkSession();
      setIsLoggedIn(!!session); 
      setLoading(false); 
    };
    verifySession();
  }, [isLoggedIn,setIsLoggedIn]);

  if (loading) return <Spinner/>

  return (
    <div className='App bg-black font-custom'>
   <Routes>
        <Route path='/' element={isLoggedIn ? <Navigate to="/home" replace /> : <Navigate to="/signin" replace />}/>
        <Route path='/signin' element={isLoggedIn ? <Navigate to="/home" replace /> : <SignIn />}/>
        <Route path='/signup' element={isLoggedIn ? <Navigate to="/home" replace /> : <SignUp />}/>
        <Route path='/home' element={isLoggedIn ? <HomePage setIsLoggedIn={setIsLoggedIn} /> : <Navigate to="/signin" replace />}/>
        <Route path='/video/:id' element={isLoggedIn ? <VideoPlayer /> : <Navigate to="/signin" replace />}/>
      </Routes>
    </div>
  )
}

export default App
