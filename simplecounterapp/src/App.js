import React from 'react';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {counter: 0};
    }

    render() {
        return(
        <div>
            <header className="app-header">
                <h1 className="counter">{this.state.counter}</h1>
                <button className="button" onClick={() => this.setState({counter: this.state.counter + 1})}>Click to count</button>
            </header>
        </div>
        )
    }
}

function count() {
    // Wie greife ich den Zaehler in der Komponente zu?
}

export default App;