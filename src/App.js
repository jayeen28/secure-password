import React, { useRef } from 'react'
import './App.css';
import useCrypto from './useCrypto';
const App = () => {
    const valueRef = useRef();
    const keyRef = useRef();
    const outputRef = useRef();
    const { encrypt, decrypt } = useCrypto();
    return (
        <div id="root">
            <main>
                <div className="container">
                    <h1>Secure password</h1>
                    <div className="input-wrapper">
                        <input type="text" placeholder="Key" ref={keyRef} />
                        <textarea placeholder="Value" ref={valueRef}></textarea>
                    </div>
                    <div className="outPutWrapper" ref={outputRef}>

                    </div>
                    <div className="action-btns">
                        <button onClick={() => encrypt(valueRef.current.value, keyRef.current.value, outputRef)}>Encrypt</button>
                        <button onClick={() => decrypt(valueRef.current.value, keyRef.current.value, outputRef)}>Decrypt</button>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default App
