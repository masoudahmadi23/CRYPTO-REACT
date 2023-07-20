import React from 'react';

import spinner from '../gif/spinner.gif'

const Loading = () => {
    return (
        <div>
            <img src={spinner} alt='spinner' />
            <h1>Landing ...</h1>
        </div>
    );
};

export default Loading;