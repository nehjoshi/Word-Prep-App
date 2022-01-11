import React from 'react'

interface Props {
    count: number,
    word: string,
    definition: string,
}

const Definition: React.FC<Props> = (Props) => {
    console.log(Props);
    return (
        <div className="def-wrapper">
            <p>{Props.count}. {Props.word}: {Props.definition}</p>
        </div>
    )
}
export default Definition;