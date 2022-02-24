

const SubHeader = ({text, classes}) => {
    return ( 
        <p className={`${classes || ''}`}> {text} </p>
     );
}
 
export default SubHeader;