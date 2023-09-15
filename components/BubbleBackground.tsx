import React from 'react';

const NUMBER_OF_BUBBLES = 75;
export const getRandomInt = (min, max) => {
    const minCeiling = Math.ceil(min);
    const maxFloor = Math.floor(max);
    return Math.floor(Math.random() * (maxFloor - minCeiling + 1)) + minCeiling;
};
const BubbleBackground = () => {
    return (
        <div style={{top: '0', bottom: '100vh', left: '0', right: '100vw', position: 'fixed'}}>
            {Array.from(Array(NUMBER_OF_BUBBLES).keys()).map(x => <div
                className={`bubble x${getRandomInt(1, 10)}`}
                style={{translate: `${getRandomInt(-50, 50)}vw 0`, animationDelay: `-${getRandomInt(0, 20)}s`}}
            />)}
        </div>
    )
};

export default BubbleBackground;