import { FC, Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import styles from "../test.module.scss";
import { useTheme } from "app/provides/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { MainPage } from "pages/MainPage";
import { AboutPage } from "pages/AboutPage";


const App: FC = () => {
  const {theme, toggleTheme} = useTheme()

  return <div className={classNames('app', {}, [theme])}>
    <Link to={'/'}>Main</Link>
    <Link to={'/about'}>About</Link>

    <button className={styles.btn} onClick={toggleTheme}>Тема</button>

    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path={"/"} element={<MainPage/>}/>
        <Route path={"/about"} element={<AboutPage/>}/>
      </Routes>
    </Suspense>
  </div>
}

export default App