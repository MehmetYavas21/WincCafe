import './TextInput.css';

export const TextInput = ({ changeFn }) => {
    return <input className="input" onChange={changeFn}></input>;
};
