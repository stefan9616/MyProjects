import { Alergens } from "./Alergens"

export const MainDishes = () => {
    return(
        <>
        <h1 className="menu-category-heading">Основни ястия</h1>
      <section className="menu-category">
        <article className="menu-item">
          <h2 className="name">Филе от лаврак</h2>
          <p className="description">
            Филе от лаврак, сотирани зеленчуци, червена киноа, копър, сос "Холандез"
          </p>
          <p className="information">
            <span className="alergens">/ 5, 6, 7 /</span>
            <span className="price">300 гр. / 17.90 лв.</span>
          </p>
        </article>
        <article className="menu-item">
          <h2 className="name">Пиле пармиджано</h2>
          <p className="description">
            Пилешки филенца, запечени с пармезан, сметанено ризото, свежа салата
          </p>
          <p className="information">
            <span className="alergens">/ 7 /</span>
            <span className="price">330 гр. / 12.90 лв.</span>
          </p>
        </article>
        <article className="menu-item">
          <h2 className="name">Порк пиканте</h2>
          <p className="description">
            Свинско бон филе, срирача, барбекю сос, картофено пюре
          </p>
          <p className="information">
            <span className="alergens">/ 7, 9 /</span>
            <span className="price">330 гр. / 14.90 лв.</span>
          </p>
        </article>
        <article className="menu-item">
          <h2 className="name">Телешки медальони</h2>
          <p className="description">
            Телешко бон филе, микс от горски гъби, пепър сос
          </p>
          <p className="information">
            <span className="alergens">/ 7, 9 /</span>
            <span className="price">300 гр. / 21.90 лв.</span>
          </p>
        </article>
        <article className="menu-item">
          <h2 className="name">Джоланът на Алинеа</h2>
          <p className="description">
            Бавно готвен телешки джолан, бейби картофки, дзадзики
          </p>
          <p className="information">
            <span className="alergens">/ 7, 14 /</span>
            <span className="price">400 гр. / 19.90 лв.</span>
          </p>
        </article>
        <article className="menu-item">
          <h2 className="name">Сьомга на плоча</h2>
          <p className="description">
            Филе от сьомга, лимонено ризото, пресен лук, сос "Тартар"
          </p>
          <p className="information">
            <span className="alergens">/ 5, 7 /</span>
            <span className="price">330 гр. / 19.90 лв.</span>
          </p>
        </article>
        <article className="menu-item">
          <h2 className="name">Ребра американо</h2>
          <p className="description">
            Крехки свински ребърца, барбекю сос, колсло, пикантни кънтри картофки
          </p>
          <p className="information">
            <span className="alergens">/ 7, 9 /</span>
            <span className="price">500 гр. / 16.50 лв.</span>
          </p>
        </article>
        <article className="menu-item">
          <h2 className="name">Пиле със зеленчуци</h2>
          <p className="description">
            Пилешки филенца, печени зеленчуци, билкова майонеза
          </p>
          <p className="information">
            <span className="alergens">/ 7, 9 /</span>
            <span className="price">330 гр. / 12.90 лв.</span>
          </p>
        </article>
      </section>
      <Alergens />
        </>
    )
}