import React, { Component } from 'react';
import './App.css';
import CardList from '../components/CardList';
import { Kitties } from '../components/Kitties';
import SearchBar from '../components/SearchBar';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

//redux imports
import { setSearchField, requestRobots } from '../actions';
import { connect } from 'react-redux';

//points state to the reducer 
const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

//dispatch = flux way of triggering the action
//dispatch so the reducers are aware of it 
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => requestRobots(dispatch) 
    }
}

class App extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         Kitties: Kitties 
    //     }
    // }

    componentDidMount() {
        // console.log('store', this.props.store)
        // console.log('searchField', this.props.searchField)
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(response => response.json()) 
        //     .then(users => {this.setState({ robots: users})});
        this.props.onRequestRobots();
    }
    
    render() {
        // const { Kitties } = this.state;
        const { searchField, onSearchChange, robots, isPending } = this.props;
        const filteredKitties = Kitties.filter(kitty => {
            return kitty.name.toLowerCase().includes(searchField.toLowerCase());
        })

        return (isPending) ?
                <h1> Loading </h1> :
        (
            <div className = 'tc'>
                <h1 className = 'f1'>Kitty Klowder</h1>
                <h4>Did you know a group of cats is called a clowder?
                <br />
                No? Well here is a clowder for you.</h4>
                <SearchBar searchChange = { onSearchChange } />
                <Scroll>
                    <ErrorBoundary>
                        <CardList Kitties = { filteredKitties } />
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

//connect is a higher order function, 
//so it runs first and returns another function