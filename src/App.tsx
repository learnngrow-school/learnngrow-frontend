// import { useEffect } from 'react'
// import appRouter from './navigation/app.router.tsx'
// import { urls } from './navigation/app.urls'
// import {RouterProvider} from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {
//   useEffect(() => {
//     if(location.pathname == "/") {
//       location.replace(urls.main)
//     }
//   })

//   return (
//     <>
//       <RouterProvider router={appRouter} />
//     </>
//   )
// }

// export default App
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore as createStore } from '@reduxjs/toolkit';
import authReducer from "./store/auth.slice"
import { urls } from './navigation/app.urls';
import Layout from './shared/Layout';
import Main from './screens/Main';
import Courses from './screens/Courses';
import Contacts from './screens/Contacts';
import Auth from './screens/Auth';
import AuthProvider from './screens/Auth/AuthProvider';
import Registration from './screens/Registration';
import User from './screens/User';
import { useEffect } from 'react';

const store = createStore({
  reducer: {
    auth: authReducer,
  },
});

const App: React.FC = () => {

  useEffect(() => {
        if(location.pathname == "/") {
          location.replace(urls.main)
        }
      })

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
              <Route path={urls.main} element={<Main />} />
              <Route path={urls.courses} element={<Courses />} />
              <Route path={urls.contacts} element={<Contacts />} />
              <Route path={urls.registration} element={<Registration />} />
                <Route path={urls.auth} element={<Auth />} />
                <Route path={urls.user} element={<User />} />
              </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
