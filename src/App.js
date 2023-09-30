import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Import Fullpage which is where all the Main content is. If the user is not logged in,
// they will be redirected to the login page.
import FullPage from "./Components/FullPage/FullPage";
import Login from './Components/Forms/Login/Login'
import SignUp from "./Components/Forms/Signup/SignUp";
import TravelPage from "./Components/TravelPage/TravelPage";
import Rules from "./Components/Rules/Rules";

// Admin page
import AdminVerfi from "./Components/AdminPage/AdminVerfi/AdminVerfi";

// Profile Page
import ProfilePage from "./Components/ProfilePage/ProfilePage";
import EditPass from "./Components/Forms/EditPass/EditPass";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Profile */}
        <Route path="/profile" element={ <  ProfilePage/> } />
        <Route path="/editpass" element={ <  EditPass/> } />

        {/* Admin */}
        <Route path="/admin" element={ <  AdminVerfi/> } />
        
        {/* Pages */}
        <Route path="/home" element={ <  FullPage/> } />
        <Route path="/login" element={ <  Login/> } />
        <Route path="/signup" element={ <  SignUp/> } />
        <Route path="/travelpage" element={ <  TravelPage/> } />
        <Route path="/rules" element={ <  Rules/> } />

        {/* Navigate To home */}
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
