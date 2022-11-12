import styles from "../AppStyle.module.css";
import { Link } from "react-router-dom";

function Movie({ id, rank, year, img, title, summary }) {
  return (
    <li>
      <article>
        <div className={styles.liHead}>
          <span>❤ {rank}</span>
          <span>{year}</span>
        </div>
        <figure>
          <img src={img} alt={title} />
        </figure>
        <strong>{title}</strong>
        <p>{summary}</p>
      </article>
      <Link to={`/movie/${id}`}>View More</Link>
    </li>
  );
}
export default Movie;
