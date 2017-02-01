var Link = ReactRouter.Link;

var CandidateSearchResultComponent = React.createClass({

    getInitialState: function() {
        return {
            displayedCandidates: []
        };
    },

    handleSearch: function(event) {
        var searchQuery = event.target.value.toLowerCase();
        var displayedCandidates = this.props.candidates.filter(function(el) {
            var searchValue = (el.lastName.toLowerCase());
            return searchValue.indexOf(searchQuery) !== -1;
        });

        this.setState({
            displayedCandidates: displayedCandidates
        });
    },

    
    
    
    render: function() {
        var list = this.state.displayedCandidates.map(function(el) {

            return (
                <tr key={el.personCode}>
                    <td>{el.firstName}</td>
                    <td>{el.lastName}</td>
                    <td>{el.date}</td>
                    <td>{el.party}</td>
                    <td>
                        <Link to={'/candidate-profile/' + el.personCode} className="btn btn-info">Placiau</Link>
                    </td>
                </tr>
            );
        });
        return (
            <div>
                <input type="text" placeholder="Search..." className="search-field" onChange={this.handleSearch} />
                <h2 className="text-center">Paieskos Rezultatai</h2><hr/><br/>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Birth Date</th>
                            <th>Party Name</th>
                        </tr>
                    </thead>
                    <tbody >
                        {list}
                    </tbody>
                </table>

            </div>
        );
    }
});

window.CandidateSearchResultComponent = CandidateSearchResultComponent;
