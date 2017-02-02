var Link = ReactRouter.Link;

var NavigationBarComponent = React.createClass({

    getInitialState: function() {
        return {candidate: ""}
    },

    onSearchSubmit: function(e) {

        e.preventDefault();

        var searchInput = this.refs.search.value;

        this.setState({candidate: searchInput});
        if (searchInput.length > 0) {
            this.refs.search.value = '';

        }

        this.context.router.push('/search-result');

    },

    render: function() {
        return (

            <div>
                <nav className="navbar navbar-default navbar-static-top" role="navigation">

                    <div className="navbar-header">
                        <Link to="/" className="navbar-brand">
                            <i className="glyphicon glyphicon-home"></i>
                        </Link>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

                        <div className="col-sm-3 col-md-3">
                            <form className="navbar-form" role="search" onSubmit={this.onSearchSubmit}>
                                <div className="input-group">
                                    <input type="search" className="form-control" placeholder="Search" ref="search"/>
                                    <div className="input-group-btn">
                                        <button className="btn btn-default" type="submit">
                                            <i className="glyphicon glyphicon-search"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div>
                            <ul className="nav navbar-nav navbar-right">

                                <li>
                                    <Link to="/admin" activeClassName="active" activeStyle={{
                                        fontWeight: 'bold'
                                    }}>ADMIN</Link>
                                </li>

                                <li>
                                    <Link to="/representative" activeClassName="active" activeStyle={{
                                        fontWeight: 'bold'
                                    }}>ATSVOVAS</Link>
                                </li>

                                <li>
                                    <Link to="/login" activeClassName="active" activeStyle={{
                                        fontWeight: 'bold'
                                    }}>Prisijungti</Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
        );

    }

});

NavigationBarComponent.contextTypes = {
    router: React.PropTypes.object.isRequired
};

window.NavigationBarComponent = NavigationBarComponent;
