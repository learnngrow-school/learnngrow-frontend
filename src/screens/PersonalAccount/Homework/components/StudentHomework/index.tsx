import { useEffect, useState } from "react";
import HomeworkCard from "../HomeworkCard/homework-card";
import Sad from "../../../../../assets/icons/sad.svg";
import Homework from "../../../../../types/homework";
import { getTasks } from "../../../../../services/tasks.service";
import "./main.css";
import BaseButton from "../../../../../shared/Buttons/BaseButton";

const StudentHomework = () => {
  const [homeworks, setHomeworks] = useState<Homework[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [showAllCompletedHomeworks, setShowAllCompletedHomeworks] = useState(false);

  useEffect(() => {
    const fetchHomeworks = async () => {
      try {
        const tasks = await getTasks();
        if (Array.isArray(tasks)) {
          const mappedHomeworks: Homework[] = tasks.map((task) => ({
            fileSlug: task.fileSlug,
            title: task.title,
            teacherNotes: task.teacherNotes,
            deadline: new Date().getTime() + 86400000, // Пример: текущая дата + 1 день (могут быть другие правила)
            completed: false, // Можно временно установить все задания как невыполненные
          }));
          setHomeworks(mappedHomeworks);
        } else {
          setError('Не удалось загрузить задания');
        }
      } catch (error) {
        setError('Произошла ошибка при загрузке данных');
      } finally {
        setLoading(false);
      }
    };
  
    fetchHomeworks();
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
      <section className="sections-page-tasks">
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
                  key={homework.title}
                  homework={homework.title}
                  deadline={homework.deadline}
                  link={homework.teacherNotes}
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
                  key={homework.title}
                  homework={homework.title}
                  deadline={homework.deadline}
                  link={homework.teacherNotes}
                  completed={homework.completed}
                />
              ))}
            </div>
          )}
        </section>
        <div className="btn-all-all-tasks">
          <BaseButton
            theme="pink-secondary"
            text={showAllCompletedHomeworks ? "Свернуть" : "Все выполненные задания"}
            className="button-container"
            onClick={handleAllCompletedHomeworksClick}
          />
        </div>
      </section>
    </div>
  );
};

export default StudentHomework;
