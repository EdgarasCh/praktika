var CandidateProfilePageContainer = React.createClass({

    getInitialState: function() {
        return {candidate: []};
    },

    componentWillMount: function() {
        var _this = this;
        axios.get('/api/candidate/' + this.props.params.personCode).then(function(response) {

            _this.setState({candidate: response.data});

        }).catch(function(error) {
            console.log(error);
        });

    },

    render: function() {
        return (<CandidateProfilePageComponent candidate={this.state.candidate}/>);
    }
});

window.CandidateProfilePageContainer = CandidateProfilePageContainer;
