import React from 'react';
import './Button.css'

const Button = ({children}) => {
    return (
        <div>
            <button className="w-44 h-16 bg-blue-400 text-xl font-semibold text-white rounded-2xl">{children}</button>
            
        </div>
    );
};

export default Button;