import React from 'react';
import './BaseballField.css';

export const BaseballField = ({bases, onBaseClick}) => {
    const getBaseClass = (reached) => reached ? 'base reached' : 'base'; 

    return <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 230 180">
        <g className="infield" transform="matrix(-0.7,-0.7,0.7,-0.7,115,180)">
            <path className="dirt" d="M 0 0 L 160 0 A 160 140 45 0 1 0 160 L 0 0"/>
            <g className="bases">
                <rect className="grass" y="0" width="100px" height="100px" x="0" />
                { bases[0].reached && <line x1="2" y1="18" x2="2" y2="80" className="base-line reached"/> }
                { bases[1].reached && <line x1="20" y1="98" x2="80" y2="98"  className="base-line reached"/> }
                { bases[2].reached && <line x1="98" y1="18" x2="98" y2="80"  className="base-line reached"/> }
                { bases[3].reached && <line x1="80" y1="2" x2="18" y2="2"  className="base-line reached"/> }
                <rect id="1" name={bases[0].name} className={getBaseClass(bases[0].reached)} x="0" y="80" width="20px" height="20px" fill="white" onClick={onBaseClick}/>
                <rect id="2" name={bases[1].name} className={getBaseClass(bases[1].reached)} x="80" y="80" width="20px" height="20px" fill="white" onClick={onBaseClick}/>
                <rect id="3" name={bases[2].name} className={getBaseClass(bases[2].reached)} x="80" y="0" width="20px" height="20px" fill="white" onClick={onBaseClick}/>
                <polygon id="4" name={bases[3].name} className={getBaseClass(bases[3].reached)} points="0,0 18,0 26,8 8,26 0,18 0,0" fill="white" onClick={onBaseClick}/>
            </g>
        </g>
    </svg>;
}