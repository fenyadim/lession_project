import { FC } from "react";
import "./styles/index.scss";
import { useTheme } from "app/provides/ThemeProvider";
import { AppRouter } from "app/provides/router";
import { classNames } from "shared/lib/classNames/classNames";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";

const App: FC = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
