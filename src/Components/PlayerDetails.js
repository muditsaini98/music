import React from 'react'

const PlayerDetails = (props) => {
    return (
        <div>
            <div>
                <img src={props.imge.imag} alt='song' id='songimg'/>
            </div>
            <h3 className='songname'>{props.imge.song}</h3>
            <p className='songartist'>By : {props.imge.artist}</p>
        </div>
    )
}

export default PlayerDetails;
