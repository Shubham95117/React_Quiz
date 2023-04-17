import "./App.css";
import { Routes,Route ,useLocation} from 'react-router-dom'
// import {Container} from 'react-bootstrap'
import LogIn from "./Components/LogIn";
import SignUp from "./Components/SignUp";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Home from "./Components/Home";
import ProtectedRoute from "./Components/ProtectedRoute";
import Logo from "./Components/Logo";
function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/';
  const isSignupPage = location.pathname === '/signUp';
  return (
        <div className="app">
           {isLoginPage || isSignupPage ? <Logo /> : null}
          <UserAuthContextProvider>
            {/* <Navs/> */}
        <Routes>
          <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home/>
            </ProtectedRoute>
          }
          />
          <Route path='/' element={<LogIn/>}/>
          <Route path='/signUp' element={<SignUp/>}/>
        </Routes>
        </UserAuthContextProvider>
        </div>
  )
}

export default App;
