import { useState} from "react";
import LadderInput from "../components/LadderInput";
const Ladder = () => {
    const [ladder, setLadder] = useState(null);
    return (
        <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gray-100">
            <div className="content mt-10 mb-10 flex">
                <h2 className="text-7xl trackin-wide font-light line-height-3">
                   Ladder
                </h2>
            </div>
            <LadderInput setLadder={setLadder} />
            {ladder && (
                <div className="flex w-full flex-col px-5 items-center justify-center mt-10">
                    <h3 className="text-4xl mb-4"> {ladder.name} </h3>
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 w-1/5 border-b border-gray-200 bg-gray-50  leading-4 text-center font-medium text-gray-700 uppercase tracking-wider">
                                    Rank
                                </th>
                                <th className="px-6 py-3 w-3/5 border-b border-gray-200 bg-gray-50 leading-4 text-center font-medium text-gray-700 uppercase tracking-wider">
                                    Player Name
                                </th>
                                <th className="px-6 py-3 w-1/5 border-b border-gray-200 bg-gray-50 text-center leading-4 font-medium text-gray-700 uppercase tracking-wider">
                                    Elo
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {ladder.players &&
                                ladder.players.map((player, index) => {
                                    return (
                                        <tr
                                            key={index}
                                            className="w-full"
                                        >
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <div className="flex justify-center">
                                                    <div>
                                                        <div className="text-sm leading-5 font-medium text-gray-900">
                                                            {index + 1}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 flex justify-center">
                                                <div className="text-sm leading-5 font-medium text-gray-900">
                                                    {player.name}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <div className="text-sm leading-5 font-medium text-gray-900 flex justify-center">
                                                    {player.elo}
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Ladder;
