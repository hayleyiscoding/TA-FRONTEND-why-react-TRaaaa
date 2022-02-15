import { FaClock } from "react-icons/fa";
import Article from "./Article";

let articleData = [
  {
    date: "December 22, 2017",
    title: "How to find the perfect workspace",
    description: "lorem ipsum lorem ipsum lorem ipsum",
    buttonText: "Read Now",
  },
  {
    date: "December 22, 2017",
    title: "How to find the perfect workspace",
    description: "lorem ipsum lorem ipsum lorem ipsum",
    buttonText: "Read Article",
  },
  {
    date: "December 22, 2017",
    title: "How to find the perfect workspace",
    description: "lorem ipsum lorem ipsum lorem ipsum",
    buttonText: "Read Article",
  },
  {
    date: "December 22, 2017",
    title: "How to find the perfect workspace",
    description: "lorem ipsum lorem ipsum lorem ipsum",
    buttonText: "Read Article",
  },
];

function Blog() {
  return (
    <>
      <section className='blog padding'>
        <div className='container'>
          <header className='sec-header text-center'>
            <h2 className='heading'>Our Blog</h2>
            <div className='dot-wrapper'>
              <div className='dot'></div>
              <div className='dot'></div>
              <div className='dot'></div>
            </div>
          </header>
          <div className='flex wrap'>
            {articleData.map((article) => {
              return (
                <Article
                  date={article.date}
                  title={article.title}
                  description={article.description}
                  buttonText={article.buttonText}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
