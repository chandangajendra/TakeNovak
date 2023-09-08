import React, { useState } from 'react';
import "../com_css/leftStyle.css";

const Left = ({ imgData }) => {

    return (
        <>
            <div className="image-left" >
                <img src={imgData} alt="image" />
            </div>
        </>
    )
}

export default Left