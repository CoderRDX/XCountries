import React from "react";
import { useEffect, useState } from "react";
import './Flags.css'

import FlagCard from "./FlagCard";

export default function Flags(){
    const api = "https://xcountries-backend.azurewebsites.net/all";

    const [flags, setFlags] = useState([]);

  

    useEffect(() => {
        const fetchdata = async() => {
            try{
                const res = await fetch(api);
                const data = await res.json();
                setFlags(data);

            }catch(error){
                console.error("Error fetching data: ", error);

            }
        }

        fetchdata();
    }, []);

    return(
        <div className="FlagsGrid">
            {flags.map(flag =>(
                <FlagCard key={flag.abbr} name={flag.name} flagImg={flag.flag} alt={flag.abbr}/>
            ))}
        </div>
    );




}