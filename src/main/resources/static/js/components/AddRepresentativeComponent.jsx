var AddRepresentativeComponent = React.createClass({

    render: function() {

        var props = this.props;

        return (

            <div>

                <br/>
                <h2 className="text-center">Apylinkiu sarasas</h2>
                <hr/>
                <br/>

                <form onSubmit={this.props.onSubmitAddRepresentativeData}>
                    <div className="form-group row">
                        <label htmlFor="example-text-input1" className="col-2 col-form-label">Atstovo vardas</label>
                        <div className="col-10">
                            <input className="form-control" type="text" id="example-text-input1" onChange={props.onChangeInputRepresentativeData('firstName')}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="example-search-input1" className="col-2 col-form-label">Atstovo pavarde</label>
                        <div className="col-10">
                            <input className="form-control" type="text" id="example-search-input1" onChange={props.onChangeInputRepresentativeData('lastName')}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="example-email" className="col-2 col-form-label">Atstovo Vartotojo Vardas</label>
                        <div className="col-10">
                            <input className="form-control" type="text" id="example-email" onChange={props.onChangeInputRepresentativeData('userName')}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="example-email-input1" className="col-2 col-form-label">Atstovo slaptazodis</label>
                        <div className="col-10">
                            <input className="form-control" type="password" id="example-email-input1" onChange={props.onChangeInputRepresentativeData('password')}/>
                        </div>

                    </div>
                    <button type="submit" className="btn btn-primary">
                        <strong>SUKURTI</strong>
                    </button>
                </form>
            </div>
        );
    }
});

window.AddRepresentativeComponent = AddRepresentativeComponent;
