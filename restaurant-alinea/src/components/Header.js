import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <>
      <header>
        <Link to="/">
          <div className="logo">
            <span>
              <img src="/images/alinea-logo.jpg" alt="" />
            </span>
          </div>
        </Link>
        
        <div className="heading">
          <h1 className="main-heading-name">Alinea.</h1>
          <h1 className="second-heading-name">Chef's Choice</h1>
          <p>
            Добре дошли в ресторант Alinea, сърцето на Асеновград. При нас може да
            опитате вкусни специалитети, десерти по авторски рецепти и нашите
            домашни лимонади със 100 % сок от плодове. Тук ще се потопите в изискана
            атмосфера с прекрасно обслужване, което ще ви накара да се чувствате
            наистина специални.
          </p>
        </div>
      </header>
    </>
  )
}