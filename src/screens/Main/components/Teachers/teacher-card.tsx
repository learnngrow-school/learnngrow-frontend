export interface ITeacherCardProps { 
    id?: string;  
    name: string;
    iconPath: string;
    subjects: string[];
 }

const TeacherCard = ({ id, name, iconPath, subjects }: ITeacherCardProps) => {
    return (
        <div className="teacher-card" id={id}>
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