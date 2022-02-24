import imgOnArticles from '../SCSS/imgOnArticles.module.scss';
import Img from './Img';
import Title from './Title';

const AuthorInfo = ({article, fs}) => {
    return ( 
        <article className={`row grow border flex-col jc-evenly ai-center p-3 my-2 ${imgOnArticles.article}`}>
        <Title volanta={article.volanta} title={article.title} classes={`fs-20 text-center ${fs ? `${fs}` : ''}`} />
        <Img src={`/img/${article.author}.jpg`} alt={article.author} classes={`rounded-circle ${imgOnArticles.article__authorImg}`} />
        <p className='text-center font-bold'> {article.author} </p>
    </article>

     );
}
 
export default AuthorInfo;