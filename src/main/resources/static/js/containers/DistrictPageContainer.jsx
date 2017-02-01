var DistrictPageContainer = React.createClass( {

    getInitialState: function() {
        return {
            districts: [],
            district: {
                districtName: '',
                districtAddress: '',
                districtElectors: '',
                countyId: this.props.params.id
            },
            county: ""
        };
    },

    componentDidMount: function() {
        var _this = this;

        axios.get( '/api/county/districts/' + this.props.params.id ).then( function( response ) {

            _this.setState( { districts: response.data });

        }).catch( function( error ) {
            console.log( error );
        });

        axios.get( '/api/county/' + this.props.params.id ).then( function( response ) {

            _this.setState( { county: response.data });

        }).catch( function( error ) {
            console.log( error );
        });

    },


    handleOnSubmitAddDistrict: function() {
        var _this = this;
        axios.post( '/api/district', this.state.district ).then( function( response ) {
            console.log( "district created" );

            axios.get( '/api/county/districts/' + _this.props.params.id ).then( function( response ) {

                _this.setState( { districts: response.data });

            }).catch( function( error ) {
                console.log( error );
            });
        }).catch( function( error ) {
            console.log( error );
        });

    },

    handleOnClickDeleteDistrict: function( district ) {
        var _this = this;
        return function() {
            axios.delete( '/api/district/' + district.id ).then( function( response ) {
                console.log( "district deleted" );
                axios.get( '/api/county/districts/' + _this.props.params.id ).then( function( response ) {
                    _this.setState( { districts: response.data });
                });
            });
        };

    },

    handleOnChangeInputData: function( field ) {
        var _this = this;
        return function( e ) {
            var district = _this.state.district;
            district[field] = e.target.value;
            _this.setState( { district: district });
        };
    },

    render: function() {

        return (
            <div>

                <DistrictPageComponent county={this.state.county} districts={this.state.districts} onSubmitAddDistrict={this.handleOnSubmitAddDistrict} onChangeInputDistrictData={this.handleOnChangeInputData} onClickDeleteDistrict={this.handleOnClickDeleteDistrict} />

            </div>
        );
    }
});

window.DistrictPageContainer = DistrictPageContainer;
