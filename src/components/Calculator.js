import {useState,useEffect} from 'react'

export default function Calculator() {
    //storage useState
    const [operandA,setOperandA] = useState("")
    const [operator,setOperator] = useState("")
    const [operandB,setOperandB] = useState("")
    const [total, setTotal] = useState("")
    //display useState
    const [prevDisplay, setPrevDisplay] = useState(`${operandA} ${operator} ${operandB}`)
    const [currDisplay, setCurrDisplay] = useState(`${total}`)
    //render display
    useEffect(()=>{
        setPrevDisplay(`${operandA} ${operator} ${operandB}`)
        // console.log(operandA,'a')
        // console.log(operator,'op')
        // console.log(operandB,"b")
        setCurrDisplay(`${total}`)
        
    },[operandA,operator,operandB,total])
    //operands button function
    const handleOperands = (e) => {
        //prevent changing value
        if(total){
            return
        }
        if(!operator){
            setOperandA(operandA=>operandA += e.target.value)
        }  else if(operator){
            setOperandB(operandB=>operandB += e.target.value)
        } 
    }
    //operators button function
    const handleOperator = (e) => {
        if(!operator){
            setOperator(operator =>operator += e.target.value)
        }
    }
    //equal/total button function
    const handleTotal = () => {
        if(operator.includes('-')){
            setTotal(total=>total = parseFloat(operandA) - parseFloat(operandB))
        } else if(operator.includes('+')){
            setTotal(total=>total = parseFloat(operandA) + parseFloat(operandB))
        } else if(operator.includes('/')){
            setTotal(total=>total = parseFloat(operandA) / parseFloat(operandB))
        } else if(operator.includes('*')){
            setTotal(total=>total = parseFloat(operandA) * parseFloat(operandB))
        }
    }
    //decimal button function
    const checkOneDecimal = (e) => {
        //prevent changing value
        if(total){
            return
        }
        if(!operator){
            if(operandA.includes('.'))return
            setOperandA(operandA=>operandA += e.target.value)
        } else if(operator){
            if(operandB.includes('.'))return
            setOperandB(operandB=>operandB += e.target.value)
        }
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
                    <button onClick={checkOneDecimal} value=".">.</button>
                    <button>DEL</button>
                    <button onClick={handleOperator} value="/">/</button>
                    <button className='equal-btn' onClick={handleTotal}>=</button>
                    <button className="clear-btn">CLEAR</button>
                </div>
            </div>
        </div>
    )
}