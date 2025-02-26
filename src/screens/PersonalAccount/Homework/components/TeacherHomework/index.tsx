import "./main.css";
import SearchInput from "../../../../../shared/Inputs/SearchInput";
import BaseButton from "../../../../../shared/Buttons/BaseButton";
import PlusWhite from "../../../../../assets/icons/plus-white.svg";
import PlusPink from "../../../../../assets/icons/plus-pink.svg";
import Search from "../../../../../assets/icons/search.svg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTasks } from "../../../../../services/tasks.service";
import { Task } from "../../../../../types/task";

const TeacherHomework = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Получение заданий с сервера
  useEffect(() => {
      const fetchTasks = async () => {
          setLoading(true);
          const result = await getTasks();
          if (Array.isArray(result)) {
              setTasks(result);
              console.log(result)
          } else {
              setError('Не удалось загрузить задания');
          }
          setLoading(false);
      };

      fetchTasks();
  }, []);


  const handleCreateHomeworkClick = () => {
    navigate("/me/homework/create");
  };

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
      return <div>Ошибка: {error}</div>;
  }

  return (
    <div className="lessons-page">
      <section className="sections">
        <section className="lessons-section">
          <h2 className="section-title section-title--green">Мои задания</h2>
          <section className="search-container-homework">
            <SearchInput
              containerClassName="search-input-homework"
              placeholder="Найти задание"
              iconPath={Search}
            />
            <BaseButton
              theme="pink-secondary"
              text="Создать задание"
              className="button-createtask-homework"
              iconPath={PlusWhite}
              iconPathHover={PlusPink}
              onClick={handleCreateHomeworkClick}
            />
          </section>
          <section className="task-container-homework">
            <table className="task-table">
              <thead>
                <tr>
                  <th>Название</th>
                  <th>Ссылка</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task, index) => (
                  <tr>
                    <td>{index + 1}. {task.title}</td>
                    <td>
                      <p className="link-homework">
                        {task.teacherNotes}
                      </p>
                    </td>
                    <td>
                      <a
                        href={task.teacherNotes}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="task-link"
                      >
                        Перейти к работе
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </section>
      </section>
    </div>
  );
};

export default TeacherHomework;
