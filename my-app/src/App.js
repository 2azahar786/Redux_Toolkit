import React, {useState} from 'react';

import {increment, decrement, incrementByValue} from "./features/counter/counterSlice";

import { useSelector, useDispatch} from 'react-redux';s

function App() {
  const [input, setInput] = useState('')
  const count = useSelector ((state) => state.counter.value)
  const dispatch = useDispatch()


  return (
    <div 
    className='bg-zinc-900 text-zinc-100 flex justify-center items-center flex-col min-h-screen gap-6'
    >
    <div
    className ='space-x-3'
    >
     
    </div>
    </div>
  );
}

export default App;
