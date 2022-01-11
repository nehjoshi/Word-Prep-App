import { Button } from '@mui/material';
import React from 'react';
import Letter from '../components/Letter';
import "../styles/home/index.css";
import words from "../words.json";
import { useNavigate } from "react-router-dom"
const Home = () => {

    const Letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const [selectedLetter, setLetter] = React.useState('');
    const [mode, setMode] = React.useState('learning');
    const navigate = useNavigate();

    const setSelectedLetter = (letter) => {
        const l = words[letter].length;
        const randomIndex = Math.floor(Math.random() * l);
        console.log(words[letter][randomIndex]);
        setLetter(letter);
        navigate(`/learning/${letter}`);
    }

    const GenerateLetters = () => {
        return Letters.map((letter, index) => {
            return <Letter key={index} text={letter} setSelectedLetter={setSelectedLetter}>{letter}</Letter>
        })
    }

    return (
        <div className="home-wrapper">
            <h1>Word Preperation</h1>
            <h2>Choose a letter to get started!</h2>
            <div className="letter-wrapper">
                {GenerateLetters()}
            </div>
            <div className="button-wrapper">
                <Button
                    variant="outlined"
                    size='large'
                    style={{ margin: "0px 20px", backgroundColor: mode === 'learning' ? "#02a0a8" : "#fff", color: mode === 'learning' ? "#ffffff" : "" }}
                    onClick={() => setMode('learning')}>Learning Mode</Button>
                <Button
                    variant="outlined"
                    size='large'
                    style={{ margin: "0px 20px", backgroundColor: mode === 'practice' ? "#02a0a8" : "#fff", color: mode === 'practice' ? "#ffffff" : "" }}
                    onClick={() => setMode('practice')}>Practice Mode</Button>
            </div>
        </div>
    )
}
export default Home;