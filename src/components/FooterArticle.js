import imgOnArticles from '../SCSS/imgOnArticles.module.scss';
import Img from '../elements/Img';
import Marquee from '../elements/Marquee';
import Tag from '../elements/Tag';
import Title from '../elements/Title';
import { useScreenSize, useBreakpoint } from '../methods';

const FooterArticle = ({article}) => {
    let screen = useScreenSize()
    let breakpoint = useBreakpoint(screen)
    return ( 
        <article className='row grow my-1 relative'>
      <Img src={article.img} alt={article.title} classes={`d-block w-100 ${imgOnArticles.article__img}`} />
      <div className={`col-12 col-md-6 h-100 d-flex flex-col jc-end ai-start p-md-3 ${imgOnArticles.article__body}`} >
        {breakpoint != 'S' ? <Tag text={article.tag}/> : ''}
        <div className='bg-white mt-2 p-2 p-md-3'>
          <Title volanta={article.volanta} title={article.title} classes='fs-md-24' />
          <Marquee text={article.author} />
        </div>
      </div>
    </article>
     );
}
 
export default FooterArticle;