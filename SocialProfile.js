import React  from 'react';
import SOCIAL_PROFILES from '../data/socialProfiles';

const SocialProfile=props=>  //this class is for to make components

{
    const{link,image}=props.social_Profile;


    return (
        <span>
        <a href={link} > 
        <img src={image} alt='social_profile' style={{width:35,height:35 ,margin:10}}/>
        </a>
        </span>
    )
}

const SocialProfiles=()=>
(
    <div>
    <h2>connect with me</h2>
    <div>
    {
        SOCIAL_PROFILES.map(SOCIAL_PROFILE=>(
        <SocialProfile key={SOCIAL_PROFILE.id} social_Profile={SOCIAL_PROFILE}/>
            ))
    }
        </div>
    </div>
)
export default SocialProfiles;