import './App.css';
import { Typography } from "@mui/material"
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



function App() {
  return (
    < >
      <Typography variant="h5" sx={{ textAlign: "center", fontWeight: "bold" }} className='mt-3'>Admin Panel</Typography>

      <ToastContainer autoClose={2000} />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/table' element={<Tables />} />
        <Route path='/billing' element={<Billing />} />

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