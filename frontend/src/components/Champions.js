import ChampionCard from "./championCard";
import userService from "../services/userService";
import { useState,useEffect } from 'react'
const Champions = () => {
    const [champions,setChampions] = useState(null)
    const getChampions = async() => {
        const new_champions = await userService.getChampions();
        console.log(new_champions)
        setChampions(new_champions)
    }
    useEffect(() => {getChampions()},[])
    if(!champions)return null
    return (
        <div className="flex flex-col items-center justify-center w-full">
            <h3 className = "text-4xl mb-8">
                Our Reigning Champs
            </h3>
            <div className="mb-5">
                <ChampionCard user = {champions[0]}/>
            </div>
            <div className="flex justify-between items-center w-3/5">
                <ChampionCard user = {champions[1]}/>
                <ChampionCard user = {champions[2]} />
            </div>
        </div>
    );
};

export default Champions;
