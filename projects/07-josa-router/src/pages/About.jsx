import { Link } from '../Link.jsx'

export function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <div>
        <img
          src="https://pbs.twimg.com/profile_images/1550172985058811905/f8Lt3CAd_400x400.jpg"
          alt="Foto Josa"
        />
        <p>Hola!</p>
      </div>
      <Link to="/">Ir a la Home</Link>
    </>
  )
}
