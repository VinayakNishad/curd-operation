import { BrowserRouter, Routes,Route} from "react-router-dom";
import Studios from "./components/photographer/Addphotographer"
import Home from "./components/home"
import GetStudios from "./components/photographer/getPhotographer";
import UploadImages from "./components/photographer/UploadImages";
import GetPhotographerDetail from "./components/photographer/GetPhotographerDetail";
import SubEvent from "./components/photographer/sub_event";
import Contact from "./components/contact";
import FetchSubEvent from "./components/photographer/fetch_sub_event";
import Halls from "./components/Hall/addHall";
import GetHalls from "./components/Hall/get_halls";
const App = () => {

  return (
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addStudios" element={<Studios />} />
        <Route path="/getStudios" element={<GetStudios/>} />
        <Route path="/uploadImages/:studioId" element={<UploadImages />} />
        <Route path="/getPhotographerImages/:studioId" element={<GetPhotographerDetail/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/subevents/:studioId" element={<SubEvent />} />
        <Route path="/studios/:studioId/subevents" element={<FetchSubEvent />} />
        <Route path="/add_halls" element={<Halls/>}/>
        <Route path="/get_halls" element={<GetHalls/>}/>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
