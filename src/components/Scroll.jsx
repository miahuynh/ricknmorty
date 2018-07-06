import React from 'react';

const Scroll = (props) => {
    return (
        <div className="scroll" style={{borderBottom: '20px'}}>
        <div style={{overflowY: 'scroll', height: '550px'}}>
            {props.children}
        </div>
        </div>
    )
}

export default Scroll;