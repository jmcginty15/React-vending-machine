import { Link } from 'react-router-dom';

const Pikachu = () => {
    return (
        <div>
            <div>
                <img src="https://i.pinimg.com/originals/d8/a7/a9/d8a7a9b8023513bf04c5e68059e415ca.jpg" alt="pikachu-meme" />
            </div>
            <Link to="/">I'm scared. Let's go back.</Link>
        </div>
    )
}

export default Pikachu;