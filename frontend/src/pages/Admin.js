import gamesService from "../services/gamesService";
import ladderService from "../services/ladderService";
import LadderForm from "../components/LadderForm";
import GamesInput from "../components/GamesInput";
import DeleteLadder from "../components/DeleteLadder";
import AddPlayer from "../components/AddPlayer";
import Feedback from "../components/Feedback";
const Admin = ({ user }) => {
    console.log(user);
    if (user.roles.role_name === "player") {
        return (
            <div className="flex flex-col justify-center items-center text-5xl w-full h-full">
                Invalid Access
            </div>
        );
    }
    const setGameParams = async (params) => {
        await gamesService.postGames(params);
    };
    const setLadder = async (ladder_name) => {
        await ladderService.postLadder(ladder_name);
    };
    const deleteLadder = async (ladder_id) => {
        await ladderService.deleteLadder(ladder_id);
    };
    const addPlayer = async (ladder_id, player_id) => {
        await ladderService.addPlayer(ladder_id, player_id);
    };
    return (
        <div className="h-full px-20 flex flex-col align-center w-full">
            <div className="content mt-10 mb-10 flex">
                <h2 className="text-7xl trackin-wide font-light line-height-3 w-full flex justify-center align-center">
                    Admin
                </h2>
            </div>
            {user.roles.add_game && (
                <div className="mb-4">
                    <h3 className="text-3xl font-normal mb-2 tracking-wide line-height-2">
                        Add Games
                    </h3>
                    <GamesInput setGameParams={setGameParams} text="Add Game" />
                </div>
            )}
            {user.roles.add_ladder && (
                <div className="mb-4">
                    <h3 className="text-3xl font-normal mb-2 tracking-wide line-height-2">
                        Add Ladder
                    </h3>
                    <LadderForm setLadder={setLadder} />
                </div>
            )}
            {user.roles.delete_ladder && (
                <div className="mb-4">
                    <h3 className="text-3xl font-normal mb-2 tracking-wide line-height-2">
                        Delete Ladder
                    </h3>
                    <DeleteLadder deleteLadder={deleteLadder} />
                </div>
            )}
            {user.roles.add_player && (
                <div className="mb-4">
                    <h3 className="text-3xl font-normal mb-2 tracking-wide line-height-2">
                        Add Player to a ladder
                    </h3>
                    <AddPlayer addPlayer={addPlayer} />
                </div>
            )}
            <div className="mb-4">
                <h3 className="text-3xl font-normal mb-2 tracking-wide line-height-2">
                    View Feedback
                </h3>
                <Feedback />
            </div>
        </div>
    );
};

export default Admin;
