import { Link } from 'react-router-dom';

const VendingMachine = () => {
    return (
        <div>
            <h2>Hello, I am an Internet vending machine. What is your selection?</h2>
            <p><Link to="/pikachu">Pikachu</Link></p>
            <p><Link to="/nicememe">A Nice Meme</Link></p>
            <p><Link to="/wednesday">Wednesday</Link></p>
        </div>
    )
}

export default VendingMachine;