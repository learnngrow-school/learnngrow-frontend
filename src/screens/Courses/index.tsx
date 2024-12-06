import { FC, useEffect } from "react";
import NotAuthorized from "./components/NotAuthorized/not-authorized";
import { urls } from "../../navigation/app.urls";
import { useNavigate } from "react-router-dom";

const Courses: FC = () => {
    const user = localStorage.getItem('user');
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
          navigate(urls.myCourses);
        }
      }, [user, navigate]);
    

    if (!user) {
        return <NotAuthorized />;
    }

    return null;
};
export default Courses;