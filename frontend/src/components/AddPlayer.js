import React, { useState } from "react";
function AddPlayer({ addPlayer }) {
    const [ladderId, setLadderId] = useState("");
    const [playerId, setPlayerId] = useState("");
    const handleLadderChange = (e) => {
        const { value } = e.target;
        setLadderId(value);
    };
    const handlePlayerChange = (e) => {
        const { value } = e.target;
        setPlayerId(value);
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        addPlayer(ladderId,playerId)
        setLadderId('')
        setPlayerId('')
    };
    return (
        <form className="flex items-center py-2 flex-col" onSubmit = {handleSubmit}>
            <div>
            <input
                className="appearance-none bg-transparent w-full mb-4 border-b-2 focus:border-blue-500 text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="number"
                placeholder="Enter Ladder id"
                value={ladderId}
                onChange={handleLadderChange}
            />
            <input
                className="appearance-none bg-transparent w-full mb-4 border-b-2 focus:border-blue-500 text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="number"
                placeholder="Enter Player id"
                value={playerId}
                onChange={handlePlayerChange}
            />
            </div>
            <button
                type="submit"
                className=" bg-red-400 hover:bg-red-500 rounded-lg py-2 px-6 text-sm text-white"
            >
                Add Player
            </button>
        </form>
    );
}

export default AddPlayer;
