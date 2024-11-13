import '../../styles/text.css'

const User = () => {
    const user = localStorage.getItem('user');

    if (!user) {
        return (
            <div>
                <h1 className='text--heading1'>Личный кабинет</h1>
                <p>You are not logged in {":("}</p>
            </div>
        )
    }
    const parsedUser = JSON.parse(user);

    return (
        <div>
            <h1 className='text--heading1'>Личный кабинет</h1>
            {/* <h2 className='text--heading3 text-300'> 
                {"Введите номер карты и 3 цифры с обратной стороны"}</h2> */}
                <div>
                    {user ? 
                    <div className='text--heading3 text-300'>
                      {"Hello, " + parsedUser.firstName + " " + parsedUser.lastName + " " + parsedUser.middleName + "!"}
                    </div>
                     : <p>You are not logged in {":("}</p>}
                </div>
               
        </div>
    )
}

export default User