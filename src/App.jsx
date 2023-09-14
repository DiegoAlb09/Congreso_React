import './App.css'

import { TwitterCard } from './TwitterCard.jsx'
const datosTwitter = [
  {
    userName: 'yeyomoreno',
    name: 'Yeyo Moreno',
    isFollowing: true,
    imageName: 'yeyo_twitter.jpg'
  }
]
export function App(){
  return (
    <section className='App'>
      {
        datosTwitter.map(({userName, name, isFollowing, imageName}) => (
          <TwitterCard
          key={userName}
          userName={userName}
          initialIsFollowing={isFollowing}
          imageName={imageName}
          > 
          {name}
          </TwitterCard>
        ))
      }
    </section>
  )
}