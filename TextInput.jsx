import './TextInput.css';
import { Input } from '@chakra-ui/react';


export const TextInput = ({ changeFn }) => ( <Input variant='filled' placeholder='Filled' onChange={changeFn} />);
