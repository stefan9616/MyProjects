import { Alergens } from "./Alergens";

export const PastaAndRizoto = () => {
    return (
        <>
            <h1 className="menu-category-heading">Паста и ризото</h1>
            <section className="menu-category">
                <article className="menu-item">
                    <h2 className="name">Ризото с червена киноа и зеленчуци</h2>
                    <p className="description">
                        Ориз "Арборио", сметана, микс от пресни зеленчуци, червена киноа,
                        кедрови ядки, маскарпоне
                    </p>
                    <p className="information">
                        <span className="alergens">/ 7 /</span>
                        <span className="price">400 гр. / 13.90 лв.</span>
                    </p>
                </article>
                <article className="menu-item">
                    <h2 className="name">Паста "Капрезе"</h2>
                    <p className="description">
                        Лингуини, доматен сос, бейби моцарела, чери домати, пармезан, песто
                    </p>
                    <p className="information">
                        <span className="alergens">/ 7, 8 /</span>
                        <span className="price">400 гр. / 11.90 лв.</span>
                    </p>
                </article>
                <article className="menu-item">
                    <h2 className="name">Паста с пеперони и сушени домати</h2>
                    <p className="description">
                        Лингуини, сметана, пеперони, сушени домати, пресен лук, пармезан
                    </p>
                    <p className="information">
                        <span className="alergens">/ 7, 8 /</span>
                        <span className="price">400 гр. / 13.90 лв.</span>
                    </p>
                </article>
                <article className="menu-item">
                    <h2 className="name">Паста с пилешко и спанак</h2>
                    <p className="description">
                        Лингуини, сметана, пилешко, спанак, маскарпоне
                    </p>
                    <p className="information">
                        <span className="alergens">/ 7, 8 /</span>
                        <span className="price">400 гр. / 12.90 лв.</span>
                    </p>
                </article>
                <article className="menu-item">
                    <h2 className="name">Ризото с пиле и гъби</h2>
                    <p className="description">
                        Ориз "Арборио", сметана, пилешко филе, печурка, манатарка, пармезан
                    </p>
                    <p className="information">
                        <span className="alergens">/ 7 /</span>
                        <span className="price">400 гр. / 13.90 лв.</span>
                    </p>
                </article>
                <article className="menu-item">
                    <h2 className="name">Ризото с телешко и сушени домати</h2>
                    <p className="description">
                        Ориз "Арборио", сметана, телешко, сушени домати, печурка, пресен лук,
                        пармезан
                    </p>
                    <p className="information">
                        <span className="alergens">/ 7 /</span>
                        <span className="price">400 гр. / 15.90 лв.</span>
                    </p>
                </article>
            </section>
            <Alergens />
        </>
    )
}