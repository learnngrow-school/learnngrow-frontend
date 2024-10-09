import { FC } from "react";
import '../../styles/text.css';


const Courses: FC = () => {
    const selectedSubject = localStorage.getItem('subject');

    return (
        <>
            <h1 className="text--heading1">Курсы кройки и житья</h1>
            {selectedSubject && 
                <div className="text--heading2">{`Выбраны курсы по предмету "${localStorage.getItem('subject')}"`}</div>
            }
            <div>Тут список курсов</div>
        </>
    );  
};

export default Courses;