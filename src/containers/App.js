import React, { Component } from 'react';
import './App.css';
import CardList from '../components/CardList';
import { Kitties } from '../components/Kitties';
import SearchBar from '../components/SearchBar';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

class App extends Component {
    constructor() {
        super();
        this.state = {
            Kitties: Kitties,
            searchField: ""  
        }
    }
    
    onSearchChange = (event) =>{
        this.setState({ searchField: event.target.value });
    }

    render() {
        const { Kitties, searchField } = this.state;
        const filteredKitties = Kitties.filter(kitty => {
            return kitty.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return (
            <div className = 'tc'>
                <h1 className = 'f1'>Kitty Klowder</h1>
                <h4>Did you know a group of cats is called a clowder?
                <br />
                No? Well here is a clowder for you.</h4>
                <SearchBar searchChange = { this.onSearchChange } />
                <Scroll>
                    <ErrorBoundary>
                        <CardList Kitties = { filteredKitties } />
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    }
}

export default App;
