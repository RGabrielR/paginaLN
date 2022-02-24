const Captcha = ({links}) => {
    return ( 
        <>
        <p className='w-auto mr-3'>Protegido por reCAPTCHA:</p>
        {links.map((link, index) => {
          return (
              <a className='color-light-blue mr-3 w-auto'>{link}</a>
          )
        })}
        </>
     );
}
 
export default Captcha;