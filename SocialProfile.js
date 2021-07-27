import React ,{Component} from 'react';
import SOCIAL_PROFILES from './data/socialProfiles';

class SocialProfile extends Component    //this class is for to make components
{
    render()
    {
        const{link,image}=this.props.social_Profile;


        return (
            <div style={{display:'inline-block',width:300,height:10}}>
            <a href={link} > <img src={image} alt='social_profile' style={{width:150,height:150 ,margin:10}}/></a>
             </div>
        )
    }
}

class SocialProfiles extends Component
{
    render()
    {
        return(
            <div>
            <h2>connect with me</h2>
            <div>
            {
                SOCIAL_PROFILES.map(SOCIAL_PROFILE=>{
                    return <SocialProfile key={SOCIAL_PROFILE.id} social_Profile={SOCIAL_PROFILE}/>;
                    })
                    }
                </div>
            </div>
        )
    }
}
export default SocialProfiles;