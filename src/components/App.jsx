import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "../redux/store";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
import { GlobalStyle } from "./GlobalStyles";
import NavBar from "../pages/NavBar/NavBar";
import ChatPage from "../pages/ChatPage/ChatPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import MainPage from "../pages/MainPage/MainPage";

import PublicRoute from "../modules/PublicRoute/PublicRoute";
import PrivateRoute from "../modules/PrivateRoute/PrivateRoute";
import AuthLayout from "../modules/AuthLayout/AuthLayout";

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <AuthLayout>
            <BrowserRouter>
          <Routes>
            <Route path="/" element={<NavBar />} />
            <Route element={<PublicRoute />}>
              <Route path="/register" element={<RegistrationPage />} />
              <Route path="/login" element={<LoginPage />} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path="/main" element={<MainPage />} />
              <Route path="/chat" element={<ChatPage />}/>
            </Route>
       </Routes>
          
          <GlobalStyle />
          </BrowserRouter>
        </AuthLayout>
         </PersistGate>
        </Provider>
    </>
  );
}

export default App;
