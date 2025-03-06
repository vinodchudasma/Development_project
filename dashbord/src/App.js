import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useState } from "react";
import Login from "./Login";
import Header from "./Header";
import Dashbord from './Dashbord';
import Viewuser from "./Viewuser";
import Addstudent from "./Addstudent";
import Addcourse from "./Addcourse";
import Addcontent from "./Addcontent";
import Viewcontent from "./Viewcontent";
import Viewstudent from "./Viewstudent";
import Viewcourse from "./Viewcourse";
import Adduser from "./Adduser";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Navigate to="/header/dashbord" /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/header" element={isLoggedIn ? <Header /> : <Navigate to="/" />}>
          <Route path="dashbord" element={<Dashbord />} />
          <Route path="adduser" element={<Adduser />} />
          <Route path="viewuser" element={<Viewuser />} />
          <Route path="addstudent" element={<Addstudent />} />
          <Route path="viewstudent" element={<Viewstudent />} />
          <Route path="addcourse" element={<Addcourse />} />
          <Route path="viewcourse" element={<Viewcourse />} />
          <Route path="addcontent" element={<Addcontent />} />
          <Route path="viewcontent" element={<Viewcontent />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} /> {/* Redirect to login for any unknown routes */}
      </Routes>
    </Router>
  );
}

export default App;