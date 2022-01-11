import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import words from "../words.json";
import "../styles/learning/index.css";
import Definition from '../components/Definition';

const Learning = (props) => {

    const [loading, setLoading] = React.useState(true);
    const [allWords, setAllWords] = React.useState();
    const [renderElements, setRenderElements] = React.useState([]);
    const slug = useParams().letter;

    useEffect(() => {
        setAllWords(words[slug]);
        console.log(words[slug]);
        const list = words[slug];
        const elements = [];
        let i=1;
        list.map((item, index) => {
            elements.push(<Definition count={i} word={Object.keys(item)} definition={Object.values(item)}/>)
            i++;
        })
        setRenderElements(elements);
        setLoading(false);
    }, [])

    return loading ? (
        <h1>Loading...</h1>
    ) :
        (
            <div className="learning-wrapper">
                <h1>Words starting with {slug}</h1>
                <ol className="container">
                    {renderElements}
                </ol>
            </div>
        )
}
export default Learning;