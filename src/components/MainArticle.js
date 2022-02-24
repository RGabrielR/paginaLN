import Img from "../elements/Img";
import Marquee from "../elements/Marquee";
import Tag from "../elements/Tag";
import Title from "../elements/Title";
import header from '../SCSS/headerArticle.module.scss';

const MainArticle = ({article}) => {
    return ( 
        <div className={`relative w-100 ${header.article}`}>
        <Img src={article.img} alt={article.title} classes={`d-block h-100 ${header.article__img}`} />
        <div className={`p-2 absolute w-100 h-100 d-flex flex-col jc-end ai-start ${header.article__title}`}>
          <Tag text={article.tag}/>
          <Title volanta={article.volanta} title={article.title} color={'white'} classes={'fs-24 fs-md-48'} />
          <Marquee text={article.author} classes={`color-white`} />
        </div>
      </div>
     );
}
 
export default MainArticle;