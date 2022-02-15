import { FaClock } from "react-icons/fa";

function Article(props) {
  return (
    <article className='flex article flex-48'>
      <div className='flex-40 font-0'>
        <img
          className='flexible-img'
          src='images/blog-image1.jpg'
          alt='Blog  1'
        />
      </div>

      <div className='flex-60 article-content'>
        <time datetime=''>
          <FaClock />
          &nbsp;{props.date}
        </time>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <a className='btn btn-tertiary' href='#1'>
          {props.buttonText}
        </a>
      </div>
    </article>
  );
}

export default Article;
