import Logo from "../elements/Logo";
import SocialMedia from "../elements/SocialMedia";
import footer from '../SCSS/footerMobile.module.scss';
import Stores from "../elements/Stores";
import GDA from "../elements/GDA";
import Copyright from "../elements/Copyright";

const FooterMobile = () => {
    return ( 
        <section className={`container w-100 d-flex flex-col jc-between ai-center`}>
        <div className={`row br-bottom ${footer.footer__top}`}>
          <Logo classes={`${footer.footer__top__logo}`} />
        </div>
        <div className={`row jc-around ${footer.footer__bottom}`}>
          <div className={`${footer.footer__bottom__info} d-flex flex-col jc-around`}>
            <div className='row d-flex jc-center ai-center'>
              <SocialMedia/>
            </div>
            <div className='row'>
              <Stores classes='jc-center'/>
            </div>
            <div className='row'>
            <GDA classes='jc-center'/>
            </div>
          </div>
          <div className='d-flex jc-center ai-center'>
            <Copyright/>
          </div>
        </div>
      </section>
     );
}
 
export default FooterMobile;