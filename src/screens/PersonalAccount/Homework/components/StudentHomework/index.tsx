import { useEffect, useState } from "react";
import HomeworkCard from "../HomeworkCard/homework-card";
import Sad from "../../../../../assets/icons/sad.svg";
import Homework from "../../../../../types/homework";
import "./main.css";
import BaseButton from "../../../../../shared/Buttons/BaseButton";

const StudentHomework = () => {
  const [homeworks, setHomeworks] = useState<Homework[]>([]);
  const [error] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [showAllCompletedHomeworks, setShowAllCompletedHomeworks] = useState(false);

  useEffect(() => {
    const mockHomeworks = [
      { homework: "Математика", deadline: new Date().getTime() + 86400000, link: "https://miro.com/fgasagfdgfdgdfg", completed: false },
      { homework: "Русский язык", deadline: new Date().getTime() + 172800000, link: "https://miro.com/fgasaggfgfgfgfd", completed: false },
      { homework: "Литература", deadline: new Date().getTime() - 86400000, link: "https://miro.com/fgasagfdgdfbbf", completed: true },
    ];

    setHomeworks(mockHomeworks);
    setLoading(false);
  }, []);

  const now = Date.now();

  const upcomingHomeworks = homeworks
    .filter((h) => h.deadline && Number(h.deadline) > now && !h.completed)
    .sort((a, b) => Number(a.deadline) - Number(b.deadline));

  const completedHomeworks = homeworks
    .filter((h) => h.completed)
    .sort((a, b) => Number(b.deadline) - Number(a.deadline));

  const handleAllCompletedHomeworksClick = () => {
    setShowAllCompletedHomeworks((prev) => !prev);
  };

  return (
    <div className="homeworks-page">
      <section className="sections">
        <section className="homeworks-section">
          <h2 className="section-title section-title--green">Нужно выполнить</h2>
          {loading ? (
            <p>Загрузка...</p>
          ) : error || homeworks.length === 0 ? (
            <div className="error-container-pam">
              <img src={Sad} alt="sad" className="sad-icon-pam" />
              <p className="text-error">Данных пока нет...</p>
            </div>
          ) : (
            <div className="homeworks-list">
              {upcomingHomeworks.map((homework) => (
                <HomeworkCard
                  key={homework.homework}
                  homework={homework.homework}
                  deadline={homework.deadline}
                  link={homework.link}
                  completed={homework.completed}
                />
              ))}
            </div>
          )}
        </section>

        <section className="homeworks-section">
          <h2 className="section-title section-title--pink">Выполненные задания</h2>
          {loading ? (
            <p>Загрузка...</p>
          ) : error || homeworks.length === 0 ? (
            <div className="error-container-pam">
              <img src={Sad} alt="sad" className="sad-icon-pam" />
              <p className="text-error">Данных пока нет...</p>
            </div>
          ) : (
            <div className="homeworks-list">
              {(showAllCompletedHomeworks ? completedHomeworks : completedHomeworks.slice(0, 3)).map((homework) => (
                <HomeworkCard
                  key={homework.homework}
                  homework={homework.homework}
                  deadline={homework.deadline}
                  link={homework.link}
                  completed={homework.completed}
                />
              ))}
            </div>
          )}
        </section>

        <BaseButton
          theme="pink-secondary"
          text={showAllCompletedHomeworks ? "Свернуть" : "Все выполненные задания"}
          className="button-container"
          onClick={handleAllCompletedHomeworksClick}
        />
      </section>
    </div>
  );
};

export default StudentHomework;
