import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import "./index.css";
const MathFunctionJSX = () => {
  return (
    <div className='math-container'>
        <p>
            Fun Fact:
        </p>
        <p>
            Every time you hit refresh, it’s like spinning a cosmic roulette wheel, new star 
            patterns scatter across your screen, as if the universe is sketching doodles just 
            for you. Imagine, with each pixel shift in your screen’s width, a whole new infinite 
            gallery of celestial art opens up. It's kind of wild to think that the pattern you see
            might be a once-in-a-lifetime deal. So, take a moment to soak it in. Once it's     
            gone, it might just be gone for good... or maybe, in the grand scheme of things, 
            it’s out there waiting to be seen again. Life’s fleeting like that, giving us brief 
            snapshots of beauty to hold onto before they slip through our fingers.
        </p>

        <p>
            Mathematical Description of the Stars for sceens between 1537px and 1920px:
        </p>
        {/* <MathDisplay a={1664525} Xn={1} c={1013904223} m={2**32} /> */}
        <BlockMath math={String.raw`
            \text{Let } R(i) \text{ be the random number generated at index } i \text{ in the array } R
        \\R = X_{n+1} = (a \cdot X_n + c) \mod m
      `} />
        <InlineMath math={String.raw`
            \text{heightAdjustment}(w) = \begin{cases} 
            200 & \text{if } w \ge  max \\
            1.5 \cdot (w - min) & \text{if } min \leq w < max \\
            0 & \text{otherwise}
            \end{cases}
        `} />
            <InlineMath math={String.raw`
            \sum_{i=0}^{999} \text{top}_i = \sum_{i=0}^{999} R(i) \cdot (600 + \text{heightAdjustment}(w))
        `} />
        
        <p></p>
            
        <p>Each breakpoint has a new function...</p>

        <p>The moons in the planet will also forever rearrange but why learn the same lesson twice ...</p>
        <button onClick={(e)=>{document.getElementsByClassName('math-container')[0].setAttribute('style', "display:none")}}>Close</button>
    </div>
  );
};

export default MathFunctionJSX;
