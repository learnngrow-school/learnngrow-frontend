import "./avatarInput.css"

interface IProps{
    avatar: string
    onAvatarChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const AvatarInput = ({avatar, onAvatarChange} :IProps) => {

    return (
        <div className='avatar-container'>
            <div className='avatar'>
                {avatar && <img src={avatar} alt="avatar" className='avatar-img'/>}
            </div>
            <input type='file' accept='image/*' id="fileInput"
                className=' file-input'onChange={onAvatarChange}/>
            <label htmlFor="fileInput" className='text--body-s file-label'>
                Загрузить фото
            </label>
        </div>
        )
}

export default AvatarInput