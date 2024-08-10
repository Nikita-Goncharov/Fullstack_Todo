import { Login } from "../Login/Login.jsx";
import { Register } from "../Register/Register.jsx";

export const AuthPage = () => {
  return (
    <div>
      <h1>[Welcome text]</h1>
      <div>
        <Login />
      </div>
      <div>
        <Register />
      </div>
    </div>
  );
};
