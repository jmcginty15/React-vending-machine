import { Link } from 'react-router-dom';

const NiceMeme = () => {
    return (
        <div>
            <h3>Make sure your sound is on, and then <a href="http://niceme.me/" target="_blank">click here</a>.</h3>
            <Link to="/">I feel refreshed. Let's go back.</Link>
        </div>
    )
}

export default NiceMeme;