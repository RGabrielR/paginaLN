import Img from "./Img";
import SMIcons from '../SCSS/SMIcons.module.scss';

const SocialMedia = () => {
    let networks = [
        'facebook',
    'twitter',
    'instagram',
    'rss'
    ]
    return ( 
        <>
      {networks.map((n, index) => {
        return <div className={`${SMIcons.social} col d-flex jc-center ai-center`} key={index}>
          <Img src={`/svg/${n}.svg`} alt={n} classes={`${SMIcons.socialItem}`}/>
          </div>
      })}
    </>
     );
}
 
export default SocialMedia;