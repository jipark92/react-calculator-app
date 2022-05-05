
export default function Calculator() {
    return (
        <div className="calculator-container">
            <div className="calculator">
                <div className="display">
                    <div className="previous-display">0</div>
                    <div className="current-display">0</div>
                </div>
                <div className="btns-container">
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>-</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>+</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button>*</button>
                    <button>0</button>
                    <button>.</button>
                    <button>DEL</button>
                    <button>/</button>
                    <button className="clear-btn">CLEAR</button>
                </div>
            </div>
        </div>
    )
}