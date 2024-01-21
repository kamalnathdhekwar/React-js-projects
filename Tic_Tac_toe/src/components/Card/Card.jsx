import Icon from "../icons/Icon"

function Card( { gameEnd, player, onPlay, index } ) {
    let icon = <Icon />
    if(player == 'X') {
        icon = <Icon name="cross" />
    } else if(player == 'O'){     
        icon = <Icon name="circle" />
    }

    return(
    <div onClick={() =>    onPlay(index)}  className="border-[1px] border-black flex justify-center items-center md:w-[160px] md:h-[160px] w-[98px] h-[98px]rounded-xl bg-yellow-400 ">
       {icon}
    </div>

    )
}

export default Card