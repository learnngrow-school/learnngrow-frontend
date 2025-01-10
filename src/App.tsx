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
import Registration from './screens/Registration';
import MyData from './screens/PersonalAccount/MyData';
import MainPersonal from './screens/PersonalAccount/Main';
import Homework from './screens/PersonalAccount/Homework';
import Schedule from './screens/PersonalAccount/Schedule';
import News from './screens/PersonalAccount/News';
import UserLayout from './screens/PersonalAccount/components/Layout';
import { useEffect } from 'react';
import Pupils from './screens/PersonalAccount/Pupils';
import Authorized from './screens/Courses/components/Authorized/authorized';
import Shop from './screens/Shop';
import CourseDetailAuthorized from './screens/CourseDetails/Authorized/course-detail-a';
import CourseDetailNotAuthorized from './screens/CourseDetails/NotAuthorized/course-detail-na';
import Teachers from './screens/PersonalAccount/Teachers';
import TeacherCreation from "./screens/PersonalAccount/Teachers/Creation";
import CreateHomework from './screens/PersonalAccount/Homework/components/CreateHomework';

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
              <Route path={`${urls.courses}/:id`} element={<CourseDetailNotAuthorized />} />
              <Route path={urls.contacts} element={<Contacts />} />
              <Route path={urls.registration} element={<Registration />} />
              <Route path={urls.auth} element={<Auth />} />

              <Route path={urls.user} element={<UserLayout />}>
                <Route path={urls.myData} element={<MyData />} />
                <Route path={urls.mainPersonal} element={<MainPersonal />} />
                <Route path={urls.schedule} element={<Schedule />} />
                <Route path={urls.news} element={<News />} />
                <Route path={urls.homework} element={<Homework />} />

                <Route path={urls.pupils} element={<Pupils/>} />

                <Route path={urls.myCourses} element={<Authorized />} />
                <Route path={`${urls.myCourses}/:id`} element={<CourseDetailAuthorized />} />
                <Route path={urls.shop} element={<Shop/>} />
                <Route path={urls.teachers} element={<Teachers/>}/>
                <Route path={urls.teacherCreation} element={<TeacherCreation/>}/>
                <Route path={urls.createHomework} element={<CreateHomework/>}/>
              </Route>
            </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
