import Article from "../elements/Article";
import TitleOfSection from "../elements/TitleOfSection";
import { useBreakpoint, useScreenSize } from "../methods";

const FocalRight = ({articles, title}) => {
    let screen = useBreakpoint()
  let breakpoint = useScreenSize(screen)

  return (
    <section className='br-bottom'>
      <TitleOfSection text={title} />
      <div className='row'>
        {articles.map((a, index) => {
          return (
            <div className={`col-12 col-md-6 px-md-2 d-flex flex-column my-3 ${index == 0 && breakpoint != 'S' ? 'br-right' : ''}`} key={index}>
              <Article article={a} fs={index == 0 ? 'fs-md-32' : 'fs-md-24'} />
            </div>
          )
        })}
      </div>
    </section>
  )
}
 
export default FocalRight;