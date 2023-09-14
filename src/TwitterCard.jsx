
export function TwitterCard({children,name,userName, initialIsFollowing, imageName}){

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar' 
          src={`src/${imageName}`}
          alt="Yeyo Moreno" />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">{userName}</span>
        </div>
        <aside>
          <button>Seguir</button>
        </aside>
      </header>
    </article>
  )
}