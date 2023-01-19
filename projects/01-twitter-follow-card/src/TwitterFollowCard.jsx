export function TwitterFolowCard({children, formatUserName, userName, isFollowing}){
    return (  

    <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img alt="El avatar" src={`https://unavatar.io/${userName}`} className='tw-followCard-avatar' />
            <div className='tw-followCard-info'>
                <strong>{children}</strong>
                <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
            </div>
        </header>

        <aside>
            <button className='tw-followCard-button'>
                Seguir
            </button>
        </aside>
    </article>
)
}