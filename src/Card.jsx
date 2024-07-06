import profilePic from './assets/profile.jpg'

function Card() {


    return (
        <div className="card">
            <img className="card-image" src={profilePic} alt="Profile picture" />
            <h2 className="card-title">Makarii Slupskyi</h2>
            <p className="card-text">I study front-end with back-end and I want to create my own project!</p>
        </div>
    );
}

export default Card;