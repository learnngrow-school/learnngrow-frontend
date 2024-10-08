export interface ISubjectProps{
    subjects: string[]
}

const NavSubjects = ({ subjects }: ISubjectProps) => {

    return (
        <>
        <div className="dropdown">
            <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                Предметы
            </a>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                {subjects.map((subject, index) => (
                    <li key={index}>
                        <a className="dropdown-item" href="#">{subject}</a>
                    </li>
                ))}
            </ul>
        </div>
        </>)
}

export default NavSubjects



