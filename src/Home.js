import { useState } from "react"

const Home = () => {

    const [name, setName]= useState('Suzan')

    const handleClick = (e) =>{
        console.log('clicked',e)
        setName("Burak")
    }
    const handleClickAgain = (name,e) =>{
        console.log('clicked by '+name, e.target)
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{name}</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e)=> handleClickAgain('burak',e)}>Click me again</button>
        </div>
     );
}
 
export default Home;