import User from "./User";
import UserClass from "./UserClass";
const About = ()=>{
    return (
        <div>
            <h1>About</h1>
            <h2>This is about page</h2>
            <UserClass name={"shikhar"} location={"delhi"}/>
        </div>
    );
};

export default About;