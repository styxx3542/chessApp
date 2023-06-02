import React, { useState } from "react";
import ladderService from "../services/ladderService";
import { AiOutlineSearch } from "react-icons/ai";
function LadderInput({ setLadder }) {
    const [ladderId, setLadderId] = useState("");
    const handleChange = (e) => {
        const { value } = e.target;
        setLadderId(value);
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("hello");
        const ladder = await ladderService.getLadder(ladderId);
        setLadder(ladder)
    };
    return (
        <form className="flex items-center border-b-2 border-teal-500 py-2" onSubmit = {handleSubmit}>
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
    );
}

export default LadderInput;
