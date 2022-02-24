import Article from "../elements/Article";
import { useBreakpoint, useScreenSize } from "../methods";

const FocalLeft = ({articles}) => {
    let screen = useScreenSize()
  let breakpoint = useBreakpoint(screen)
    return (
        <section className='my-4 row w-100 br-bottom'>
          <div className={`col-12 col-md-8 px-md-2 d-flex ai-start my-3 ${breakpoint == 'S' ? '' : 'br-right'}`}>
            {articles.map((a, index) => {
              if(index == 0) {
                return <Article article={a} fs={`fs-md-32`} inverted key={index} />
              }
            })}
          </div>
          <div className={`col-md-4 px-md-2 d-flex flex-col`}>
            {articles.map((a, index) => {
              if(index != 0) {
                return <Article article={a} fs={`fs-md-18`} key={index} />
              }
            })}
          </div>
        </section>
      );
}
 
export default FocalLeft;