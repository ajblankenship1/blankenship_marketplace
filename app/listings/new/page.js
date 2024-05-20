'use client'
import { useState } from "react";
import styles from "./styles.module.css";

export default function NewListingPage(){
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [location, setLocation] =useState("");
    const [email, setEmail] = useState("");
    const [description, setDescription] =useState("");
    const [errors, setErrors] = useState({ title: "", price: "", location: ""});

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


    function validateLocation(data){
        if(!data){
            return setErrors({...errors, price:"Cannot be an empty field"});
        }
        return setErrors({...errors, price:""});
    }

    function validateEmail(data){
        if(!data){
            return setErrors({...errors, email:"Cannot be an empty field"});
        }
        return setErrors({...errors, email:""});
    }

    function validateDescription(data){
        if(!data){
            return setErrors({...errors, description:"Cannot be an empty field"});
        }
        return setErrors({...errors, description:""});
    }

    return(
        <div>
            <h1> New Listing Page</h1>
            <form className={styles.addNewForm}>
                <fieldset>
                    <label for="title">Title:</label>
                    <input type="text" id="title" placeholder="Give you item a searchable title" value={title} onChange={(event) => handleOnChange(event,setTitle,validateTitle)}/>
                    <p>{errors.title}</p>
                </fieldset>
                <fieldset>
                    <label for="price">Price:</label>
                    <input type="text" id="price" placeholder="Name your price" value={price} onChange={(event) => handleOnChange(event,setPrice, validatePrice)}/>
                    <p>{errors.price}</p>
                </fieldset>
                <fieldset>
                    <label for="location">Location:</label>
                    <input type="text" id="location"  placeholder="Where will you be shipping this item from?" value={location} onChange= {(event) => handleOnChange(event,setLocation,validateLocation)}/>
                    <p>{errors.location}</p>
                </fieldset>
                <fieldset>
                    <lable for="email">Email:</lable>
                    <input type="text" id="email" placeholder="What is your email address?" value={email} onChange={(event) =>handleOnChange(event, setEmail, validateEmail)}/>
                </fieldset>
                <fieldset>
                    <label for="description">Description</label>
                    <input type="text" id="description" placeholder="Describe your product for sale" value={description} onChange={(event) => handleOnChange(event, setDescription, validateDescription)}/>
                </fieldset>
                
            </form>
        </div>
    )
}