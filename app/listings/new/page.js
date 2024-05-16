'use client'
import { useState } from "react";

export default function NewListingPage(){
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [errors, setErrors] = useState({ title: "", price: ""});

    function handleOnChange(event, setter, validator){
        setter(event.target.value);
        validator ? validator(event.target.value) : null;
    }

    function validateTitle(data){
        if (!data){
            return setErrors({...errors, title:"Cannot be an empty field"});
        }
        return setErrors({...errors, title:""});
    }


    function validatePrice(data){
        if(!data){
            return setErrors({...errors, price:"Cannot be an empty field"});
        }
        if(isNaN(data)){
            return setErrors({...errors, price:"Must be a number"});
        }
        return setErrors({...errors, price:""});
    }



    return(
        <div>
            <h1> New Listing Page</h1>
            <form>
                <fieldset>
                    <label for="title">Title:</label>
                    <input type="text" id="title" value={title} onChange={(event) => handleOnChange(event,setTitle,validateTitle)}/>
                    <p>{errors.title}</p>
                </fieldset>
                <fieldset>
                    <label for="price">Price:</label>
                    <input type="text" id="price" value={price} onChange={(event) => handleOnChange(event,setPrice, validatePrice)}/>
                    <p>{errors.price}</p>
                </fieldset>
                
            </form>
        </div>
    )
}