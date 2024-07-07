
function ProfilePicture() {

    const imgUrl = './src/assets/profile.jpg';

    const handleClick = (e) => e.target.style.display = "flex";

    return (<img onClick={(e) => handleClick(e)} src={imgUrl} style={{width: 40+'%', aspectRatio: 1/1}}></img>)
}

export default ProfilePicture;