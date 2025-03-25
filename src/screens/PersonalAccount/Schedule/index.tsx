import { useState } from "react";
import "./schedule.css";
import ScheduleTable from "./components/ScheduleTable";
import SubjectBar from "./components/SubjectBar/SubjectBar";
import ChoosingTheWeek from "./components/ChoosingTheWeek";

const Schedule = () => {
    const user = JSON.parse(localStorage.getItem("user") as string);
    const [weekOffset, setWeekOffset] = useState<number>(0);

    return (
        <>
            {user.isTeacher || user.isSuperuser ? (
                <SubjectBar></SubjectBar>
            ) : null}

            <ChoosingTheWeek weekOffset={weekOffset} setWeekOffset={setWeekOffset}></ChoosingTheWeek>

            <ScheduleTable weekOffset={weekOffset} />
        </>
    );
};

export default Schedule;