import './App.css';
import {useCallback, useState} from "react";

const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
];

function App() {
    const [count, setCount] = useState(0);
    const [isOpen, setIsOpen] = useState(true);

    const increment = useCallback(
        () => {
            setCount((currentCount) => {
                if (currentCount >= 3) {
                    return currentCount
                } else {
                    return currentCount + 1
                }
            })
        },
        [],
    );

    const decrement = useCallback(
        () => {
            setCount((currentCount) => {
                if (currentCount === 0) {
                    return currentCount
                } else {
                    return currentCount - 1
                }
            })
        },
        [],
    );

    return (
        <>
            <button className={"close"} onClick={() => setIsOpen(!isOpen)}>&times;</button>
            {isOpen && (
                <div className="steps">
                    <div className={"numbers"}>
                        <div className={count >= 1 ? "active" : ""}>1</div>
                        <div className={count >= 2 ? "active" : ""}>2</div>
                        <div className={count >= 3 ? "active" : ""}>3</div>
                    </div>

                    <p className={"message"}>{messages[count - 1]}</p>

                    <div className={"buttons"}>
                        <button
                            style={{
                                backgroundColor: "#7950f2",
                                color: "#fff"
                            }}
                            onClick={decrement}>Previous
                        </button>

                        <button
                            style={{
                                backgroundColor: "#7950f2",
                                color: "#fff"
                            }}
                            onClick={increment}>Next
                        </button>
                    </div>


                </div>
            )}
        </>


    );
}

export default App;
