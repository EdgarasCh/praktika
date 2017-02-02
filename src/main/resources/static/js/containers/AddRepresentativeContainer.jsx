var AddRepresentativeContainer = React.createClass({

    getInitialState: function() {

        return {
            representative: {
                districtId: this.props.params.id,
                firstName: '',
                lastName: '',
                password: '',
                userName: ''
            }
        };

    },

    handleOnChangeInputRepresentativeData: function(field) {
        var _this = this;
        return function(e) {
            var representative = _this.state.representative;
            representative[field] = e.target.value;
            _this.setState({representative: representative});
        };
    },

    handleOnSubmitAddRepresentativeData: function() {

        axios.post('/api/representative', this.state.representative).then(function(response) {
            console.log("representative created");
        });

    },

    render: function() {

        return (
            <div>

                <AddRepresentativeComponent onSubmitAddRepresentativeData={this.handleOnSubmitAddRepresentativeData} onChangeInputRepresentativeData={this.handleOnChangeInputRepresentativeData}/>

            </div>
        );
    }
});

window.AddRepresentativeContainer = AddRepresentativeContainer;
