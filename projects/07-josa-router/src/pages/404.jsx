import { Link } from '../Link.jsx'

export function Page404() {
  return (
    <>
      <h1>This is NOT fine</h1>
      <img
        src="https://media.tenor.co/images/0d1329f5ff7d31712e3d12ce160df6ec/raw"
        alt="This is fine"
      />
      <Link to="/">Go to Home</Link>
    </>
  )
}
