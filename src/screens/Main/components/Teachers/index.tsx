import "./teachers.css";
import Sonya from "../../../../assets/pictures/sonya.png"
import Anna from "../../../../assets/pictures/anna_kutz.jpg"
import Daniil from "../../../../assets/pictures/daniil_pasynkov.jpg"
import Maxim from "../../../../assets/pictures/maxim_shengelaya.jpg"
import Kseniya from "../../../../assets/pictures/kseniya_vasilievna.jpg"
import Alexandr from "../../../../assets/pictures/alex_elistratov.jpg"
import PointsSlider from "../PointsSlider";
import { Teacher } from "../../../../types/teacher";

const teacherPhotos = [
    Anna,
    Daniil,
    Maxim,
    Kseniya,
    Alexandr,
    Sonya
]

interface IProps {
    data: Teacher[]
}

const Teachers = ({ data }: IProps) => {
    

    const teachers = data.map((teacher, index) => ({
        id: teacher.userData.id || index,
        name: teacher.userData.firstName + " " + teacher.userData.middleName + " " + teacher.userData.lastName ,
        iconPath: teacher.userData?.iconPath || (index < teacherPhotos.length ? teacherPhotos[index] : Sonya),
        subjects: teacher.teacherData.subjectIds.map((subjectId) => subjectId.toString())
    }))

    return (
        <div className="content">
            <div className="text--heading2 text-600 title">Наши преподаватели</div>
            <PointsSlider 
                data={teachers} 
                dataType="teachers"
                dataClassName="teachers-cards"
                oddBlockLength={teachers.length < 5? 3 : 5}
                evenBlockLength={teachers.length < 4? 2 : 4}
            />
        </div>
    );
};

export default Teachers;