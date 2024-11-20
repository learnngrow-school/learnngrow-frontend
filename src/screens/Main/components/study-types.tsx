const StudyTypes = () => {
    const studyTypes = [
        "Подготовка к ЕГЭ", 
        "Подготовка к ОГЭ", 
        "Подготовка к ВПР",
        "Подготовка к олимпиадам",
    ]

    return (
        <div className="grid-4">
                {studyTypes.map(studyType => (
                    <div className="text--body-m text-400 study-type-card" key={studyType}>{studyType}</div>
                ))}
            </div>
    )
}

export default StudyTypes