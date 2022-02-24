import TitleOfSection from "../elements/TitleOfSection";
import ListArticle from "../elements/ListArticle";

const MostRead = ({articles, title}) => {
    return ( 
        <section className='br-bottom'>
        <TitleOfSection text={title} />
        <div className='row'>
          {articles.map((a, index) => {
              return (
                <div key={index} className={`col-12 px-md-2 d-flex flex-col col-md-3`}>
                    <ListArticle article={a} fs='fs-md-18' listItem={index + 1} />
                </div>
              )
          })}
        </div>
      </section>
     );
}
 
export default MostRead;