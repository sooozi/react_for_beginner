//#7.4 Movie App part Two
//proptype 알아보기
import PropTypes from "prop-types";
//movie 컴포넌트가 이 정보들을 parent 컴포넌트로부터 받아온다!
function Movie({coverImg, title, summary, genres }) {
    return (
    <div>
        <img src={coverImg} alt={title} />
        <h2>{title}</h2>
        <p>{summary}</p>
        <ul>
            {genres.map(g => <li key={g}>{g}</li>)}
        </ul>
    </div>)
}

Movie.propTypes = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;