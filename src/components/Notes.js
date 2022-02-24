import TitleOfSection from "../elements/TitleOfSection";
import Article from "../elements/Article";
import AuthorInfo from "../elements/AuthorInfo";

const Notes = ({articles, title, articleWidth, color}) => {
    return ( 
        <section className='br-bottom'>
        <TitleOfSection text={title} />
        <div className='row'>
          {articles.map((a, index) => {
              return (
                <div key={index} className={`col-12 px-md-2 d-flex flex-col ${articleWidth}`}>
                  {a.authorImg ? <AuthorInfo article={a} /> : <Article article={a} color={color}/>}
                </div>
              )
          })}
        </div>
      </section>
     );
}
 
export default Notes;