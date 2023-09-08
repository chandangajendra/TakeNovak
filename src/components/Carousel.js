import React from 'react';
import Left from "./Left"
import Right from "./Right"
import DynamicText from './DynamicText';

const Carousel = ({ img, link, para, css, cssr, dblock, css7, pvisible, p9visible }) => {

    return (
        <>
            <div className="carousel">
                <div className="carousel-left">
                    <Left imgData={img} />
                </div>
                <div className="carousel-right">
                    <Right link={link} pvisible={pvisible} p9visible={p9visible} para={para} css={css} cssr={cssr} dblock={dblock} css7={css7} />
                </div>
            </div>

            <DynamicText />
        </>
    )
}

export default Carousel