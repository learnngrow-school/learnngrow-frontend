import { useState } from "react";
import "./schedule.css";
import ScheduleTable from "./components/ScheduleTable";
import SubjectBar from "./components/SubjectBar/SubjectBar";
import ChoosingTheWeek from "./components/ChoosingTheWeek";
import useWindowSize from "../../Courses/components/WindowSize/useWindowSize";
import ScheduleTableMobile from "./components/ScheduleTable/ScheduleTableMobile";

const Schedule = () => {
    const user = JSON.parse(localStorage.getItem("user") as string);
    const [weekOffset, setWeekOffset] = useState<number>(0);

    const { width } = useWindowSize();
    const showMobil = width <= 768;

    return (
        <>
            {user.isTeacher || user.isSuperuser ? (
                <SubjectBar></SubjectBar>
            ) : null}

            <ChoosingTheWeek weekOffset={weekOffset} setWeekOffset={setWeekOffset}></ChoosingTheWeek>
            {!showMobil ? (
                <ScheduleTable weekOffset={weekOffset} />
            ) : (
                <ScheduleTableMobile weekOffset={weekOffset} />
            )
            }
        </>
    );
};

export default Schedule;