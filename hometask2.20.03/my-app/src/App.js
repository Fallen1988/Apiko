import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggled: true,
            backgroundColor: 'red',
            textContent: 'Text content',
        };
        this.toggleColor = this.toggleColor.bind(this)
    }

    toggleColor() {
        if ( this.state.toggled ) {
            this.setState({
                backgroundColor: 'green',
                toggled: false
            });
        } else {
            this.setState({
                backgroundColor: 'red',
                toggled: true
            });
        }
    }

    render () {
        return (
            <div style={{backgroundColor: this.state.backgroundColor}}>
                <span>Hello World<br /></span>
                This is just a text node
                <div>{this.state.textContent}</div>
                <button onClick={this.toggleColor}>Toggle Color</button>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root'),
);

export default App;
