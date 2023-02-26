import { Link } from '../Link.jsx'

const i18n = {
  en: {
    title: 'About',
    description: 'Hi!',
    link: 'Go to Home',
  },
  es: {
    title: 'Sobre mí',
    description: 'Hola!',
    link: 'Ir a la Home',
  },
}

const useI18n = (lang) => {
  return i18n[lang] || i18n.en
}
export default function AboutPage({ routeParams }) {
  const i18n = useI18n(routeParams.lang ?? 'es')
  return (
    <>
      <h1>{i18n.title}</h1>
      <div>
        <img
          src="https://pbs.twimg.com/profile_images/1550172985058811905/f8Lt3CAd_400x400.jpg"
          alt="Foto Josa"
        />
        <p>{i18n.description}</p>
      </div>
      <Link to="/">{i18n.link}</Link>
    </>
  )
}
