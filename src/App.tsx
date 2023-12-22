import { animated, useSpring  } from "react-spring";
import { Container } from "@mantine/core";
import reactLogo from "./assets/react.svg";
import { useState } from "react";
import viteLogo from "/vite.svg";

function App() {
    const [count, setCount] = useState(0);

    const startAnim = useSpring({
        "from": { "opacity": 0 }, "opacity": 1
    });

    const loaderAnim = useSpring({
        "delay": 1500,
        "from": {
            "transform": "translate3d(0, 0, 0)"
        },
        "to": {
            "transform": "translate3d(100%, 0, 0)"
        }
    });

    return (
        <animated.div style={startAnim}>
            <animated.div>
                <Container 
                    style={{
                        "alignItems": "center",
                        "backgroundColor": "gray",
                        "display": "flex",
                        "height": "100vh",
                        "justifyContent": "center",
                        "left": 0,
                        "margin": 0,
                        "padding": 0,
                        "top": 0,
                        "width": "100vw",
                        "zIndex": 100
                    }}
                >
                    Hello world!
                </Container>
            </animated.div>

            {/* <Container style={{}}>
                <div>
                    <a href="https://vitejs.dev" target="_blank">
                        <img src={viteLogo} className="logo" alt="Vite logo" />
                    </a>
                    
                    <a href="https://react.dev" target="_blank">
                        <img src={reactLogo} className="logo react" alt="React logo" />
                    </a>
                </div>
                
                <h1>Vite + React</h1>
                
                <div className="card">
                    <button onClick={() => setCount((count) => count + 1)}>
                        count is {count}
                    </button>
                    
                    <p>
                        Edit <code>src/App.tsx</code> and save to test HMR
                    </p>
                </div>
                
                <p className="read-the-docs">
                    Click on the Vite and React logos to learn more
                </p>
            </Container> */}
        </animated.div>
    );
}

export default App;
