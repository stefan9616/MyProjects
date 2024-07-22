import { Alergens } from "./Alergens";

export const Starters = () => {
    return (
        <>
            <h1 className="menu-category-heading">Предястия</h1>
            <section className="menu-category">
                <article className="menu-item">
                    <h2 className="name">Дърпано телешко</h2>
                    <p className="description">Дърпано телешко, чедър сос, домашен чипс</p>
                    <p className="information">
                        <span className="alergens">/ 7, 9 /</span>
                        <span className="price">280 гр. / 14.90 лв.</span>
                    </p>
                </article>
                <article className="menu-item">
                    <h2 className="name">Скариди в масло с лимонов дресинг</h2>
                    <p className="description"></p>
                    <p className="information">
                        <span className="alergens">/ 3, 7 /</span>
                        <span className="price">200 гр. / 16.90 лв.</span>
                    </p>
                </article>
                <article className="menu-item">
                    <h2 className="name">Калмари в масло с лимонов дресинг</h2>
                    <p className="description"></p>
                    <p className="information">
                        <span className="alergens">/ 4, 7 /</span>
                        <span className="price">250 гр. / 15.90 лв.</span>
                    </p>
                </article>
                <article className="menu-item">
                    <h2 className="name">Телешки език в масло с манатарки</h2>
                    <p className="description"></p>
                    <p className="information">
                        <span className="alergens">/ 7 /</span>
                        <span className="price">250 гр. / 17.90 лв.</span>
                    </p>
                </article>
                <article className="menu-item">
                    <h2 className="name">Микс разядки с домашна пърленка</h2>
                    <p className="description">
                        Тарама, кьопоолу, дзадзики, яйчен катък, домашна пърленка
                    </p>
                    <p className="information">
                        <span className="alergens">/ 5, 6, 7, 8/</span>
                        <span className="price">300 гр. / 11.90 лв.</span>
                    </p>
                </article>
                <article className="menu-item">
                    <h2 className="name">Хрупкави пържени калмари с чеснов сос</h2>
                    <p className="description"></p>
                    <p className="information">
                        <span className="alergens">/ 4, 6, 7, 8 /</span>
                        <span className="price">250 гр. / 15.90 лв.</span>
                    </p>
                </article>
                <article className="menu-item">
                    <h2 className="name">Хрупкави пилешкки пръчици с чеснов сос</h2>
                    <p className="description"></p>
                    <p className="information">
                        <span className="alergens">/ 6, 7, 8 /</span>
                        <span className="price">350 гр. / 11.90 лв.</span>
                    </p>
                </article>
                <article className="menu-item">
                    <h2 className="name">Печени зеленчуци с бейби моцарела</h2>
                    <p className="description">
                        Тиквички, моркови, червен лук, червена чушка, зелена чушка, рукола,
                        бейби моцарела, чери домати, песто, магданоз
                    </p>
                    <p className="information">
                        <span className="alergens">/ 2, 7 /</span>
                        <span className="price">330 гр. / 9.90 лв.</span>
                    </p>
                </article>
                <article className="menu-item">
                    <h2 className="name">
                        Хрупкава бяла риба с пържени картофи и сос "Тартар"
                    </h2>
                    <p className="description"></p>
                    <p className="information">
                        <span className="alergens">/ 5, 6, 7, 8 /</span>
                        <span className="price">280 гр. / 14.90 лв.</span>
                    </p>
                </article>
                <article className="menu-item">
                    <h2 className="name">Пържени картофи / със сирене</h2>
                    <p className="description"></p>
                    <p className="information">
                        <span className="alergens">/ 7 /</span>
                        <span className="price">200 / 250 гр. / 5.00 / 6.00</span>
                    </p>
                </article>
                <article className="menu-item">
                    <h2 className="name">Домашен чипс / със сирене</h2>
                    <p className="description"></p>
                    <p className="information">
                        <span className="alergens">/ 7 /</span>
                        <span className="price">200 / 250 гр. / 6.00 / 7.00</span>
                    </p>
                </article>
                <article className="menu-item">
                    <h2 className="name">Пикантни кънтри картофки / със сирене</h2>
                    <p className="description"></p>
                    <p className="information">
                        <span className="alergens">/ 7 /</span>
                        <span className="price">200 / 250 гр. / 5.50 / 6.50</span>
                    </p>
                </article>
            </section>
            <Alergens />
        </>
    )
}