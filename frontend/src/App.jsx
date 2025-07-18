import { BrowserRouter, Routes, Route } from "react-router-dom";
import Studios from "./components/display_services/Addphotographer"
import Home from "./components/home"
import GetStudios from "./components/display_services/getPhotographer";
import UploadImages from "./components/display_services/UploadImages";
import GetPhotographerDetail from "./components/display_services/GetPhotographerDetail";
import SubEvent from "./components/display_services/sub_event";
import Contact from "./components/contact";
import FetchSubEvent from "./components/display_services/fetch_sub_event";
import Package from "./components/package/add-package";
import GetPackage from "./components/package/get_package";
import Login from "./components/Login";
import UserForm from "./components/package/Userform";
import AdminDashboard from "./components/package/admin_home";
import { Navigate } from "react-router-dom";
import { useState } from "react";
const App = () => {

  const [service, setService] = useState("");
  const [packageType, setPackageType] = useState("");
  const [admin, setAdmin] = useState(localStorage.getItem("isAdmin") === "true");


  return (

    <BrowserRouter>
      <Routes>
       <Route path="/" element={<Home setService={setService} setPackageType={setPackageType} admin={admin} setAdmin={setAdmin} />} />

        <Route path="/addStudios" element={<Studios service={service} />} />
        <Route path="/getStudios" element={<GetStudios service={service} admin={admin} />} />
        <Route path="/uploadImages/:studioId" element={<UploadImages service={service} />} />
        <Route path="/getPhotographerImages/:studioId" element={<GetPhotographerDetail service={service} admin={admin} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/subevents/:studioId" element={<SubEvent service={service} />} />
        <Route path="/studios/:studioId/subevents" element={<FetchSubEvent />} />
        <Route path="/add_package" element={<Package service={service} packageType={packageType} />} />
        <Route path="/get_package" element={<GetPackage setService={setService} packageType={packageType} admin={admin} />} />
        <Route
          path="/login"
          element={
            admin
              ? <Navigate to="/admin_home" replace />
              : <Login setAdmin={setAdmin} />
          }
        />
        <Route path="/user_form/:packageId" element={<UserForm />} />
        <Route path="/admin_home" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
