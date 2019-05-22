import React from 'react'
import {Switch,Route} from 'react-router-dom';
import Home from "./Home";
import Profile from "./Profile";
import Contact from "./Contact";
import Portofolio from "./Portofolio";

class Main extends React.Component{
    render(){
        return(
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/Home" component={Home}/>
                <Route path="/Profile" component={Profile}/>
                <Route path="/Contact" component={Contact}/>
                <Route path="/Portofolio" component={Portofolio}/>
            </Switch>
        )
    }
}

export default Main;