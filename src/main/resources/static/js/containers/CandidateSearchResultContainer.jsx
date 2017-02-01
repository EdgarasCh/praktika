var CandidateSearchResultContainer = React.createClass({

    getInitialState: function() {
        return {candidates: []};
    },

    componentWillMount: function() {
        var _this = this;
        axios.get('/api/candidate').then(function(response) {

            _this.setState({candidates: response.data});

        }).catch(function(error) {
            console.log(error);
        });

    },

    render: function() {
        return (<CandidateSearchResultComponent candidates={this.state.candidates}/>);
    }
});

window.CandidateSearchResultContainer = CandidateSearchResultContainer;
