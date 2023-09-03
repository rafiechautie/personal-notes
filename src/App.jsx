import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import AddNote from "./pages/AddNote";
import HomePage from "./pages/HomePage"
import ArchivePage from "./pages/ArchivePage"
import DetailPage from "./pages/DetailPage"
import NotFoundPage from "./pages/NoteFoundPage";

function App(){
    return(
        <>
            <Navigation />
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/add" element={<AddNote />}/>
                    <Route path="/archive" element={<ArchivePage />}/>
                    <Route path="/notes/:id" element={<DetailPage />}/>
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </main>
            <Footer/>
        </>
    )
}

export default App;