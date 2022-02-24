import Img from "./Img";

const Button = ({btn, content, svg, classes}) => {
    return ( 
        <button className={`btn btn-${btn} fw-bold d-flex jc-center ai-center fs-12 ${classes}`} > 
        {content} {svg ? <span className='ml-2'><Img src={svg} alt={content}/></span> : ''}
      </button>
     );
}
 
export default Button;