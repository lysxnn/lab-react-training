
function Random({min, max}) {
const randomNumber = Math.round(min + Math.random() * (max-min))

return <>
    <h3>{`Random value between ${min} and ${max} => ${randomNumber}`}</h3>
</>
}

export default Random 
