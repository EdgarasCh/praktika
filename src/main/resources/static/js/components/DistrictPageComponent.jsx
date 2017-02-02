var Link = ReactRouter.Link;

var DistrictPageComponent = React.createClass( {

    render: function() {

        var props = this.props;

        var districtList = this.props.districts.map( function( district ) {

            return (
                <tr key={district.id}>
                    <td>
                        <h3>{district.districtName}</h3>
                    </td>


                    <td>
                        <h3>{district.districtAddress}</h3>
                    </td>
                    <td>
                        <h3>{district.districtElectors}</h3>
                    </td>


                    <td>
                        <h3><Link to={"/add-representative/" + district.id} className="btn btn-success">Prideti Atsova</Link></h3>
                    </td>

                    <td>
                        <input type="button" value="TRINTI" onClick={props.onClickDeleteDistrict( district )}></input>
                    </td>
                </tr>
            );
        });

        return (

            <div>
                <h2 className="text-center">Apygardos pavadinimas: {this.props.county.countyName}<br /></h2>

                <h3 className="text-center">APYLINKES REGISTRAVIMAS<br /><hr /></h3>
                <form onSubmit={props.onSubmitAddDistrict}>
                    <div className="form-group row">
                        <label htmlFor="example-text-input" className="col-2 col-form-label">Apylinkes pavadinimas</label>
                        <div className="col-10">
                            <input className="form-control" type="text" id="example-text-input" onChange={props.onChangeInputDistrictData( 'districtName' )} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="example-search-input" className="col-2 col-form-label">Apylinkes adresas</label>
                        <div className="col-10">
                            <input className="form-control" type="text" id="example-search-input" onChange={props.onChangeInputDistrictData( 'districtAddress' )} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="example-email-input" className="col-2 col-form-label">Rinkeju skaicius</label>
                        <div className="col-10">
                            <input className="form-control" type="number" id="example-email-input" min="0" onChange={props.onChangeInputDistrictData( 'districtElectors' )} />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        <strong>SUKURTI</strong>
                    </button>
                </form>

                <br />
                <h2 className="text-center">Apylinkiu sarasas</h2>
                <hr />
                <br />

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Pavadinimas</th>
                            <th>Adresas</th>
                            <th>Rinkeju skaicius</th>
                        </tr>
                    </thead>
                    <tbody >
                        {districtList}
                    </tbody>
                </table>

            </div>
        );
    }
});

window.DistrictPageComponent = DistrictPageComponent;
