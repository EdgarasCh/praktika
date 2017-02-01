var Link = ReactRouter.Link;

var App = React.createClass( {



    render: function() {
        return (
            <div >

                <NavigationBarComponent />
                {this.props.children}


                <div style={{ height: '100px', backgroundColor: 'white', marginBottom: '20px' }}></div>

            </div> );
    }
});





var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={HomePageContainer} />
            <Route path="/hello-world" component={HelloWorldComponent} />
            <Route path="/county-list" component={CountyListContainer} />
            <Route path="/search-result" component={CandidateSearchResultContainer} />
            <Route path="/candidate-profile/:personCode" component={CandidateProfilePageContainer} />
            <Route path="/admin" component={AdminPageContainer} />
            <Route path="/county/districts/:id" component={DistrictPageContainer} />
            <Route path="/representative" component={RepresentativePageContainer} />
            <Route path="/add-representative/:id" component={AddRepresentativeContainer} />
            <Route path="/login" component={LoginContainer} />
            <Route path="*" component={NoMatch} />
        </Route>
    </Router>
), document.getElementById( 'root' ) );




