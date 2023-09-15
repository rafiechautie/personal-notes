import { Route, Routes, useNavigate } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import AddNote from "./pages/AddNote";
import HomePage from "./pages/HomePage"
import ArchivePage from "./pages/ArchivePage"
import DetailPage from "./pages/DetailPage"
import NotFoundPage from "./pages/NoteFoundPage";
import RegisterPage from "./pages/RegisterPage"
import React from "react";
import LoginPage from "./pages/LoginPage";
import { getUserLogged, putAccessToken } from "./utils/api";
import Swal from "sweetalert2";
import LocaleContext from "./contexts/LocaleContext";

function App(){
    const navigate = useNavigate();
    const [authedUser, setAuthedUser] = React.useState(null);
    const [initializing, setInitializing] = React.useState(true);
    const [locale, setLocale] = React.useState(() => {
        return localStorage.getItem('locale') || 'id';
    })

    React.useEffect(() => {
        const getData = async () => {
            const { data } = await getUserLogged();
            setAuthedUser(data);
            setInitializing(false)
        }

        getData();
    }, []);

    const onLoginSuccess = async ({ accessToken }) => {
        putAccessToken(accessToken);
        const { data } = await getUserLogged();

        setAuthedUser(data);
    }

    const onLogout = () => {
        Swal.fire({
          title: 'Kamu kenapa? Yakin ingin pergi?',
          text: "Aku gak mau kamu pergi, aku ingin bersama kamu terus!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#d33',
          cancelButtonColor: '#28a745',
          confirmButtonText: 'Tetap pergi',
          cancelButtonText: 'Tetap bersama',
        }).then((result) => {
          if (result.isConfirmed) {
            setAuthedUser(null);
            putAccessToken('');
            navigate('/login');
            Swal.fire({
              icon: 'success',
              title: 'HeyCa!! Selalu MenantiMu!',
              text: "Aku akan selalu ada untukmu dan selalu merindukanmu!",
              showConfirmButton: true,
            });
          }
        });
      }

    const toogleLocale = () => {
        setLocale((prevLocale) => {
            const newLocale = prevLocale === 'id' ? 'en' : 'id';
            localStorage.setItem('locale', newLocale);
            return newLocale;
        });
    }

    const localeContextValue = React.useMemo(() => {
        return{
            locale,
            toogleLocale
        }
    }, [locale]);

    if (initializing) {
        return null;
    }

    //jika user belom login
    if(authedUser === null){
        return(
            <LocaleContext.Provider value={localeContextValue}>
                <Navigation />
                <main>
                    <Routes>
                        <Route path="/login" element={<LoginPage loginSuccess={onLoginSuccess} />} />
                        <Route path="/register" element={<RegisterPage/>} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </main>
            </LocaleContext.Provider>
        )
    }

    return(
        <LocaleContext.Provider value={localeContextValue}>
            <Navigation logout={onLogout}/>
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/add" element={<AddNote />}/>
                    <Route path="/archive" element={<ArchivePage />}/>
                    <Route path="/notes/:id" element={<DetailPage />}/>
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </main>
            {/* <Footer/> */}
        </LocaleContext.Provider>
    )
}

export default App;