'use client'
import { useState } from "react";
import { useRouter } from 'next/navigation';



export default function Search(){
    const router = useRouter();
    const [search, setSearch] = useState("");

    function handleOnChange(event){
        setSearch(event.target.value);
    }

    function handleOnClick(){
        const route = `/listings/search?q=${encodeURIComponent(search)}`;
        router.push(route);
    }

    return(
        <div>
            <input type="search" placeholder="Search" value={search} onChange={handleOnChange}/>
            <button onClick={handleOnClick}>Search</button>
        </div>
    )
}