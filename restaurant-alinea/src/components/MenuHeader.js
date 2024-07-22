import { Link } from "react-router-dom"

export const MenuHeader = () => {
  return (
    <>
      <section className="menu-header">
        <h1>Меню</h1>
      </section>
      <section className="menu-page">
        <article className="category">
          <Link to="/top">
            <h1>Топ предложения</h1>
          </Link>

          <Link to="/salads">
            <h1>Салати</h1>
          </Link>

          <Link to="/starters">
            <h1>Предястия</h1>
          </Link>

          <Link to="/pasta">
            <h1>Паста и Ризото</h1>
          </Link>

          <Link to="/pizas">
            <h1>Пици и Пърленки</h1>
          </Link>

          <Link to="/main">
            <h1>Основни ястия</h1>
          </Link>

          <Link to="/deserts">
            <h1>Десерти</h1>
          </Link>

          <Link to="/drinks">
            <h1>Напитки</h1>
          </Link>
          
        </article>
      </section>
    </>
  )
}