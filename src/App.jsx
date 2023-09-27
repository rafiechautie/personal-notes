import { Route, Routes, useNavigate } from "react-router-dom";
import Navigation from "./components/Navigation";
import AddNote from "./pages/AddNote";
import HomePage from "./pages/HomePage"
import ArchivePage from "./pages/ArchivePage"
import DetailPage from "./pages/DetailPage"
import NotFoundPage from "./pages/NoteFoundPage";
import RegisterPage from "./pages/RegisterPage"
import React, { useEffect, useState } from "react";
import LoginPage from "./pages/LoginPage";
import { getUserLogged, putAccessToken } from "./utils/api";
import Swal from "sweetalert2";
import LocaleContext from "./contexts/LocaleContext";
import { ThemeProvider } from "./contexts/ThemeContext";


function App(){
    const navigate = useNavigate();
    const [authedUser, setAuthedUser] = React.useState(null);
    const [initializing, setInitializing] = React.useState(true);
    const [locale, setLocale] = React.useState(() => {
        return localStorage.getItem('locale') || 'id';
    })
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
    }

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
          title: 'Ingin Logout?',
          text: "Apakah kamu yakin?",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#d33',
          cancelButtonColor: '#28a745',
          confirmButtonText: 'Iya',
          cancelButtonText: 'Batal',
        }).then((result) => {
          if (result.isConfirmed) {
            setAuthedUser(null);
            putAccessToken('');
            navigate('/login');
            Swal.fire({
              icon: 'success',
              title: 'Berhasil Logout!',
              text: "Sampai ketemu kembali!",
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
            <ThemeProvider value={{ theme, toggleTheme }}>
            <LocaleContext.Provider value={localeContextValue}>
                <Navigation isLogin={authedUser}/>
                <main>
                    <Routes>
                        <Route path="/*" element={<LoginPage loginSuccess={onLoginSuccess} />} />
                        <Route path="/register" element={<RegisterPage/>} />
                    </Routes>
                </main>
            </LocaleContext.Provider>
            </ThemeProvider>
            
        )
    }

    return(
        <ThemeProvider  value={{ theme, toggleTheme }}>
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
        </LocaleContext.Provider>
        </ThemeProvider>
        
    )
}

export default App;