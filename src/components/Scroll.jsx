import React from 'react';

const Scroll = (props) => {
    return (
        <div className="scroll" style={{borderBottom: '20px'}}>
        <div style={{overflowY: 'scroll', border: '1px', height: '800px'}}>
            {props.children}
        </div>
        </div>
    )
}

export default Scroll;