import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import bg from "../assets/dashboard_bg.jpg";
import profile from "../assets/profile_placeholder.jpeg";
import userService from "../services/userService";
import { AiOutlineSearch } from "react-icons/ai";
import Chart from "../components/Chart";
export default function Profile() {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [ladder, setLadder] = useState(0);
    const [ladderId,setLadderId] = useState('')
    const getUser = async () => {
        const new_user = await userService.getUser(id);
        setUser(new_user);
    };
    useEffect(() => {
        getUser();
    }, []);
    const handleChange = (e) => {
        const { value } = e.target;
        setLadderId(value);
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        setLadder(ladderId)
    };
    if (!user) return null;
    return (
        <main className="profile-page">
            <section className="relative block" style={{ height: "500px" }}>
                <div
                    className="absolute top-0 w-full h-full bg-center bg-cover"
                    style={{
                        backgroundImage: `url(${bg})`,
                    }}
                >
                    <span
                        id="blackOverlay"
                        className="w-full h-full absolute opacity-50 bg-black"
                    ></span>
                </div>
                <div
                    className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
                    style={{ height: "70px" }}
                >
                    <svg
                        className="absolute bottom-0 overflow-hidden"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        version="1.1"
                        viewBox="0 0 2560 100"
                        x="0"
                        y="0"
                    >
                        <polygon
                            className="text-gray-300 fill-current"
                            points="2560 0 2560 100 0 100"
                        ></polygon>
                    </svg>
                </div>
            </section>
            <section className="relative py-16 bg-gray-300">
                <div className="container mx-auto px-4">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                        <div className="px-6 flex flex-col items-center justify-center">
                            <div className="flex flex-wrap justify-center mb-4">
                                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                    <div className="relative">
                                        <img
                                            alt="..."
                                            src={profile}
                                            className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                                            style={{ maxWidth: "150px" }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-20">
                                <h3 className="text-4xl font-semibold leading-normal text-gray-800">
                                    {user.user.name}
                                </h3>
                                <div className="text-md leading-normal mt-0 mb-2 text-gray-500 font-bold">
                                    @{user.user.username}
                                </div>
                                <div className="mb-2 text-gray-700 mt-10">
                                    <i className="fas fa-briefcase mr-2 text-lg text-gray-500"></i>
                                    Joined on{" "}
                                    {user.user.created_date.slice(0, 10)}
                                </div>
                                <div className="mb-2 text-gray-700">
                                    <i className="fas fa-university mr-2 text-lg text-gray-500"></i>
                                    Role :{" "}
                                    {user.user.role_id === 1
                                        ? "admin"
                                        : "player"}
                                </div>
                            </div>
                            <div className="flex flex-col justify-center align-center w-full mb-5">
                                <h3 className="text-3xl text-center text-gray-700 mb-4">
                                    Stats
                                </h3>
                                <div className="w-full flex bg-gray-300 justify-around p-5 rounded-full align-center">
                                    <div>Wins - {user.stats.wins[0].wins}</div>
                                    <div>
                                        Losses - {user.stats.losses[0].losses}
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center align-center w-full mb-5 px-10">
                                <h3 className="text-3xl text-center text-gray-700 mb-6">
                                    Ladders
                                </h3>
                                <div className="flex flex-col px-5 items-center justify-center">
                                    <table className="w-full">
                                        <thead>
                                            <tr>
                                                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-center  leading-4 font-medium text-gray-700 uppercase tracking-wider">
                                                    Ladder Name
                                                </th>
                                                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-center leading-4 font-medium text-gray-700 uppercase tracking-wider">
                                                    Elo
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {user.ladders.map((player,index) => {
                                                return (
                                                    <tr key = {index}>
                                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                            <div className="flex items-center justify-center">
                                                                <div>
                                                                    <div className="text-sm leading-5 text-center font-medium text-gray-900">
                                                                        {
                                                                            player.ladder_name
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                            <div className="text-sm leading-5 text-center font-medium text-gray-900">
                                                                {player.elo}
                                                            </div>
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center align-center w-full mb-5 px-10">
                                <h3 className="text-3xl text-center text-gray-700 my-6">
                                    Recent games
                                </h3>
                                <div className="flex flex-col px-5 items-center justify-center">
                                    <table className="w-full">
                                        <thead>
                                            <tr>
                                                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-center  leading-4 font-medium text-gray-700 uppercase tracking-wider">
                                                    Ladder Name
                                                </th>
                                                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-center leading-4 font-medium text-gray-700 uppercase tracking-wider">
                                                    Player 1
                                                </th>
                                                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-center leading-4 font-medium text-gray-700 uppercase tracking-wider">
                                                    Player 2
                                                </th>
                                                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-center leading-4 font-medium text-gray-700 uppercase tracking-wider">
                                                    Result
                                                </th>
                                                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-center leading-4 font-medium text-gray-700 uppercase tracking-wider">
                                                    Date
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {user.games.map((game,index) => {
                                                return (
                                                    <tr key = {index}>
                                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                            <div className="flex items-center justify-center">
                                                                <div>
                                                                    <div className="text-sm leading-5 text-center font-medium text-gray-900">
                                                                        {
                                                                            game.ladder
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                            <div className="text-sm leading-5 text-center font-medium text-gray-900">
                                                                {game.player_1}
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                            <div className="text-sm leading-5 text-center font-medium text-gray-900">
                                                                {game.player_2}
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                            <div className="text-sm leading-5 text-center font-medium text-gray-900">
                                                                {game.result}
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                            <div className="text-sm leading-5 text-center font-medium text-gray-900">
                                                                {game.time_of_game.slice(
                                                                    0,
                                                                    10
                                                                )}
                                                            </div>
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center align-center w-full mb-5 px-10">
                                <h3 className="text-3xl text-center text-gray-700 my-6">
                                    See Progression
                                </h3>
                                <div className="flex flex-col px-5 items-center justify-center">
                                    <form
                                        className="flex items-center border-b-2 border-teal-500 py-2"
                                        onSubmit={handleSubmit}
                                    >
                                        <input
                                            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                            type="number"
                                            placeholder="Enter Ladder ID"
                                            value={ladderId}
                                            onChange={handleChange}
                                        />
                                        <button
                                            type="submit"
                                            className="text-lg bg-none border-none"
                                        >
                                            <AiOutlineSearch />
                                        </button>
                                    </form>
                                    {ladder !== 0 && (
                                        <Chart
                                            ladder_id={ladder}
                                            user_id={id}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
