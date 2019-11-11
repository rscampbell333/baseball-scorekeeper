import React from 'react';
import './BaseballField.css';

export const BaseballField = ({farthestBase = 0, onBaseClick}) => {
    const getBaseClass = (base) => base <= farthestBase ? 'base reached' : 'base'; 

    const handleBaseClick = (event) => {
        onBaseClick(parseInt(event.target.id));
    }

    return <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 230 180">
        <g className="infield" transform="matrix(-0.7,-0.7,0.7,-0.7,115,180)">
            <path className="dirt" d="M 0 0 L 160 0 A 160 140 45 0 1 0 160 L 0 0"/>
            <g className="bases">
                <rect className="grass" y="0" width="100px" height="100px" x="0" />
                { farthestBase >= 1 && <line x1="2" y1="18" x2="2" y2="80" className="base-line reached"/> }
                { farthestBase >= 2 && <line x1="20" y1="98" x2="80" y2="98"  className="base-line reached"/> }
                { farthestBase >= 3 && <line x1="98" y1="18" x2="98" y2="80"  className="base-line reached"/> }
                { farthestBase >= 4 && <line x1="80" y1="2" x2="18" y2="2"  className="base-line reached"/> }
                <rect id="1" name="first" className={getBaseClass(1)} x="0" y="80" onClick={handleBaseClick}/>
                <rect id="2" name="second" className={getBaseClass(2)} x="80" y="80" onClick={handleBaseClick}/>
                <rect id="3" name="third" className={getBaseClass(3)} x="80" y="0" onClick={handleBaseClick}/>
                <polygon id="4" name="home" className={getBaseClass(4)} points="0,0 18,0 26,8 8,26 0,18 0,0" fill="white" onClick={handleBaseClick}/>
            </g>
        </g>
    </svg>;
}