
const Img = ({src, alt, classes}) => {
    return ( 
        <img src={src} alt={alt} className={classes || ''} />
     );
}
 
export default Img;