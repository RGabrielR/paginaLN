import Img from "./Img";

const Logo = ({classes}) => {
    return ( 
        <Img src='/svg/logo.svg' alt='Logo ' classes={`${classes}`} />
     );
}
 
export default Logo;