import './App.css';
import Modal from "./Modal/Modal.js";
import {useState} from "react";



function App() {

    const [modalActive, setModalActive] = useState(false);


  return (

    <div className="App">
        <main>
          <button type={"button"} className='button__open-pop-up' onClick={() => setModalActive(true)}>Налоговый вычет</button>
        </main>
        <Modal active={modalActive} setActive={setModalActive}/>
    </div>

  );
}

export default App;


