import React,{Component} from 'react';

const TITLES=[
    'a software Engineer',
    'all rounder in cricket',
    'a motivator',
    'a opimestic guy'
];

class Title extends Component
{
    state={titleIndex:0}; //titleIndex is the camicase means second word first letter should be capital


    componentDidMount()
    {
        console.log('Title component is mount');

        this.animateTitles();
    }
    componentWillUnmount()
    {
        console.log('Title component is unmount');
        clearInterval(this.titleInterval);
    }

        animateTitles=()=>
        {
           this.setInterval= setInterval(()=>{
                const titleIndex=(this.state.titleIndex+1)%TITLES.length;

                this.setState({titleIndex});
            },4000);
            console.log('this.titleIntervel',this.titleIntervel);
 
        }
    
    render(){
    const title=TITLES[this.state.titleIndex];
    return(
        <p>I am  {title}</p>
    )

}
}

export default Title;