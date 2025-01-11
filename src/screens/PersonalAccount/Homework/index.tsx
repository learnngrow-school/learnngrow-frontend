import StudentHomework from "./components/StudentHomework";
import TeacherHomework from "./components/TeacherHomework";

const Homework = () => {
    const user = JSON.parse(localStorage.getItem('user') as string);

    return (
        <>
            {user.isTeacher || user.isSuperuser 
            ?
                <TeacherHomework/>
            : 
                <StudentHomework/>
            }
        </>
    );
};
export default Homework;