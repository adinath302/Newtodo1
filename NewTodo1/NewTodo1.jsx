import React, { useState } from 'react'
import { FaDove } from 'react-icons/fa';
import { ImCross } from "react-icons/im";


const NewTodo1 = () => {
    const [Input, setInput] = useState('')
    const [Todo, setTodo] = useState([])


    const HandleSubmit = (e) => {
        e.preventDefault();
        if (Input.trim() === '') return;
        const NewTodo = {
            id: Date.now(),
            text: Input,
            complete: false
        }
        setTodo([...Todo, NewTodo]);
        setInput('');
    }

    return (
        <div className='m-4'>
            <div className='gap-3'>
                <form onSubmit={HandleSubmit} className='m-3'>

                    <input type="input" className='border-2' onChange={(e) => setInput(e.target.value)} />
                    <button type='submit' className='p-2 border-1 '>Submit</button>

                </form>
                <div className='flex gap-2 items-center '>
                    <ul className=''>{
                        Todo.map((item) => (
                            <div className='flex gap-3'>
                                <li className='bg-red-400 text-white' key={item.id}>{item.text}</li>
                                <div className='flex items-center'> <ImCross /></div>
                            </div>
                        ))
                    }
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default NewTodo1