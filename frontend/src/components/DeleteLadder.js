import React, { useState } from "react";
function DeleteLadder({ deleteLadder }) {
    const [ladderId, setLadderId] = useState("");
    const handleChange = (e) => {
        const { value } = e.target;
        setLadderId(value);
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        deleteLadder(ladderId)
        setLadderId('')
    };
    return (
        <form className="flex items-center py-2 flex-col" onSubmit = {handleSubmit}>
            <input
                className="appearance-none bg-transparent w-full mb-4 border-b-2 focus:border-blue-500 text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="number"
                placeholder="Enter Ladder id"
                value={ladderId}
                onChange={handleChange}
            />
            <button
                type="submit"
                className=" bg-red-400 hover:bg-red-500 rounded-lg py-2 px-6 text-sm text-white"
            >
                Delete Ladder
            </button>
        </form>
    );
}

export default DeleteLadder;
