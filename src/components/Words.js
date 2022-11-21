import React from 'react'
import { useParams } from 'react-router-dom'

export default function Words(props) {
    const {word, color, back} = useParams()

    return (
        <div>
            {isNaN(word) ? 
            <h5 style={ color ? 
                            {color: color, backgroundColor: back} 
                        : 
                            null
                        }>{word}
                    </h5>
                :
                <h5>{word}</h5>
            }
        </div>
    )
}
