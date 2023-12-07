// import "./App.css";
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Header from "./Component/Header";
// import Footer from "./Component/Footer";
// import AboutUs from "./Pages/AboutUs";
// import Home from "./Pages/Home";
// import Login from "./Pages/Login";
// import Registration from "./Pages/Registration";
// import ContactUs from "./Pages/ContactUs";
// import Categores from "./Pages/Categores";
// import Detelis from "./Pages/Detelis1";
// import BookNow from "./Pages/BookNow";
// import Detelis1 from "./Pages/Detelis1";
// import Profile from "./Pages/Profile";
// import Admin from "./Admim/Admin";
// import Adminlogin from "./Admim/Adminlogin";





// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Header />

//         <Routes> 
//         <Route path="/" element={<Home/>} />

//           <Route path="/AboutUs" element={<AboutUs />} />
//           <Route path="/Login" element={<Login />} />
//           <Route path="/Registration" element={<Registration/>} />
//           <Route path="/ContactUs" element={<ContactUs/>} />
//           <Route path="/Categores" element={<Categores/>} />
//           <Route path="/Detelis/:id" element={<Detelis/>} />

//           <Route path="/BookNow" element={<BookNow/>} />
//           <Route path="/Detelis1" element={<Detelis1/>} />
//           <Route path="/Profile" element={<Profile/>} />
//           <Route path="/Adminlogin" element={<Adminlogin/>} />
//           <Route path="/Admin" element={<Admin/>} />


//         </Routes>

//         <Footer />
//       </Router>
//       <Router>

//       <Routes> 

//       <Route path="/Admin" element={<Admin/>} />
//       </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;



import "./App.css";
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import AboutUs from "./Pages/AboutUs";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import ContactUs from "./Pages/ContactUs";
import Categores from "./Pages/Categores";
import Detelis from "./Pages/Detelis1";
import BookNow from "./Pages/BookNow";
import Detelis1 from "./Pages/Detelis1";
import Profile from "./Pages/Profile";
import Admin from "./Admim/Admin";
import Adminlogin from "./Admim/Adminlogin";
import Cookies from "js-cookie";





function App() {

  const [role, setRole] = useState(0);

  // useEffect(() => {
  //   const existingToken = Cookies.get("accessToken");

  //   if (existingToken) {
  //     setRole(2);

  //   }

  // }, []);


  // console.log(role);




  return (
    <div className="App">


      <Router>

        {role !== 2 && <Header />}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/Adminlogin" element={<Adminlogin />} />
          <Route path="/ContactUs" element={<ContactUs />} />


          <Route path="/Categores" element={<Categores />} />
          <Route path="/Detelis/:id" element={<Detelis />} />


          <Route path="/BookNow" element={<BookNow />} />
          <Route path="/Detelis1" element={<Detelis1 />} />
          <Route path="/Profile" element={<Profile />} />




          {/* <Route path="/Admin" element={(role == 2) ? (<Admin />) : (<Navigate to="/Login" replace />)} /> */}
          <Route path="/Admin" element={<Admin />} />




        </Routes>

        {role !== 2 && <Footer />}
      </Router>





      {/* <Router>

      <Routes> 

      <Route path="/Admin" element={<Admin/>} />
      </Routes>
      </Router> */}
    </div>
  );
}

export default App;