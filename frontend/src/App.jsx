import { BrowserRouter, Routes,Route} from "react-router-dom";
import Studios from "./components/photographer/Addphotographer"
import Home from "./components/home"
import GetStudios from "./components/photographer/getPhotographer";
import UploadImages from "./components/photographer/UploadImages";
import GetPhotographerDetail from "./components/photographer/GetPhotographerDetail";
import Contact from "./components/contact";
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
      </Routes>
    </BrowserRouter>
  );
};
export default App;
