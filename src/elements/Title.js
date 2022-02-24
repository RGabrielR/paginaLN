
const Title = ({volanta, title, color, classes}) => {
    return (  
        <h3 className={`my-2 ${color ? `color-${color}` : ''} ${classes || ''}`}>
        <span className={`${color ? `color-${color}` : 'color-light-blue'}`}> { volanta } </span>
        { title }
      </h3>
    );
}
 
export default Title;