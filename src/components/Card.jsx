import PropTypes from 'prop-types' 
import profilePic from '../assets/profile.jpg'

function Card(props) {
    return (
        <div className="card">
            <img className="card-image" src={profilePic} alt="Profile picture" />
            <h2 className="card-title">{props.title}</h2>
            <p className="card-text">I study front-end with back-end and I want to create my own project!</p>
        </div>
    );
}

Card.propTypes = {
    title: PropTypes.string,
    about: PropTypes.string,
}

Card.defaultProps = {
    title: "Guest",
}

export default Card;