var Link = ReactRouter.Link;

var HomePageComponent = React.createClass({
    render: function() {
        return (
            <div style={{
                fontFamily: 'Helvetica'
            }}>
                <div className="text-center">

                    <div style={{
                        marginTop: '30px',
                        marginBottom: '30px'
                    }}>
                        <div ><img className="img-circle" src="images/vote-icon.png"/></div>
                        <p style={{
                            color: '#00B1DD',
                            fontSize: '40px',
                            marginTop: '30px'
                        }}>
                            <strong>Rinkimų Svetainė</strong>
                        </p>
                    </div>

                    <div>
                        <div className="container-fluid">

                            <div className="row">
                                <div className="col-md-12" style={{
                                    backgroundColor: '#bae1ff'
                                }}>
                                    <Link to="/county-list" style={{
                                        color: 'white',
                                        textDecoration: 'none',
                                        fontSize: '35px'
                                    }}><br/>
                                        <strong>APYGARDŲ SĄRAŠAS</strong><br/><br/></Link>
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-md-4" style={{
                                    backgroundColor: '#ffb3ba'
                                }}>
                                    <Link to="/county-list" style={{
                                        color: 'white',
                                        textDecoration: 'none',
                                        fontSize: '35px'
                                    }}>
                                        <strong ><br/>KONSOLIDUOTI REZULTATAI<br/><br/><br/></strong>
                                    </Link>
                                </div>
                                <div className="col-md-4" style={{
                                    backgroundColor: '#ffdfba'
                                }}>
                                    <Link to="/county-list" style={{
                                        color: 'white',
                                        textDecoration: 'none',
                                        fontSize: '35px'
                                    }}>
                                        <strong ><br/>VIENMANDATĖS APYGARDOS REZULTATAI<br/><br/></strong>
                                    </Link>
                                </div>
                                <div className="col-md-4" style={{
                                    backgroundColor: '#baffc9'
                                }}>
                                    <Link to="/county-list" style={{
                                        color: 'white',
                                        textDecoration: 'none',
                                        fontSize: '35px'
                                    }}>
                                        <strong ><br/>DAUGIAMANDATĖS APYGARDOS REZULTATAI<br/><br/></strong>
                                    </Link>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        );
    }
});

window.HomePageComponent = HomePageComponent;
