import React, { useEffect } from 'react'
import { useLocation, useParams, useNavigate } from 'react-router-dom';
const NavigatorBot = () => {
    const { state } = useLocation();
    const key = state.key;
    const letter = state.letter;
    const definition = state.definition;
    const word = state.word;
    const navigate = useNavigate();
    useEffect(() => {
        navigate(`/practice/${letter}/${key}`, {
            state: {
                word: word, definition: definition, key: key+1, letter: letter
            }
        })
    })
    return (
        <div>
            
        </div>
    )
}
export default NavigatorBot;