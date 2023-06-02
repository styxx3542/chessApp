import { useState } from "react";
import userService from "../services/userService";
const Feedback = ({user}) => {
    const [feedback, setFeedback] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        userService.postFeedback(user.id,feedback);
        setFeedback('')
    }
    return (
        <div className="h-full px-20 flex flex-col align-center w-full">
            <div className="content mt-10 mb-10 flex">
                <h2 className="text-7xl trackin-wide font-light line-height-3">
                    Feedback
                </h2>
            </div>
            <div className="mb-5 text-2xl tracking-wide line-height-2 flex flex-col justify-center align-center">
                Have some feedback for us? Let us know!
            </div>
            <form className="flex flex-col items-center align-center" onSubmit = {handleSubmit}>
                <textarea
                    id="message"
                    rows="4"
                    onChange = {(e) => setFeedback(e.target.value)}
                    value = {feedback}
                    className="block p-2.5 mb-5 w-full text-sm text-gray-900 bg-gray-50 focus:outline-none rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter feedback"
                ></textarea>

                <button className="p-2 text-white bg-red-400 hover:bg-red-500 rounded-lg" type = "submit">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Feedback;
