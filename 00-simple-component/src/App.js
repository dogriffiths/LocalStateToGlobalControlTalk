import {useState} from "react";
import "./App.css"

function App() {
    const [name, setName] = useState("")
    return <>
        Name: {name}
        <p/>
        <input value={name}
               onChange={(evt) => setName(evt.target.value)}
        />
    </>
}

export default App;
