
import userService from '../services/userService';
import {useState,useEffect} from 'react'
const Chart = ({ ladder_id,user_id  }) => {
    const [data,setData] = useState(null)
    const getData = async() => {
        const raw_data = await userService.getProgression(user_id,ladder_id)
        setData(raw_data)
    }
    useEffect(() => {
        getData()
    })
    if(!data)return null;
    return(
        <div className="flex flex-col px-5 items-center justify-center w-full">
            <table className="w-full">
                <thead>
                    <tr>
                        <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-center leading-4 font-medium text-gray-700 uppercase tracking-wider">
                            Elo
                        </th>
                        <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-center leading-4 font-medium text-gray-700 uppercase tracking-wider">
                            date
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((player,index) => {
                        return (
                            <tr key = {index}>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                    <div className="text-sm leading-5 font-medium text-center text-gray-900">
                                        {player.elo}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                    <div className="text-sm leading-5 font-medium text-center text-gray-900">
                                        {player.time_of_change.slice(0,10)}
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

export default Chart;