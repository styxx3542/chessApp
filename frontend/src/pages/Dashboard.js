import LeaderboardTable from "../components/tables/LeaderboardTable";
import UpsetsTable from "../components/tables/UpsetsTable";
import Champions from "../components/Champions";
const Dashboard = ({ user }) => {
    if (!user) return null;
    return (
        <div className="h-full px-20">
            <div className="content mt-10 mb-10">
                <h2 className="text-7xl trackin-wide font-light line-height-3 w-full flex align-center justify-center">
                    Dashboard
                </h2>
            </div>
            <div className="mb-5">
                <div className="text-4xl trackin-wide font-normal line-height-3 mb-4">
                    Welcome {user.name}!
                </div>
                <div className="text-xl trackin-wide line-height-2">
                    Catch up on the major happenings this week
                </div>
            </div>
            <LeaderboardTable />
            <UpsetsTable/>
            <Champions />
        </div>
    );
};
export default Dashboard;
