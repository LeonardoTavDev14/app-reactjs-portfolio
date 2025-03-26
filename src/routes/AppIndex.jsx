import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Cadastro from "../pages/Cadastro";
import Login from "../pages/Login";
import ResetPassword from "../pages/ResetPassword";
import ChangePassword from "../pages/ChangePassword";
import Index from "../pages/Index";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import Feedback from "../pages/Feedback";

const PrivateRoutes = ({ children }) => {
  const token = Cookies.get("token");
  return token ? children : <Navigate to="/login" />;
};

const AppIndex = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Cadastro
              title="Cadastrar Usuário"
              description="Insira as informações abaixo para efetuar o cadastro"
            />
          }
        />
        <Route
          path="/login"
          element={
            <Login
              title="Logar Usuário"
              description="Insira as informações abaixo para efetuar o login"
            />
          }
        />
        <Route
          path="/forgot-password"
          element={
            <ResetPassword
              title="Esqueceu sua senha?"
              description="Insira o seu e-mail cadastrado em nosso sistema"
            />
          }
        />
        <Route
          path="/reset-password/:token"
          element={
            <ChangePassword
              title="Redefinir sua senha"
              description="Digite sua nova senha abaixo para redefinir"
            />
          }
        />
        <Route
          path="/inicio"
          element={
            <PrivateRoutes>
              <Index />
            </PrivateRoutes>
          }
        />
        <Route
          path="/feedback"
          element={
            <PrivateRoutes>
              <Feedback
                title="Feedback"
                description="Digite sua critica para o nosso sistema"
              />
            </PrivateRoutes>
          }
        />
      </Routes>
    </>
  );
};

export default AppIndex;
