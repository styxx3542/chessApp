import {useState} from 'react'
import GamesInput from '../components/GamesInput';
import GamesTable from '../components/tables/GamesTable';
const Games = () => {
    const [gameParams,setGameParams] = useState(null)
    return (
        <div className="h-full px-20 flex flex-col align-center w-full">
            <div className="content mt-10 mb-10 flex">
                <h2 className="text-7xl trackin-wide font-light line-height-3">
                    Games
                </h2>
            </div>
            <div className="mb-5 text-4xl tracking-wide line-height-2 flex flex-col justify-center align-center">
                Filter by
                <GamesInput setGameParams = {setGameParams} text = "Show Games"/>
            </div>
            {gameParams && <GamesTable params = {gameParams} />}
        </div>
    );
};

export default Games;

