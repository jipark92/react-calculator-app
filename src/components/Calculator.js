
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
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button>0</button>

                    <button>-</button>
                    <button>+</button>
                    <button>*</button>
                    <button>/</button>

                    <button>.</button>
                    <button>C</button>
                    <button className="delete-btn">DEL</button>
                </div>
            </div>
        </div>
    )
}