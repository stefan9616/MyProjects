export const Footer = () => {
    return (
        <>
            <section className="footer">
                <footer>
                    <div className="info">
                        <h1 id="contacts">Контакти</h1>
                        <p>Гр.Асеновград ул.Трети Март 9</p>
                        <p>Телефон: +359 886 894 828</p>
                    </div>
                    <a href="https://www.facebook.com/profile.php?id=100092984575732">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width={100}
                            height={100}
                            viewBox="0 0 50 50"
                        >
                            <path d="M42,3H8C5.2,3,3,5.2,3,8v34c0,2.8,2.2,5,5,5h34c2.8,0,5-2.2,5-5V8C47,5.2,44.8,3,42,3z M37,19h-2c-2.1,0-3,0.5-3,2v3h5 l-1,5h-4v16h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z"></path>
                        </svg>
                    </a>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width={100}
                        height={100}
                        viewBox="0 0 50 50"
                    >
                        <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
                    </svg>
                </footer>
                <iframe
                    className="location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2964.7890480519936!2d24.87148947658924!3d42.004802657471046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14acd926039bb849%3A0x96a2123732e1a2d0!2sAlinea.%20Chef's%20Choice!5e0!3m2!1sbg!2sbg!4v1713472993297!5m2!1sbg!2sbg"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </section>
        </>
    )
}