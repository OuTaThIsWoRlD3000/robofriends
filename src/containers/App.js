import React, { Component } from "react";
import Cardlist from "../components/cardlist";
import SearchBox from '../components/searchbox';
import './App.css';
import Scroll from '../components/scroll'

class App extends Component {        
    constructor(props) {
        super(props);
        this.state = {
            robots: [],
            searchfield: "",
        };
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}))
    }    

    onsearchchange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    render() {
        const { robots , searchfield} = this.state;
        const filteredrobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });
        if (robots.length === 0){
            return <h1 className="tc">Loading</h1>
        }
        else {
            return(
                <div className="tc">
                 <h1>RoboFreinds</h1>
                 <SearchBox searchchanges={this.onsearchchange}/>
                 <Scroll>
                    <Cardlist robots={filteredrobots}/>
                 </Scroll>
                </div>
        )
        }

    }
}
export default App;