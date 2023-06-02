const ChampionCard = ({user}) => {
    console.log(user)
    return(
    <a href={`/profile/${user.player_id}`} className={`block max-w-sm p-6 bg-white border border-gray-400 rounded-lg shadow hover:bg-gray-200 mb-8`}>
    <h5 className={`mb-2 text-2xl font-bold tracking-tight text-gray-900`}>{user.name}</h5>
    <p className="font-normal text-gray-700 dark:text-gray-400"> {user.wins} wins</p>
</a>
    )
}

export default ChampionCard

