import ladderService from "../../services/ladderService";
import { useState, useEffect } from "react";
const LeaderboardTable = () => {
    const [leaderboard, setLeaderboard] = useState(null);
    const getLeaderboard = async () => {
        const new_leaderboard = await ladderService.getLeaderboard();
        setLeaderboard(new_leaderboard);
    };
    useEffect(() => {
        getLeaderboard();
    }, []);
    if (!leaderboard) return null;
    return (
        <div className="flex flex-col px-5 items-center justify-center">
            <h3 className="text-4xl mb-4"> Current Leaderboard </h3>
            <table className="w-full">
                <thead>
                    <tr>
                        <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left  leading-4 font-medium text-gray-700 uppercase tracking-wider">
                            Ladder Name
                        </th>
                        <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left leading-4 font-medium text-gray-700 uppercase tracking-wider">
                            Player Name
                        </th>
                        <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left leading-4 font-medium text-gray-700 uppercase tracking-wider">
                            Elo
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {leaderboard.map((player,index) => {
                        return (
                            <tr key = {index}>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                    <div className="flex items-center">
                                        <div>
                                            <div className="text-sm leading-5 font-medium text-gray-900">
                                                {player.ladder_name}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                    <a className="text-sm leading-5 font-medium text-gray-900 hover:border-none" href={`/profile/${player.player_id}`}>
                                        {player.name}
                                    </a>
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                    <div className="text-sm leading-5 font-medium text-gray-900">
                                        {player.elo}
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
export default LeaderboardTable;
