
import { useState } from 'react'

export function TwitterFolowCard({children, userName='default', initialFollowState}){

    const [isFollowing, setIsFollowing] = useState(initialFollowState)
    
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    
    const buttonClassName = isFollowing 
        ? 'tw-followCard-button is-following' 
        : 'tw-followCard-button' 
    
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    
    return (  
    
    <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img alt="El avatar" src={`https://unavatar.io/${userName}`} className='tw-followCard-avatar' />
            <div className='tw-followCard-info'>
                <strong>{children}</strong>
                <span className='tw-followCard-infoUserName'>@{userName}</span>
            </div>
        </header>

        <aside>
        <button className={buttonClassName} onClick={handleClick}>
            <span className='tw-followCard-text'>{text}</span>
            <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
        </button>
        </aside>
    </article>
)
}