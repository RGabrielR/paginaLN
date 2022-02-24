import Img from "./Img";

const Stores = ({classes}) => {
    return ( 
        <div className={`col d-flex ai-center ${classes}`}>
            <a className='mx-3'>
              <Img src={'https://arc-static.glanacion.com/pf/resources/images/android-store.svg?d=706'} alt='Download in Google Store' />
            </a>
            <a className='mx-3'>
              <Img src={'https://arc-static.glanacion.com/pf/resources/images/ios-store.svg?d=706'} alt='Download in Google Store' />
            </a>
        </div>
     );
}
 
export default Stores;