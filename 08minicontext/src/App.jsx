
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Profile from './Compononets/Profile'
import Login from './Compononets/Login'

function App() {

  return (
    <UserContextProvider>
    <h1 className='p-4 bg-red-500 text-3xl '>This si mini context </h1>
    <Login />
    <Profile />
    </UserContextProvider>
 
  )
}

export default App
