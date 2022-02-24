

const Marquee = ({text, classes}) => {
    return ( 
        <p className={`fs-14 fw-bold my-2 ${classes || ''}`}> Por {text} </p>
     );
}
 
export default Marquee;