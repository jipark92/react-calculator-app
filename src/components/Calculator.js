import {useState,useEffect} from 'react'

export default function Calculator() {

    const [operandA,setOperandA] = useState("")
    const [operator,setOperator] = useState("")
    const [operandB,setOperandB] = useState("")


    const [prevDisplay, setPrevDisplay] = useState("")
    const [currDisplay, setCurrDisplay] = useState("")

    useEffect(()=>{
        setPrevDisplay(operandA)
        console.log(operandA)
    },[operandA])

    const handleOperands = (e) => {
        if(!operator){
            setOperandA(operandA=>operandA += e.target.value)
        }
    }

    const handleOperator = (e) => {

    }

    return (
        <div className="calculator-container">
            <div className="calculator">
                <div className="display">
                    <div className="previous-display">{prevDisplay}</div>
                    <div className="current-display">{currDisplay}</div>
                </div>
                <div className="btns-container">
                    <button onClick={handleOperands} value="1">1</button>
                    <button onClick={handleOperands} value="2">2</button>
                    <button onClick={handleOperands} value="3">3</button>
                    <button onClick={handleOperator} value="-">-</button>
                    <button onClick={handleOperands} value="4">4</button>
                    <button onClick={handleOperands} value="5">5</button>
                    <button onClick={handleOperands} value="6">6</button>
                    <button onClick={handleOperator} value="+">+</button>
                    <button onClick={handleOperands} value="7">7</button>
                    <button onClick={handleOperands} value="8">8</button>
                    <button onClick={handleOperands} value="9">9</button>
                    <button onClick={handleOperator} value="*">*</button>
                    <button onClick={handleOperands} value="0">0</button>
                    <button onClick={handleOperands} value=".">.</button>
                    <button>DEL</button>
                    <button onClick={handleOperator} value="/">/</button>
                    <button className='equal-btn'>=</button>
                    <button className="clear-btn">CLEAR</button>
                </div>
            </div>
        </div>
    )
}