import React from 'react';
import Letter from '../components/Letter';
import "../styles/home/index.css";

const Home: React.FC = () => {

    const Letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const [selectedLetter, setLetter] = React.useState('');

    const setSelectedLetter = (letter: string) => {
        console.log(letter);
        setLetter(letter);
    }

    const GenerateLetters = () => {
        return Letters.map((letter: string, index: number) => {
            return <Letter key={index} text={letter} setSelectedLetter={setSelectedLetter}>{letter}</Letter>
        })
    }

    return (
        <div className="home-wrapper">
            <h1>Hello there</h1>
            <h2>Choose a letter to get started!</h2>
            <div className="letter-wrapper">
                {GenerateLetters()}
            </div>
        </div>
    )
}
export default Home;