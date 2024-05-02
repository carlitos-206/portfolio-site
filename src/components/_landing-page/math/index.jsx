import React from 'react';
import { InlineMath } from 'react-katex';
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
            here is the math behind the stars
        </p>
        <p>
            <InlineMath math={String.raw`
                \\n = 999
                \\w = ScreenWidth
                \\h = ScreenHeight
                \\m = 2^{32}
                \\
                `} />
        </p>

        <p>
            <InlineMath math={String.raw`
                        \\f'''(min,max) = \left\lfloor min + \left(\frac{X_i}{m}\right) \times (max - min + 1) \right\rfloor

                        `} />
        </p>
        <br />
        <p>
            <InlineMath math={String.raw`
                f''(star_i) = \begin{cases} 
                width & :f'''(1,15) \\
                top & :f'''(0,h) \\
                left & :f'''(0,w) \\
                \end{cases}
                `} />
        </p>
        <br />

        <p>
            <InlineMath math={String.raw`
                \\ f'(position)=\sum_{i=0}^{n}f''(star_i)
                `} />
        </p>
        <button onClick={(e)=>{
            document.getElementsByClassName('math-container')[0].setAttribute('style', "display:none")
        }}>Close</button>
    </div>
  );
};

export default MathFunctionJSX;
