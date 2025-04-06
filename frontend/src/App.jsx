import { BrowserRouter, Routes,Route} from "react-router-dom";
import Studios from "./components/display_services/Addphotographer"
import Home from "./components/home"
import GetStudios from "./components/display_services/getPhotographer";
import UploadImages from "./components/display_services/UploadImages";
import GetPhotographerDetail from "./components/display_services/GetPhotographerDetail";
import SubEvent from "./components/display_services/sub_event";
import Contact from "./components/contact";
import FetchSubEvent from "./components/display_services/fetch_sub_event";
import { useState } from "react";
const App = () => {

  const [service, setService] = useState("");

  return (
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home setService={setService}/>} />
        <Route path="/addStudios" element={<Studios service={service}/>} />
        <Route path="/getStudios" element={<GetStudios service={service}/>} />
        <Route path="/uploadImages/:studioId" element={<UploadImages service={service} />} />
        <Route path="/getPhotographerImages/:studioId" element={<GetPhotographerDetail service={service}/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/subevents/:studioId" element={<SubEvent service={service}/>} />
        <Route path="/studios/:studioId/subevents" element={<FetchSubEvent/>} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
