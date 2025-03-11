import "./schedule.css";
import ScheduleTable from "./components/ScheduleTable";
import SubjectBar from "./components/SubjectBar/SubjectBar"

const Schedule = () => {
    const user = JSON.parse(localStorage.getItem("user") as string);

    return (
        <>
            {user.isTeacher || user.isSuperuser ? (
                <SubjectBar></SubjectBar>
            ) : null}

            <ScheduleTable />
        </>
    );
};

export default Schedule;