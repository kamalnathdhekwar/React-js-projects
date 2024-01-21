import React, { useState } from 'react'
import Card from '../Card/Card'
import isWinner from '../../helpers/checkInner';

 function Grid({ numberOfCards }) {
  const [board, setBoard] = useState(Array(numberOfCards).fill(""));
const [turn, setTurn] = useState(true); // if turn = true ... turn of O else turn of X
const [winner, setWinner] = useState(null);

function play(index){
    if(turn == true) {
        board[index] = "O"
    } else{
        board[index] ="X";
    }
    const win = isWinner(board, turn ? "O" : "X");
    if(win) {
        setWinner(win);
    }
    setBoard([ ... board]);
    setTurn(!turn);
}

 function reset() {
    setTurn(true);
    setWinner(null);
    setBoard(Array(numberOfCards).fill(""))
 }
  return (
   <div className="">
    {
        winner && (
            <> 
           <div className="text-white text-2xl flex flex-col items-center">
           <h1 className="">Winner is : <span className='text-3xl text-indigo-400 font-bold'>{winner} </span> </h1>
            <a onClick={reset} href="#_" class="relative inline-block text-lg group">
<span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
<span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
<span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-indigo-500 group-hover:-rotate-180 ease"></span>
<span class="relative">Reset Game </span>
</span>
<span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-pink-500 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
</a>
           </div>
            </>
        )
    }
       <h1 className="text-white text-center text-3xl mt-3">Current turn: <span className='text-3xl text-indigo-400'>{(turn) ? 'O' : 'X'}</span></h1>

    {/* gird box */}
     <div className=' md:h-[500px] md:w-[500px]  h-[300px] w-[300px] md:p-0  grid grid-cols-3 m-auto mt-12'>
     {board.map((el, idx) => <Card gameEnd={winner ? true :false} key={idx} onPlay ={play} player={el} index= {idx} />)}
    </div>
   </div>
  )
}
export default Grid;