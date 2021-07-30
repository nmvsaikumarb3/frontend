import React,{Component} from 'react';

const TITLES=[
    'a software Engineer',
    'all rounder in cricket',
    'a motivator',
    'a opimestic guy'
];

class Title extends Component
{
    state={titleIndex:0,fadeIn:true}; //titleIndex is the camicase means second word first letter should be capital


    componentDidMount()      //text line are going to be change because of this 
    {
        this.timeout=setTimeout(()=>this.setState({fadeIn:false}),2000);


        this.animateTitles();
    }
    componentWillUnmount()    //the changing to text will be stop but not we not using this
    {
    
        clearInterval(this.titleInterval);
        clearTimeout(this.timeout);
    }

        animateTitles=()=>
        {
           this.setInterval= setInterval(()=>{           //it require when we use componentwillunmount
                const titleIndex=(this.state.titleIndex+1)%TITLES.length;

                this.setState({titleIndex,fadeIn:true});
                this.timeout=setTimeout(()=>this.setState({fadeIn:false}),2000);
            },4000);
    
 
        }
    
    render(){
    const{fadeIn,titleIndex}=this.state;
    const title=TITLES[titleIndex];
    return(

        <p className={fadeIn? 'title-fade-in':'title-fade-out'}>I am  {title}</p>
    )

}
}

export default Title;