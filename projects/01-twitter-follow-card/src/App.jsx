import './App.css'

import { TwitterFolowCard } from './TwitterFollowCard'

export function App() {
  const users = [
    {
      userName: 'josavicente',
      nombre: 'Josa Vicente',
      isFollowing: true,
    },
    {
      userName: 'midudev',
      nombre: 'Midudev',
      isFollowing: false,
    },
  ]

  return (
    <section className='App'>
      {users.map(({ userName, nombre, isFollowing }) => {
        return (
          <TwitterFolowCard key={userName} userName={userName} initialFollowState={isFollowing}>
            <strong>{nombre}</strong>
          </TwitterFolowCard>
        )
      })}
    </section>
  )
}
