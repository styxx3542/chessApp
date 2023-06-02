import { useState, useEffect } from "react";
import gamesService from "../../services/gamesService";
const GamesTable = ({ params }) => {
    const [games, setGames] = useState(null);
    console.log(params)
    const getGames = async () => {
        const new_games = await gamesService.getGames(params);
        setGames(new_games);
    };
    useEffect(() => {
        getGames();
    },[params]);
    if (!games) return null;
    return (
        <div className="flex flex-col px-5 items-center justify-center">
            <table className="w-full">
                <thead>
                    <tr>
                        <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left  leading-4 font-medium text-gray-700 uppercase tracking-wider">
                            Player 1
                        </th>
                        <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left leading-4 font-medium text-gray-700 uppercase tracking-wider">
                            Player 2
                        </th>
                        <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left leading-4 font-medium text-gray-700 uppercase tracking-wider">
                            Result
                        </th>
                        <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left leading-4 font-medium text-gray-700 uppercase tracking-wider">
                            Ladder
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {games.map((game) => {
                        return (
                            <tr>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                    <div className="flex items-center">
                                        <a className="text-sm leading-5 font-medium text-gray-900 hover:border-none" href={`/profile/${game.player_1_id}`}>
                                            {game.player_1}
                                        </a>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <a className="text-sm leading-5 font-medium text-gray-900 hover:border-none" href={`/profile/${game.player_2_id}`}>
                                            {game.player_2}
                                        </a>
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                    <div className="text-sm leading-5 font-medium text-gray-900">
                                        {game.result}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                    <div className="text-sm leading-5 font-medium text-gray-900">
                                        {game.ladder}
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};
export default GamesTable;
