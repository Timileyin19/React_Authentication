import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/auth";
import Navbar from "./components/Navbar";
import { Home, Login, Profile } from "./pages";
import ProtectRoute from "./util/ProtectRoute";

const App = () => {
  return (
    <BrowserRouter>
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={
          <ProtectRoute>
            <Profile />
          </ProtectRoute>
          } 
          />
        <Route path="*" element={<h1>Page Not Found!</h1>} />
      </Routes>
    </AuthProvider>
    </BrowserRouter>    
  )
}


export default App;
