import { FC, Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import styles from "./test.module.scss";
import { MainAsyncPage } from "./pages/MainPage/MainAsyncPage";
import { AboutAsyncPage } from "./pages/AboutPage/AboutAsyncPage";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames";


const App: FC = () => {
  const {theme, toggleTheme} = useTheme()

  return <div className={classNames('app', {}, [theme])}>
    <Link to={'/'}>Main</Link>
    <Link to={'/about'}>About</Link>

    <button className={styles.btn} onClick={toggleTheme}>Тема</button>

    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path={"/"} element={<MainAsyncPage/>}/>
        <Route path={"/about"} element={<AboutAsyncPage/>}/>
      </Routes>
    </Suspense>
  </div>
}

export default App