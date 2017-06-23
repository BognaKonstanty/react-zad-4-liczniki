var Counter = React.createClass({
    propTypes: {
      name: React.PropTypes.string.isRequired,
    },

    getInitialState: function() {
        return {
            counter: 0
        };
    },

    componentWillMount: function() {
        console.log('before render');
    },
    
    

    componentDidMount: function() {
        console.log();
    },

    componentWillReceiveProps: function() {
        console.log();
    },

    shouldComponentUpdate: function() {
        console.log();
    },

    componentWillUpdate: function() {
        console.log();
    },

    componentDidUpdate: function() {
        console.log();
    },


    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },
  
    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function() {
        return React.createElement('div', {}, 
            React.createElement('div', {onClick: this.increment, className: 'buttoninc btn btn-success'}, 'click here to inc'),
            React.createElement('div', {onClick: this.decrement, className: 'buttondec btn btn-danger'}, 'click here to dec'),
            React.createElement('button', {className:'btn btn-secondary'}, this.props.name + ' ' + this.state.counter)
        );
    }

    
});

var element = React.createElement('div', {},
    React.createElement(Counter, {name: "Licznik 1"}),
    React.createElement(Counter, {name: "Licznik 2"})
);
ReactDOM.render(element, document.getElementById('app'));


