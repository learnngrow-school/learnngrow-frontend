export interface ITeacherCardProps {   
    name: string;
    iconPath: string;
    subjects: string[];
 }

const TeacherCard = ({ name, iconPath, subjects }: ITeacherCardProps) => {
    return (
        <div className="teacher-card">
            <img className="photo" src={iconPath} alt="avatar"/>
            <div className="name text--body-s text-600">{name}</div>
            <div className="subjects">
                {subjects.map((subject) => (
                    <div key={subject}>
                        {subject}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeacherCard;