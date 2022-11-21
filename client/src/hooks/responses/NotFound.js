import './stylesheet/404.css'

// this animation was used and taken from https://codepen.io/uiswarup/pen/XWdXGGV

export function NotFound () {

  return (

    <><header className="top-header">
    </header>
      <div>
        <div className="starsec"></div>
        <div className="starthird"></div>
        <div className="starfourth"></div>
        <div className="starfifth"></div>
      </div>
      <div className="lamp__wrap">
        <div className="lamp">
          <div className="cable"></div>
          <div className="cover"></div>
          <div className="in-cover">
            <div className="bulb"></div>
          </div>
          <div className="light"></div>
        </div>
      </div>
      <section className="error">
        <div className="error__content">
          <div className="error__message message">
            <h1 className="message__title">Página não encontrada</h1>
          </div>
        </div>

      </section></>
    
  )
}
