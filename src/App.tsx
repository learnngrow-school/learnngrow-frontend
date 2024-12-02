import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore as createStore } from '@reduxjs/toolkit';
import authReducer from "./store/auth.slice"
import { urls } from './navigation/app.urls';
import Layout from './shared/Layout';
import Main from './screens/Main';
import Courses from './screens/Courses';
import CourseDetails from './screens/CourseDetails';
import Contacts from './screens/Contacts';
import Auth from './screens/Auth';
import Registration from './screens/Registration';
import PersonalAccount from './screens/PersonalAccount';
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
              <Route path={`${urls.courses}/:id`} element={<CourseDetails />} />
              <Route path={urls.contacts} element={<Contacts />} />
              <Route path={urls.registration} element={<Registration />} />
              <Route path={urls.auth} element={<Auth />} />
              <Route path={urls.user} element={<PersonalAccount />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
