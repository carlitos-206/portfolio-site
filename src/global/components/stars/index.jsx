import React from "react";
import starImg from "../../images/landingPage/blackStar.png";

// this function hold the stars background of the site. 
// it has been modified for various screen sizes
// concept is simple:
//    Check for screen width
//    randomly place a star img in the screen with given params
//    star width is randomly given also
//    on refresh a new deployment is done
// meaning you might never see the same pattern again making each pattern brand new everytime
export default function Stars({screenInfo}){
  console.log(`
    W: ${screenInfo.width}
    H: ${screenInfo.height}

  `)
  let array = []
  // function to give random output
  function random(min, max) {
    return min + Math.random() * (max + 1 - min);
  }
  // Small mobile devices
  if(screenInfo.width>=360 && screenInfo.width<390){
    let heightAdjustment = (screenInfo.width - 360)*3
    console.log(heightAdjustment)
    for(let i = 0; i < 1000; i++){
      let item = <img src={starImg} key={i} alt='*' className='stars' id={`star_${i}`} style={{
        width: `${random(0,15)}px`,
        position: 'relative',
        top: `${random(0, 100)}px`,
        zIndex: '-4'
      }
      } />
      array.push(item)
    }
  }
  // Medium Mobile Screens
  else if(screenInfo.width>=390 && screenInfo.width<412){
    let heightAdjustment = (screenInfo.width - 360)*3
    console.log(heightAdjustment)
    for(let i = 0; i < 1000; i++){
      let item = <img src={starImg} key={i} alt='*' className='stars' id={`star_${i}`} style={{
        width: `${random(0,15)}px`,
        position: 'relative',
        top: `${random(0, 310)}px`,
        zIndex: '-4'
      }
      } />
      array.push(item)
    }
  }
  // Large Mobile Screens 
  else if(screenInfo.width>=412 && screenInfo.width<540){
    let heightAdjustment = (screenInfo.width - 360)*3
    console.log(heightAdjustment)
    for(let i = 0; i < 1000; i++){
      let item = <img src={starImg} key={i} alt='*' className='stars' id={`star_${i}`} style={{
        width: `${random(0,15)}px`,
        position: 'relative',
        top: `${random(0, 520)}px`,
        zIndex: '-4'
      }
      } />
      array.push(item)
    }
  }
     // EDGECASE --- SURFACE DUO TABLET
    else if(screenInfo.width === 540){
      let heightAdjustment = (screenInfo.width - 540)
      console.log(heightAdjustment)
      for(let i = 0; i < 1000; i++){
        let item = <img src={starImg} key={i} alt='*' className='stars' id={`star_${i}`} style={{
          width: `${random(0,15)}px`,
          position: 'relative',
          top: `${random(0, 800)}px`,
          zIndex: '-4'
        }
        } />
        array.push(item)
      }
    } 
   // This is for med tablets
  else if(screenInfo.width>540 && screenInfo.width<=768){
    let heightAdjustment = (screenInfo.width - 540)
    console.log(heightAdjustment)
    for(let i = 0; i < 1000; i++){
      let item = <img src={starImg} key={i} alt='*' className='stars' id={`star_${i}`} style={{
        width: `${random(0,15)}px`,
        position: 'relative',
        top: `${random(0, 2050+heightAdjustment)}px`,
        zIndex: '-4'
      }
      } />
      array.push(item)
    }
  } 
   // This is for large tablets
  else if(screenInfo.width>=768 && screenInfo.width<=1024){
    let heightAdjustment = (screenInfo.width - 768)*3
    console.log(heightAdjustment)
    for(let i = 0; i < 1000; i++){
      let item = <img src={starImg} key={i} alt='*' className='stars' id={`star_${i}`} style={{
        width: `${random(0,15)}px`,
        position: 'relative',
        top: `${random(0, 2250+heightAdjustment)}px`,
        zIndex: '-4'
      }
      } />
      array.push(item)
    }
  } 
   // This is for med monitors
  else if(screenInfo.width>=1025 && screenInfo.width<=1536){
    let heightAdjustment = (screenInfo.width - 1025)
    if(screenInfo.width === 1536){
      heightAdjustment = 1200
    }
    for(let i = 0; i < 1000; i++){
      let item = <img src={starImg} key={i} alt='*' className='stars' id={`star_${i}`} style={{
        width: `${random(0,15)}px`,
        position: 'relative',
        top: `${random(0, 350+heightAdjustment)}px`,
        zIndex: '-4'
      }
      } />
      array.push(item)
    }
  } 
    // This is for larger monitors
  else if(screenInfo.width>=1537){
    let heightAdjustment = (screenInfo.width - 1537)*1.5
    if(screenInfo.width === 1920){
      heightAdjustment = 200
    }
    for(let i = 0; i < 1000; i++){
      let item = <img src={starImg} key={i} alt='*' className='stars' id={`star_${i}`} style={{
        width: `${random(0,15)}px`,
        position: 'relative',
        top: `${random(0, 600+heightAdjustment)}px`,
        zIndex: '-4'
      }
      } />
      array.push(item)
    }
  }
  return(
    <div className="starContainer" style={{zIndex:'0'}}>
      {array.map(item => item)}
    </div>
  )
}