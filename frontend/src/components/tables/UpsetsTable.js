import gamesService from "../../services/gamesService";
import {useEffect, useState} from 'react'

const UpsetsTable = () => {
    const getUpsets = async () => {
        const new_upsets = await gamesService.getUpsets();
        console.log(new_upsets)
        setUpsets(new_upsets);
    }
    const [upsets,setUpsets] = useState(null)
    useEffect(()=> {
        getUpsets();
    },[])
    if(!upsets)return null;
    return (
        <div className="flex flex-col px-5 items-center justify-center my-10">
            <h3 className="text-4xl mb-8"> Biggest upsets of the week </h3>
            <table className="w-full">
                <thead>
                    <tr>
                        <th className="px-6 py-3 border-b border-gray-200 text-center bg-gray-50 leading-4 font-medium text-gray-700 uppercase tracking-wider">
                            Player 1
                        </th>
                        <th className="px-6 py-3 border-b border-gray-200 text-center bg-gray-50 leading-4 font-medium text-gray-700 uppercase tracking-wider">
                            Player 2
                        </th>
                        <th className="px-6 py-3 border-b border-gray-200 text-center bg-gray-50 leading-4 font-medium text-gray-700 uppercase tracking-wider">
                            Elo difference
                        </th>
                        <th className="px-6 py-3 border-b border-gray-200 text-center bg-gray-50 leading-4 font-medium text-gray-700 uppercase tracking-wider">
                            Date
                        </th>

                    </tr>
                </thead>
                <tbody>
                    {
                        upsets.map((game) => {
                            return(
                                <tr>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <a className="text-sm leading-5 font-medium text-center text-gray-900 hover:bg-none" href={`/profile/${game.winner_id}`}>
                                {game.player_1}
                            </a>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <a className="text-sm leading-5 font-medium text-center text-gray-900 hover:bg-none" href={`/profile/${game.loser_id}`}>
                                {game.player_2}
                            </a>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <div className="text-sm leading-5 font-medium text-center text-gray-900">
                                {game.elo_difference}
                            </div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <div className="text-sm leading-5 font-medium text-center text-gray-900">
                                {game.time_of_game.slice(0,10)}
                            </div>
                        </td>
                    </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};
export default UpsetsTable;
