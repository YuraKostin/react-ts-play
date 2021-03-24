import React, {FormEvent, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {SetAction, State} from './store/store';
import {SomeInput} from './components/some-input';
import {HelloWorld} from "./components/hello-world";

export const App = () => {
    // Event handling
    const [value, setValue] = useState('');
    const handleChange = (e: FormEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    }

    // Store
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch<SetAction>({
            type: 'SET',
            payload: 'Some string!',
        });
    };

    const count = useSelector((state: State) => state.count);

    return (
        <>
            <section>
                <h2>Template variable issue</h2>
                <HelloWorld msg={'Hello, World'}/>
            </section>
            <hr/>
            <section>
                <h2>Event handling issue</h2>
                <SomeInput onInput={handleChange}/>
                <br/>
                Your text: {value}
            </section>
            <hr/>
            <section>
                <h2>Store issue</h2>
                <button onClick={handleClick}>Set `1` as new value!</button>
                <p>{count}</p>
            </section>
        </>
    );
};



