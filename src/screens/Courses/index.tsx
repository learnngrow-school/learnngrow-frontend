import { FC } from "react";
import { useCourses } from "../../services/courses.service";
import NotAuthorized from "./components/NotAuthorized/not-authorized";
import Authorized from "./components/Authorized/authorized";

const Courses: FC = () => {
    const user = localStorage.getItem('user');
    const { courses } = useCourses();

    if (!user) {
        return <NotAuthorized courses={courses} />;
    }
    return <Authorized courses={courses} />;
};
export default Courses;