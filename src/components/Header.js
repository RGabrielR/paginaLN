import header from '../SCSS/header.module.scss';
import Img from '../elements/Img';
import Logo from '../elements/Logo';
import Button from '../elements/Button';

const Header = ({dolar}) => {
  const {dolarBNA, dolarBlue} = dolar;
    return ( 
        <header className='w-100'>
        <section className={`row ac-center jc-center br-bottom ${header.header__top}`}>
          <div className={`container d-flex`}>
            <div className={`col d-none d-lg-flex ${header.header__top__buttonsLeft}`}>
              <Button btn={'secondary'} content='Secciones' svg='/svg/hamburger.svg' classes='mr-4' />
              <Button btn={'secondary'} content='Buscar' svg='/svg/magnifier.svg' />
            </div>
            <div className='col d-flex jc-start jc-lg-center ai-center grow'>
              <Logo classes={`${header.header__top__logo}`} />
            </div>
            <div className={`col d-none d-lg-flex jc-end ${header.header__top__buttonsRight}`}>
              <Button btn={'primary'} content='Suscribite' classes='mr-4' />
              <Button btn={'outline'} content='Ingresar' />
            </div>
            <div className={`col jc-end ai-center d-flex d-lg-none`}>
                <a className='color-light-blue font-bold uppercase mr-4'>
                  Suscribite
                </a>
              <Img src='/svg/magnifier.svg' alt='Buscar'/>
            </div>
          </div>
        </section>
        <section className={`row ac-center jc-center ${header.header__bottom}`}>
          <div className={`container d-flex jc-between`}>
            <div className='col col-lg-4 d-flex jc-start ai-center'>
              <p className='fs-14 font-bold color-light-blue mr-3 d-none d-md-flex'>Dólar: </p>
              <p className='fs-14 font-bold mr-3'>
                <span className='font-normal'>BNA: </span>
               {dolarBNA ? (`$${dolarBNA.compra} / $${dolarBNA.venta}`) : ('$00,00 / $00,00')} 
              </p>
              <p className='fs-14 font-bold'>
                <span className='font-normal'>Blue: </span>
               {dolarBlue ? (`$${dolarBlue.compra} / $${dolarBlue.venta}`) : ('$00,00 / $00,00') } 
              </p>
            </div>
            <div className='col jc-center ai-center d-none d-lg-flex'>
              <Img src='/svg/weather.svg' alt='weather' classes='mr-2' />
              <p className='fs-14'>
                <span className='font-bold mr-1'>00.0°</span>
                Capital Federal
              </p>
            </div>
            <div className='col jc-center ai-center d-none d-lg-flex'>
                <a className='color-light-blue'>
                  Recibí Newsletters
                </a>
            </div>
            <div className='col d-flex jc-end ai-center d-none d-md-flex'>
                <a className='color-light-blue d-flex jc-center ai-center'>
                  <Img src='/svg/club.svg' alt='Club La Nación' classes='mr-2' />
                  Descubrí tus beneficios
                </a>
            </div>
          </div>
        </section>
      </header>
     );
}
 
export default Header;