import { Alergens } from "./Alergens";

export const Pizas = () => {
    return (
        <>
            <h1 className="menu-category-heading">Пици и Пърленки</h1>
            <section className="menu-category">
                <article className="menu-item">
                    <h2 className="name">Капричоза</h2>
                    <p className="description">Доматен сос, моцарела, гъби, бекон, риган</p>
                    <p className="information">
                        <span className="alergens">/ 7, 8 /</span>
                        <span className="price">400 гр. / 12.90лв.</span>
                    </p>
                </article>
                <article className="menu-item">
                    <h2 className="name">Пеперони</h2>
                    <p className="description">
                        Доматен сос, моцарела, пеперони, топено сирене
                    </p>
                    <p className="information">
                        <span className="alergens">/ 7,8 /</span>
                        <span className="price">400 гр. / 14.90 лв.</span>
                    </p>
                </article>
                <article className="menu-item">
                    <h2 className="name">Вегетариана</h2>
                    <p className="description">
                        Доматен сос, моцарела, червен лук, чушка, маслини, царевица, гъби, риган
                    </p>
                    <p className="information">
                        <span className="alergens">/ 7, 8 /</span>
                        <span className="price">400 гр. / 11.90 лв.</span>
                    </p>
                </article>
                <article className="menu-item">
                    <h2 className="name">Маргарита</h2>
                    <p className="description">Доматен сос, моцарела, чери домати, риган</p>
                    <p className="information">
                        <span className="alergens">/ 7, 8 /</span>
                        <span className="price">350 гр. / 10.90 лв.</span>
                    </p>
                </article>
                <article className="menu-item">
                    <h2 className="name">Четири сирена</h2>
                    <p className="description">
                        Сметана, моцарела, чедър, синьо сирене, топено сирене
                    </p>
                    <p className="information">
                        <span className="alergens">/ 7, 8 /</span>
                        <span className="price">400 гр. / 15.60 лв.</span>
                    </p>
                </article>
                <article className="menu-item">
                    <h2 className="name">Пойо</h2>
                    <p className="description">
                        Сметана, моцарела, чедър, пилешко филе, царевица, рукола
                    </p>
                    <p className="information">
                        <span className="alergens">/ 7, 8 /</span>
                        <span className="price">400 гр. / 13.60 лв.</span>
                    </p>
                </article>
                <article className="menu-item">
                    <h2 className="name">Пърленка с масло</h2>
                    <p className="description"></p>
                    <p className="information">
                        <span className="alergens">/ 7, 8 /</span>
                        <span className="price">200 гр. / 5.50 лв.</span>
                    </p>
                </article>
                <article className="menu-item">
                    <h2 className="name">Пърленка с моцарела</h2>
                    <p className="description"></p>
                    <p className="information">
                        <span className="alergens">/ 7, 8 /</span>
                        <span className="price">250 гр. / 6.50 лв.</span>
                    </p>
                </article>
                <article className="menu-item">
                    <h2 className="name">Пърленка със сирене</h2>
                    <p className="description"></p>
                    <p className="information">
                        <span className="alergens">/ 7, 8 /</span>
                        <span className="price">250 гр. / 6.50 лв.</span>
                    </p>
                </article>
                <article className="menu-item">
                    <h2 className="name">Комбинирана пърленка</h2>
                    <p className="description">Масло, моцарела, краве сирене, сусам</p>
                    <p className="information">
                        <span className="alergens">/ 7, 8 /</span>
                        <span className="price">300 гр. / 7.90 лв.</span>
                    </p>
                </article>
            </section>
            <Alergens />
        </>
    )
}