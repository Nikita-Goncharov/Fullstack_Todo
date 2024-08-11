import {Footer} from "./components/Footer/Footer.jsx";
import {Header} from "./components/Header/Header.jsx";
import {Content} from "./components/Content/Content.jsx";
import {AuthPage} from "./components/Authorization/AuthPage/AuthPage.jsx";

export const App = () => {
  const isUserLogged = true;
  return (
    <>
      <Header></Header>
      {isUserLogged && <Content/>}
      {!isUserLogged && <AuthPage/>}
      <Footer/>
    </>
  );
};
