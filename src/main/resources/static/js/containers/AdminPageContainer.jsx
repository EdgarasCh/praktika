var AdminPageContainer = React.createClass( {

    getInitialState: function() {
        return {
            counties: [],
            parties: [],
            multiPartyListFile: null,
            singlePartyListFile: null,
            party: {
                partyId: "",
                partyName: ""
            },
            county: {
                countyName: ""
            },
            partyIdToDelete: "",
            partyIdForCandidateList: "",
            countyIdForCandidateList: ""




        };
    },

    componentWillMount: function() {
        var _this = this;

        axios.get( '/api/party' ).then( function( response ) {

            _this.setState( { parties: response.data });

        }).catch( function( error ) {
            console.log( error );
        });


    },

    
    componentDidMount: function() {
        var _this = this;


        axios.get( '/api/county' ).then( function( response ) {

            _this.setState( { counties: response.data });

        }).catch( function( error ) {
            console.log( error );
        });

    },

    handleOnSubmitAddCounty: function(e) {
        e.preventDefault();
        
        var _this = this;
        axios.post( '/api/county', this.state.county ).then( function( response ) {
            console.log( 'county ' + _this.state.county['countyName'] + ' added' );

            axios.get( '/api/county' ).then( function( response ) {

                _this.setState( { counties: response.data });

            }).catch( function( error ) {
                console.log( error );
            });

        });
    },

    handleOnDeleteCounty: function( county ) {
        var _this = this;
        return function() {
            axios.delete( '/api/county/' + county.countyId ).then( function( response ) {
                console.log( 'county ' + county.countyName + ' deleted' );
                axios.get( '/api/county' ).then( function( response ) {
                    _this.setState( { counties: response.data });
                });
            });
        };

    },

    handleOnSubmitAddParty: function(e) {
        e.preventDefault();
        
        var _this = this;

        axios.post( '/api/party', _this.state.party ).then( function( response ) {
            console.log( 'party ' + _this.state.party['partyName'] + ' added' );
            axios.get( '/api/party' ).then( function( response ) {
                _this.setState( { parties: response.data });
            });
        });


    },

    handleOnChangeInputPartyData: function( field ) {
        var _this = this;
        return function( e ) {
            var party = _this.state.party;
            party[field] = e.target.value;
            _this.setState( { party: party });
        };
    },

    handleOnChangeInputCountyData: function( field ) {
        var _this = this;
        return function( e ) {
            var county = _this.state.county;
            county[field] = e.target.value;
            _this.setState( { county: county });
        };
    },


    handleOnChangeInputPartyIdToDelete: function( el ) {


        this.setState( { partyIdToDelete: el.target.value });
    },


    // Kazkodel veikia tik @PostMapping kontroleris back-end'e

    handleOnSubmitDeleteParty: function(e) {
        e.preventDefault();
        var _this = this;

        axios.post( '/api/party/' + _this.state.partyIdToDelete ).then( function( response ) {
            console.log( 'party who\'s ID:' + _this.state.partyIdToDelete + ' deleted' );

            axios.get( '/api/party' ).then( function( response ) {
                _this.setState( { parties: response.data });
            });

        });

        axios.post( '/api/candidate/party/' + _this.state.partyIdToDelete ).then( function( response ) {
            console.log( `candidate list of party who\'s ID:  ${_this.state.partyIdToDelete} deleted` );
        });

    },
    
  handleOnChangeSelectPartyIdForCandidateList: function(e) {
      console.log( e.target.value );
        this.setState( { partyIdForCandidateList: e.target.value });
    },
    

    handleOnChangeMultiPartyListFileInput: function( file ) {
        this.setState( { multiPartyListFile: file });
    },

    handleOnSubmitMultiPartyList: function( e ) {
        e.preventDefault();
        console.log(this.state.multiPartyListFile );
      
        var _this = this;
        var data = new FormData();
        var config = {
            headers: {
                'Content-Type': 'multipart/form-data'           
            }
        };
        data.append('file',  _this.state.multiPartyListFile );
        data.append('partyId',  _this.state.partyIdForCandidateList );
        axios.post('/api/candidate/multiPartyListUpload', data, config )
            .then( function( response ) {
                
                console.log( "multi party list added" );
            }) .catch(function (error) {
               
                    console.error(error.response.data.message);
                 
                  
                });


    },
    
    
   

    render: function() {
        return ( <AdminPageComponent
            parties={this.state.parties}
            counties={this.state.counties}
                
            onClickDeleteCounty={this.handleOnDeleteCounty}
                
            onSubmitAddCounty={this.handleOnSubmitAddCounty}
            onSubmitAddParty={this.handleOnSubmitAddParty}
            onChangeInputPartyData={this.handleOnChangeInputPartyData}
            onChangeInputCountyData={this.handleOnChangeInputCountyData}
                
            onChangeInputPartyIdToDelete={this.handleOnChangeInputPartyIdToDelete}
            onSubmitDeleteParty={this.handleOnSubmitDeleteParty}
        
            onChangeSelectPartyIdForCandidateList={this.handleOnChangeSelectPartyIdForCandidateList}        
            onChangeMultiPartyListFileInput={this.handleOnChangeMultiPartyListFileInput}
            onSubmitMultiPartyList={this.handleOnSubmitMultiPartyList}

                
            onClickSelectCountyIdForCandidateList={this.handleOnClickSelectCountyIdForCandidateList}        
            onChangeSinglePartyListFileInput={this.handleOnChangeSinglePartyListFileInput}
            onSubmitSinglePartyList={this.handleOnSubmitSinglePartyList}



            /> );
    }
});

AdminPageContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
};

window.AdminPageContainer = AdminPageContainer;
