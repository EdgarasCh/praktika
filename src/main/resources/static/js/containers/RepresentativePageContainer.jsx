var RepresentativePageContainer = React.createClass({

    getInitialState: function() {
        return {candidates: [], parties: []};
    },

    componentWillMount: function() {
        var _this = this;

        axios.get('/api/candidate').then(function(response) {
            _this.setState({candidates: response.data});
        });

        axios.get('/api/party').then(function(response) {
            _this.setState({parties: response.data});
        });
    },

    render: function() {

        return (<RepresentativePageComponent candidates={this.state.candidates} parties={this.state.parties}/>);
    }
});

window.RepresentativePageContainer = RepresentativePageContainer;
