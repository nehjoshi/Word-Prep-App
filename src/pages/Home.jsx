import { Button } from '@mui/material';
import React from 'react';
import Letter from '../components/Letter';
import "../styles/home/index.css";
import { useNavigate } from "react-router-dom"
import words from "../words.json";
const Home = () => {

    const Letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const [mode, setMode] = React.useState('learning');
    const navigate = useNavigate();

    const setSelectedLetter = (letter) => {

        const list = words[letter];
        const randomWord = list[Math.floor(Math.random() * list.length)];
        const word = Object.keys(randomWord)[0];
        const definition = Object.values(randomWord)[0];
        console.log(word, definition);

        mode==='learning'?
        navigate(`/learning/${letter}`)
        :
        navigate(`/practice/${letter}/1`, {
            state: {
                word, definition
            }
        })
    }

    const GenerateLetters = () => {
        return Letters.map((letter, index) => {
            return <Letter key={index} text={letter} setSelectedLetter={setSelectedLetter}>{letter}</Letter>
        })
    }

    return (
        <div className="home-wrapper">
            <h1 className="main-heading">Word Preperation</h1>
            <h2 className="main-heading-sub">Choose a letters to get started!</h2>
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