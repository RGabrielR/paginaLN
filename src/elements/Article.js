import imgOnArticles from "../SCSS/imgOnArticles.module.scss";
import Img from "./Img";
import Marquee from "./Marquee";
import SubHeader from "./SubHeader";
import Title from "./Title";

const Article = ({ article, inverted, fs, color }) => {
  return (
    <article
      className={`row grow my-2 ${
        inverted ? "flex-md-col-reverse" : "flex-col"
      }`}
    >
      {article.img ? (
        <Img
          src={article.img}
          alt={article.title}
          classes={`w-100 ${imgOnArticles.article__img}`}
        />
      ) : (
        ""
      )}
      <div className={`py-1 px-2 grow ${color ? color : ""}`}>
        <Title
          volanta={article.volanta}
          title={article.title}
          classes={`fs-20 ${fs ? `${fs}` : ""}`}
          color={color ? "white" : ""}
        />
        {article.subheader ? (
          <SubHeader
            text={article.subheader}
            classes={color ? "color-white" : ""}
          />
        ) : (
          ""
        )}
        {article.marquee ? (
          <Marquee text={article.author} classes={color ? "color-white" : ""} />
        ) : (
          ""
        )}
      </div>
    </article>
  );
};

export default Article;
