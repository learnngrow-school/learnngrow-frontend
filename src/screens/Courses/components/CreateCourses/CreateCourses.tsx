import TextInput from "../../../../shared/Inputs/TextInput";
import "./CreateCourses.css";
import { useNavigate } from "react-router-dom";
import BackArrow from "../../../../assets/icons/back-arrow.svg";
import { urls } from "../../../../navigation/app.urls";
import ListSelect from "../../../../shared/Inputs/ListSelect";
import BaseButton from "../../../../shared/Buttons/BaseButton";


const CreateCourses = () => {
    const navigate = useNavigate();

  
    const handleBackClick = () => {
      navigate(`${urls.myCourses}`);
    };
  
    // Временная передача данных 
    const prob = ['Не выбран', 'first' ,'second', 'third']

    const formattedData = prob.map((item, index) => ({
        slug: `slug-${index}`,
        lastName: item,
        firstName: "",
        middleName: ""
    }));

  
    return (
        <div className="container-create-courses">
            <div className="back-to-homework" onClick={handleBackClick}>
                <img className="back-arrow" src={BackArrow} alt="Back" />
                Все задания
            </div>
    
            <h2 className="header-create-courses">Создать курс</h2>
            <form className="form-container-create-courses" > {/*onSubmit={handleSubmit(onSubmit) */}
                <div className="first-block-create-courses">

                    <div className="first-three-field-create-courses">
                        <div className="container-input-courses">
                            <label className="title-create-courses">Введите название курса</label>
                            <TextInput
                                placeholder="Например, 'Функции'"
                                type="text"
                                id="title"
                                // register={{ ...register('title') }}
                                // error={errors.title}
                                containerClassName="field-create-courses"
                            />
                        </div>


                        <div className="container-input-courses">
                            <label className="title-create-courses">Выберите уровень</label>
                            <div className="fieldlist-create-courses">
                                {formattedData.length > 0 ? (
                                <ListSelect
                                    placeholder="Не выбран"
                                    data={formattedData}
                                    // register={{ ...register('studentsSlug', { required: "Выберите ученика" }) }}
                                    // error={errors.studentsSlug}
                                />
                                ) : (
                                <div>Загрузка данных...</div>
                                )}
                            </div>
                        </div>


                        <div className="container-input-courses">
                            <label className="title-create-courses">Выберите класс</label>
                            <div className="fieldlist-create-courses">
                                {formattedData.length > 0 ? (
                                <ListSelect
                                    placeholder="Не выбран"
                                    data={formattedData}
                                    // register={{ ...register('studentsSlug', { required: "Выберите ученика" }) }}
                                    // error={errors.studentsSlug}
                                />
                                ) : (
                                <div>Загрузка данных...</div>
                                )}
                            </div>
                        </div>
                    </div>
                    
                    <div className="image-block-create-courses">
                        <div className="image-create-courses">

                        </div>
                        <div className="addtext-image-create-courses">
                            Добавьте фотографию курса
                        </div>
                    </div>

                </div>

                <div className="container-input-courses">
                    <label className="title-create-courses">
                        Введите описание курса
                    </label>
                    <TextInput
                        placeholder="Описание..."
                        type="text"
                        id="comments"
                        // register={{ ...register('comments') }}
                        // error={errors.comments}
                        containerClassName="description-create-courses"
                    />
                </div>


                <div className="container-input-courses">
                    <label className="title-create-courses">Введите стоимость курса</label>
                        <div className="text-btn-create-courses-last">
                            <TextInput
                                placeholder="1 999 руб."
                                type="text"
                                id="title"
                                // register={{ ...register('title') }}
                                // error={errors.title}
                                containerClassName="field-create-courses"
                            />

                            <BaseButton
                                type="submit"
                                text={"Далее"}
                                theme={"pink-secondary"}
                                className="button-submit-next-create-courses"
                            />
                        </div>
                </div>

            </form>
        </div>
    )
};

export default CreateCourses;
