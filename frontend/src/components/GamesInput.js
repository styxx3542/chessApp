import React, { useState } from "react";
function GamesInput({ setGameParams,text }) {
    const [params, setParams] = useState({
        player_1_id: "",
        player_2_id: "",
        ladder_id: "",
        result: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setParams((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    const handleSubmit = async (event) => {
        event.preventDefault()
        setGameParams(params)
        setParams({
            player_1_id: "",
            player_2_id: "",
            ladder_id: "",
            result: "",
        })
    };
    return (
        <form className = "flex flex-col justify-between items-center"
        onSubmit = {handleSubmit}>
            <div className="my-3 flex justify-between w-full">
                <div className="flex flex-col text-sm mr-6">
                    <label className="text-gray-700 mb-2">Player 1 ID</label>
                    <input
                        className="border-b text-black border-b-gray-300 focus:border-b-blue-600 outline-none w-min"
                        type="text"
                        placeholder="Enter player 1 id"
                        name="player_1_id"
                        value={params.player_1_id}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex flex-col text-sm mx-3">
                    <label className="text-gray-700 mb-2">Player 2 ID</label>
                    <input
                        className="border-b text-black border-b-gray-300 focus:border-b-blue-600 outline-none w-min"
                        type="text"
                        placeholder="Enter player 1 id"
                        name="player_2_id"
                        value={params.player_2_id}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex flex-col text-sm mx-3">
                    <label className="text-gray-700 mb-2">Ladder Id</label>
                    <input
                        className="border-b text-black border-b-gray-300 focus:border-b-blue-600 outline-none w-min"
                        type="text"
                        placeholder="Enter ladder id"
                        name="ladder_id"
                        value={params.ladder_id}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex flex-col text-sm ml-6">
                    <label className="text-gray-700 mb-2">Result</label>
                    <input
                        className="border-b text-black border-b-gray-300 focus:border-b-blue-600 outline-none w-min"
                        type="text"
                        placeholder="Enter result"
                        name="result"
                        value={params.result}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <button className = 'rounded-lg text-white bg-red-400 hover:bg-red-500 w-1/6 text-sm p-2'
            type = "submit">
                {text}
            </button>
        </form>
    );
}

export default GamesInput;
