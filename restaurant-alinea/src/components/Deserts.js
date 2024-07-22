import { Alergens } from "./Alergens";

export const Deserts = () => {
    return (
        <>
            <h1 className="menu-category-heading">Десерти</h1>
            <section className="menu-category">
                <article className="menu-item">
                    <h2 className="name">Шоколадова торта</h2>
                    <p className="description"></p>
                    <p className="information">
                        <span className="alergens">/ 2, 6, 7, 8 /</span>
                        <span className="price">180 гр. / 8.40 лв.</span>
                    </p>
                </article>
                <article className="menu-item">
                    <h2 className="name">Чийзкейк</h2>
                    <p className="description"></p>
                    <p className="information">
                        <span className="alergens">/ 2, 6, 7, 8 /</span>
                        <span className="price">180 гр. / 8.70 лв.</span>
                    </p>
                </article>
                <article className="menu-item">
                    <h2 className="name">Топка домашен сладолед</h2>
                    <p className="description"></p>
                    <p className="information">
                        <span className="alergens">/ 2, 7 /</span>
                        <span className="price">80 гр. / 3.00 лв.</span>
                    </p>
                </article>
                <article className="menu-item">
                    <h2 className="name">Десерт на деня</h2>
                    <p className="description"></p>
                    <p className="information">
                        <span id="daily-dessert">Попитайте вашият сервитьор</span>
                        <span className="price" />
                    </p>
                </article>
            </section>
            <Alergens />
        </>
    )
}