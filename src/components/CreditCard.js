import React from 'react'

function CreditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {

    // for (let i = 0; i < number.length; i++) {
    //     if (i <= 12 ) {
    //         number[i]= "*";
    //     }
    // }
    console.log({number});

  return (

    <div style={{backgroundColor: `${bgColor}`, borderRadius: "15px" , padding: "2vw", width: "33vw", height: "10vh"}}>
        <div style={{display: "flex",  justifyContent: "flex-end", padding: "2.5vw 0"}} >{type}</div>
        <div style={{display: "flex",  justifyContent: "flex-end", flexDirection: "row", padding: "0vw 0"}}>
              <div style={{display: "flex",  justifyContent: "flex-end", flexDirection: "row", padding: "0vw 1vw", color:`${color}`}}>
                <span className={`text-5xl text-${color}`}> •</span>
                <span className={`text-5xl text-${color}`}> •</span>
                <span className={`text-5xl text-${color}`}> •</span>
                <span className={`text-5xl text-${color}`}> •</span>
              </div>
              <div style={{display: "flex",  justifyContent: "flex-end", flexDirection: "row", padding: "0vw 1vw", color:`${color}`}}>
                <span className={`text-5xl text-${color}`}> •</span>
                <span className={`text-5xl text-${color}`}> •</span>
                <span className={`text-5xl text-${color}`}> •</span>
                <span className={`text-5xl text-${color}`}> •</span>
              </div>
              <div style={{display: "flex",  justifyContent: "flex-end", flexDirection: "row", padding: "0vw 1vw", color:`${color}`}}>
                <span className={`text-5xl text-${color}`}> •</span>
                <span className={`text-5xl text-${color}`}> •</span>
                <span className={`text-5xl text-${color}`}> •</span>
                <span className={`text-5xl text-${color}`}> •</span>
              </div>
              <div style={{display: "flex",  justifyContent: "flex-end", flexDirection: "row", padding: "0vw 1vw", color:`${color}`}}>
                <span className={`text-${color} text-lg pt-2 font-bold`}>
                  {number.slice(-4)}
                </span>
              </div>
            </div>
        <div style={{display: "flex",  justifyContent: "flex-start", color:`${color}`}}>{`Expires ${expirationMonth}/${expirationYear} ${bank}`}</div>
        <div style={{display: "flex",  justifyContent: "flex-start", color:`${color}`}}>{owner}</div>
    </div>
  )
}

export default CreditCard
