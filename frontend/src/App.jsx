import "./App.css";
import { Header } from "./components/Header/Header";
import { Content } from "./components/Content/Content";
import { Footer } from "./components/Footer/Footer";
import { AuthPage } from "./components/Authorization/AuthPage/AuthPage.jsx";

export const App = () => {
  const isUserLogged = false;
  return (
    <>
      <Header></Header>
      {isUserLogged && <Content />}
      {!isUserLogged && <AuthPage />}
      <Footer></Footer>
    </>
  );
};
