import { Button, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import words from "../words.json";


const Practice = () => {
    const { state } = useLocation();
    const [loading, setLoading] = React.useState(true);
    const [word, setWord] = React.useState();
    const [definition, setDefinition] = React.useState();
    const key = parseInt(useParams().key);
    const letter = useParams().letter;
    const navigate = useNavigate();
    useEffect(() => {
        setWord(state.word);
        setDefinition(state.definition);
        setLoading(false);
    }, [])

    const handleClick = () => {
        const list = words[letter];
        let randomWord;
        let newWord = word;
        while (newWord === word) {
            randomWord = list[Math.floor(Math.random() * list.length)];
            newWord = Object.keys(randomWord)[0];
        }
        const newDefinition = Object.values(randomWord)[0];
        console.log(newWord, newDefinition);

        navigate(`/navigator`, {
            state: {
                word: newWord, definition: newDefinition, key: key + 1, letter: letter
            }
        })
    }

    return (
        <div className="practice-wrapper">
            <h1>Practice words starting with A</h1>
            <div className="practice-container">
                <h4>What is the meaning of <br />{word}?</h4>
                <div className="practice-footer">
                    <Accordion >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>View Answer</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                {definition}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
            <Button variant="contained" size="large" style={{ margin: "0 auto" }} onClick={handleClick} color="primary">Next</Button>
        </div>
    )
}
export default Practice;
