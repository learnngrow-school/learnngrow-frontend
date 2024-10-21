import './contacts.css'

const Contacts = () => {
    return (
        <>
        <h1 className="text--heading2 heading-1">Контакты</h1>
        <div className="contactsContainer"> 
            <div className="text--heading4 heading-4">Адрес: г. Екатеринбург, ул. Набережная рабочей молодежи, д.1</div>
            <div className="text--heading4 heading-4">Телефон: +7(912)258-77-98 </div>
            <div className="text--heading4 heading-4">WhatsApp: +7(912)258-77-98 </div>
            <div className="text--heading4 heading-4">ВКонтакте: vk.com/whaletoy</div>
            <div className="text--heading4 heading-4">Почта: sonya.kiyatkina@mail.ru </div>
        </div>
        </>
    )
}

export default Contacts