import React from 'react';
import { FaRegThumbsUp } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ChefsCard = ({ chefs }) => {
    
    const {id, chef_name, chef_picture, likes, number_of_recipes, years_of_experience} = chefs
    return (
        
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-2 mt-2 lg:px-8  lg:mt-5 h-[250px] lg:h-[400px]">
                    <img src={chef_picture} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="mx-2 my-3 lg:card-body">
                    <h2 className="card-title">{chef_name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <p className='font-serif'>recipes {number_of_recipes}</p>
                    <p>experience: {years_of_experience} years</p>
                    <div className="flex justify-between items-center lg:gap-[50%] mt-3 lg:mt-0">
                        <Link to={`/chefDetails/${id}`}><button className="btn btn-primary">details</button></Link>
                        <span className='w-12 flex items-center gap-1 font-serif mr-9'><span><FaRegThumbsUp className='w-8 h-7'></FaRegThumbsUp></span> {likes}</span>
                    </div>
                </div>
            </div>
       
    );
};

export default ChefsCard;