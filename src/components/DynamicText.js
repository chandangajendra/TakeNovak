import React, { useState, useEffect } from 'react';
import '../com_css/Typewriter.css';
import TypeWriter from './TypeWriter';

const DynamicText = () => {
    // for applying typewriting just pass the html as string NOTE only inline css will work
    let string = `
    <div style="font-size: 1.2em;margin: 28px 38px; color: #d0cedb;"> 
         <div>"The craziest goddamn thing I've read in a long time."</div>
         <div>~Alexander Payne</div>
         <div>Academy-Award winning writer/director of Sideways and The Descendants</div>
    </div> 
    <div style="font-size: 1.2em;margin: 28px 38px; color: #d0cedb;">
        <div>" Strange genius mixed with stomach-turning madness."</div>
        <div>~Matt Greenberg</div>
        <div>screenwriter of 1408 and Pet Sematary</div>
    </div>
    <div  style="font-size: 1.2em;margin: 28px 38px; color: #d0cedb;">
        <div>"I'm sniffing a breakthrough. It's like Bret Easton Ellis and Philip K. Dick had a baby, and the baby wrote a book. "</div>
        <div>~Jerry Stahl</div>
        <div>author of Permanent Midnight and Bad Sex on Speed</div>
    </div>
   <div  style="font-size: 1.2em;margin: 28px 38px; color: #d0cedb;">
       <div>"So successfully strange it's almost its own genre. Holding a mirror, if not a hall of mirrors to our culture where we disappear and find ourselves at the same time."</div>
       <div>~Aris Janigan</div>
       <div>author of Waiting for Lipchitz at Chateau Marmont</div>
   </div>
   <div  style="font-size: 1.2em;margin: 28px 38px; color: #d0cedb;">
       <div>"Adam Novak has a merciless eye for a society in which striving replaces every consideration of morality."</div>
       <div>~Michael Tolkin</div>
       <div>author of The Player</div>
  </div>`;

    return (
        <>
            <TypeWriter text={string} />
        </>
    );
}

export default DynamicText