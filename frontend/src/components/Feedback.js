import userService from "../services/userService";
import {useState,useEffect} from 'react'
const Feedback = () => {
    const [feedback, setFeedback] = useState(null)
    const getFeedback = async() => {
        const new_feedback = await userService.getFeedback()
        setFeedback(new_feedback)
    }
    useEffect(() => {
        getFeedback();
    },[])
    if(!feedback)return null;
    return(
        <div className="flex flex-col px-5 items-center justify-center">
            <table className="w-full">
                <thead>
                    <tr>
                        <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left  leading-4 font-medium text-gray-700 tracking-wider">
                            User ID
                        </th>
                        <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left leading-4 font-medium text-gray-700 tracking-wider">
                            Feedback
                        </th>
                        <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left leading-4 font-medium text-gray-700 tracking-wider">
                            Time of feedback
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {feedback.map((player,index) => {
                        return (
                            <tr key = {index}>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                    <div className="flex items-center">
                                        <div>
                                            <div className="text-sm leading-5 font-medium text-gray-900">
                                                {player.user_id}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                    <a className="text-sm leading-5 font-medium text-gray-900 hover:border-none" href={`/profile/${player.player_id}`}>
                                        {player.text}
                                    </a>
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                    <div className="text-sm leading-5 font-medium text-gray-900">
                                        {player.time_of_feedback}
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default Feedback