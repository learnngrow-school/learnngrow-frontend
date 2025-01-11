import { useEffect, useState } from "react"; 
import LessonCard from "./components/LessonCard";
import Sad from "../../../assets/icons/sad.svg";
import { getLessons } from "../../../services/lesson.service";
import Lesson from "../../../types/lesson";
import "./main.css";
import BaseButton from "../../../shared/Buttons/BaseButton";

const MainPersonal = () => {
  const [lesson, setLesson] = useState<Lesson[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [showAllPastLessons, setShowAllPastLessons] = useState(false);

  useEffect(() => {
    const fetchLessons = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await getLessons();
        if (Array.isArray(response)) {
          setLesson(response);
          console.log('Lessons fetched:', response);
        } else {
          throw new Error("Ошибка получения данных");
        }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error: any) {
        setError( "Данных пока нет..." );
      } finally {
        setLoading(false);
      }
    };

    fetchLessons();
  }, []);

  const now = Date.now();

  const upcomingLessons = lesson
    .filter((l) => l.timestamp && Number(l.timestamp) > now)
    .sort((a, b) => Number(a.timestamp) - Number(b.timestamp))
    .slice(0, 3);

  const pastLessons = lesson
    .filter((l) => l.timestamp && Number(l.timestamp) <= now)
    .sort((a, b) => Number(b.timestamp) - Number(a.timestamp));

    const handleAllPastLessonsClick = () => {
        setShowAllPastLessons((prev) => !prev);
        };

  return (
    <div className="lessons-page">
      <section className="sections">
        <section className="lessons-section">
          <h2 className="section-title section-title--green">Ближайшие занятия</h2>
          {loading ? (
            <p>Загрузка...</p>
          ) : error || lesson.length === 0 ? (
            <div className="error-container-pam">
              <img src={Sad} alt="sad" className="sad-icon-pam" />
              <p className="text-error">Данных пока нет...</p>
            </div>
          ) : (
            <div className="lessons-list">
                {upcomingLessons.map((lessonData: Lesson, index) => {
                    const { homework, timestamp } = lessonData;
                    const isFirst = index === 0;
                    return (
                    <div style={{ cursor: "pointer" }}>
                        <LessonCard
                        homework={homework || "Не указано"}
                        timestamp={timestamp || Date.now()}
                        className={isFirst ? "" : "grey-text"}
                        />
                    </div>
                    );
                })}
            </div>
          )}
        </section>

        <section className="lessons-section">
          <h2 className="section-title section-title--pink">Прошедшие занятия</h2>
          {loading ? (
            <p>Загрузка...</p>
          ) : error || lesson.length === 0 ? (
            <div className="error-container-pam">
              <img src={Sad} alt="sad" className="sad-icon-pam" />
              <p className="text-error">Данных пока нет...</p>
            </div>
          ) : (
            <div className="lessons-list">
              {(showAllPastLessons ? pastLessons : pastLessons.slice(0, 3)).map((lessonData: Lesson) => {
                const { homework, teacherNotes, timestamp } = lessonData;
                return (
                    <div style={{ cursor: "pointer" }}>
                        <LessonCard
                        homework={homework || "Не указано"}
                        teacherNotes={teacherNotes || "Нет заметок"}
                        timestamp={timestamp || Date.now()}
                        />
                    </div>
                );
              })}
            </div>
          )}
        </section>
        
        <BaseButton
          theme="pink-secondary"
          text={showAllPastLessons ? "Свернуть" : "Все прошедшие занятия"}
          className="button-container"
          onClick={handleAllPastLessonsClick}
        />
      </section>
    </div>
  );
};

export default MainPersonal;