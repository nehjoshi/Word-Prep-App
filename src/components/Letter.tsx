import React from "react";

interface Props {
    text: string;
    setSelectedLetter: (letter: string) => void;
}
const Letter: React.FC <Props> = (Props) => {
    return (
        <div className="letter" onClick={() => Props.setSelectedLetter(Props.text)}>
            <h4>{Props.text}</h4>
        </div>
    )
}
export default Letter;