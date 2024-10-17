import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/Dashboard';
import Tables from './pages/Tables';
import Billing from './pages/Billing';
import Profile from "./accounts/Profile"
import SignIn from "./accounts/SignIn"
import SignUp from "./accounts/SignUp"
import Overview from './profileItems/Overview';
import Team from './profileItems/Team';
import Projects from './profileItems/Projects';
import Error404 from './pages/Error404';



function App() {
  return (
    < >

      <ToastContainer autoClose={2000} />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/table' element={<Tables />} />
        <Route path='/billing' element={<Billing />} />
        <Route path='/error' element={<Error404 />} />

        {/* accounts */}
        <Route path='/profile' element={<Profile />}>
          <Route index  element={<Overview />} />  {/* Default nested route for /profile */}
          <Route path='team' element={<Team />} />
          <Route path='projects' element={<Projects />} />
        </Route>

        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />



        <Route path='*' element={"Page not found"} />
      </Routes>
    </>
  );
}

export default App;