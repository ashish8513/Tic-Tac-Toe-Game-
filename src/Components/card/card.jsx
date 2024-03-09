import Icons from '../icon/icon'
import './card.css'
function Card({ gameEnd, player, onPlay, index }) {
    let icon = <Icons />
    if (player === 'X') {
        icon = <Icons name="cross" />
    } else if (player === 'O') {
        icon = <Icons name="circle" />
    }


    return (
        <div className="card" onClick={() => !gameEnd && player==''  && onPlay(index)} >
            {icon}
        </div>
    );
}
export default Card