import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
           userInfo:{
            name:"Dummy",
            location:"Default",
           },
        };
    }
   async componentDidMount()
    {
        const data = await fetch("https://api.github.com/users/shikhar488");
        const json = await data.json();
        this.setState({
            userInfo:json,
        })
    }
    componentWillUnmount(){
        console.log("unmounyed");
    }
    render(){
        const {name,location,avatar_url}=this.state.userInfo;
       
        return (
            <div className="user-card">
                <img src={avatar_url} />
                <h3>Name : {name}</h3>
                <h4>Location : {location}</h4>
                <h4>Contact : @shikhar1001</h4>
            </div>
        );
    };
};
export default UserClass;