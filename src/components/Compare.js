import React from 'react';
import Banks from './Banks';

const Compare = () => {
    return (
        <div id="compareContainer">
            <div id="compareTitle">
                <h3>Our Partners</h3><hr/>
            </div>
            <div id="partners">
                <Banks />
            </div>
        </div>
    );
}

export default Compare;