import { Alergens } from "./Alergens";
export const Salads = () => {
    return (
        <>
            <h1 className="menu-category-heading">Салати</h1>
            <section className="menu-category">
                <article className="menu-item">
                    <h2 className="name">Салата с бейби спанак и червена киноа</h2>
                    <p className="description">
                        Бейби спанак, червена киноа, краве сирене, яйце, домашна печена чушка,
                        чери домати, медено горчичен дресинг
                    </p>
                    <p className="information">
                        <span className="alergens">/ 6, 7, 12 /</span>
                        <span className="price">250 гр. / 12.50 лв.</span>
                    </p>
                </article>
                <article className="menu-item">
                    <h2 className="name">Салата "Капрезе"</h2>
                    <p className="description">
                        Белени домати, бейби моцарела, кедрови ядки, рукола, песто, винегрет от
                        нар
                    </p>
                    <p className="information">
                        <span className="alergens">/ 2, 7 /</span>
                        <span className="price">270 гр. / 12.00 лв.</span>
                    </p>
                </article>
                <article className="menu-item">
                    <h2 className="name">Френска салата</h2>
                    <p className="description">
                        Белени домати, краставици, яйчен катък, рукола, маслони, домашно мезе,
                        брускети
                    </p>
                    <p className="information">
                        <span className="alergens">/ 6, 7, 8 /</span>
                        <span className="price">450 гр. / 13.90 лв.</span>
                    </p>
                </article>
                <article className="menu-item">
                    <h2 className="name">Салата "Цезар"</h2>
                    <p className="description">
                        Айсберг, чери домати, печено пилешко филе, крутони, цезар дресинг,
                        пармезан
                    </p>
                    <p className="information">
                        <span className="alergens">/ 6, 7, 8, 9, 12 /</span>
                        <span className="price">300 гр. / 12.90 лв.</span>
                    </p>
                </article>
                <article className="menu-item">
                    <h2 className="name">Блу чийз салата</h2>
                    <p className="description">
                        Микс от зелени салати, синьо сирене, пеперони, сушени кайсии,
                        медено-горчичен дресинг
                    </p>
                    <p className="information">
                        <span className="alergens">/ 7, 12 /</span>
                        <span className="price">250 гр. / 13.00 лв.</span>
                    </p>
                </article>
                <article className="menu-item">
                    <h2 className="name">Салата с морски дарове</h2>
                    <p className="description">
                        Микс от свежи салати, чери домати, хрупкави калмари и скариди,
                        медено-горчичен дресинг
                    </p>
                    <p className="information">
                        <span className="alergens">/ 3, 4, 8, 12 /</span>
                        <span className="price">300 гр. / 13.80 лв.</span>
                    </p>
                </article>
                <article className="menu-item">
                    <h2 className="name">Шопска салата</h2>
                    <p className="description">
                        Домати, краставици, креве сирене, домашни печени чушки, червен лук,
                        маслини, магданоз, люта чушка
                    </p>
                    <p className="information">
                        <span className="alergens">/ 7 /</span>
                        <span className="price">350 гр. / 9.90 лв.</span>
                    </p>
                </article>
                <article className="menu-item">
                    <h2 className="name">Дзадзики</h2>
                    <p className="description">
                        Краставици, цедено кисело мляко, орехи, копър, чесън
                    </p>
                    <p className="information">
                        <span className="alergens">/ 2, 7 /</span>
                        <span className="price">250 гр. / 8.90 лв.</span>
                    </p>
                </article>
                <article className="menu-item">
                    <h2 className="name">Селска салата</h2>
                    <p className="description">
                        Домати, краставици, козе сирене, кьопоолу, маслини, червен лук, магданоз
                    </p>
                    <p className="information">
                        <span className="alergens">/7/</span>
                        <span className="price">450 гр. / 10.90 лв.</span>
                    </p>
                </article>
            </section>
      <Alergens />

        </>
    );
}