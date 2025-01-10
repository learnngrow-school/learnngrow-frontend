import "./main.css";
import SearchInput from "../../../../../shared/Inputs/SearchInput";
import BaseButton from "../../../../../shared/Buttons/BaseButton";
import PlusWhite from "../../../../../assets/icons/plus-white.svg";
import PlusPink from "../../../../../assets/icons/plus-pink.svg";
import Search from "../../../../../assets/icons/search.svg";
import { useNavigate } from "react-router-dom";

const TeacherHomework = () => {
  const navigate = useNavigate();

  // Example data
  const tasks = [
    { id: 1, name: "Урок 1", link: "https://miro.com//fggfdghhhgfdgfdgfdgfdgdfgfd" },
    { id: 2, name: "Урок 2", link: "https://miro.com//fggfdghhhgfdgfdgfdgfdgdfgfd" },
    { id: 3, name: "Функции", link: "https://miro.com//fggfdghhhgfdgfdgfdgfdgdfgfd" },
    { id: 4, name: "Урок урок", link: "https://miro.com//fggfdghhhgfdgfdgfdgfdgdfgfd" },
  ];

  // Handle button click
  const handleCreateHomeworkClick = () => {
    navigate("/me/homework/create");
  };

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
                  <tr key={task.id}>
                    <td>{index + 1}. {task.name}</td>
                    <td>
                      <a className="link-homework" href={task.link} target="_blank" rel="noopener noreferrer">
                        {task.link}
                      </a>
                    </td>
                    <td>
                      <a
                        href={task.link}
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
