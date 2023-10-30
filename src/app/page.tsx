import Image from 'next/image'
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 fundo">
      <nav className="navbar navbar-light bg-light">
  <a className="navbar-brand">Navbar</a>
  <form className="form-inline">
    <input className="form-control mr-sm-2" type="search" placeholder="Pesquisar" aria-label="Pesquisar"/>
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Pesquisar</button>
  </form>
  </nav>
    </main>
  )
}
