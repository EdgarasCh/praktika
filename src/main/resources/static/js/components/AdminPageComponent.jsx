var Link = ReactRouter.Link;

var AdminPageComponent = React.createClass( {

    onChangeMultiPartyListFileInput : function(){
        this.props.onChangeMultiPartyListFileInput(this.refs.file.files[0]);
      },
      
//      onChangeSinglePartyListFileInput : function(){
//          this.props.onChangeSinglePartyListFileInput(this.refs.singlePartyListFile.files[0]);
//        },
    
    render: function() {
        var props = this.props;
        

        var partyList = this.props.parties.map( function( party,index ) {

        
            return (
                <option key={index} value={party.partyId} >
                    {party.partyName} (NR.{party.partyId}) 
                
                </option>
            );
        });



        var countyList = this.props.counties.map( function( county,index ) {

            return (
                <tr key={index}>
                    <td>
                        <h3>
                            <Link to={'/county/districts/' + county.countyId}>{county.countyName}</Link>
                        </h3>
                    </td>
                    <td>
                        <form onSubmit={props.onSubmitSinglePartyList}>
                            <div className="form-group">
                                <input  type="file" ref="singlePartyListFile" name="singlePartyListFile" />
                            </div>
                            <button  type="button" className="btn btn-success" >Prideti</button>
                        </form>
                    </td>
                    <td>
                        <button style={{ float: 'right' }} type="button" className="btn btn-danger" onClick={props.onClickDeleteCounty( county )}>TRINTI</button>
                    </td>
                </tr>
            );
        });

        return (
            <div>
                <h1 className="text-center" style={{
                    marginBottom: '100px'
                }}>Administratoriaus puslapis</h1>

                <div className=" container-fluid">
                    <div className="row">
                        <div className="col-sm-6">
                            <form onSubmit={props.onSubmitAddCounty}>
                                <fieldset>
                                    <legend>Naujos Apygardos Registravimas</legend>
                                    <div className="form-group">
                                        <label htmlFor="exampleInput">Apygardos pavadinimas</label>
                                        <input type="text" className="form-control" id="exampleInput" onChange={props.onChangeInputCountyData('countyName')} />
                                    </div>
                                    <button type="submit" className="btn btn-primary">
                                        <strong>SUKURTI</strong>
                                    </button>
                                </fieldset>
                            </form>
                        </div>
                        <div className="col-sm-6">
                            <form onSubmit={props.onSubmitAddParty}>
                                <fieldset>
                                    <legend>Partijos Registravimas ir Redagavimas</legend>
                                    <div className="form-group">
                                        <label htmlFor="exampleInput1">Partijos pavadinimas</label>
                                        <input type="text" className="form-control" id="exampleInput1" onChange={props.onChangeInputPartyData('partyName')} />
                                    </div>

                                       <div className="form-group">
                                                <label htmlFor="exampleInputNumber">Partijos Nr.
                                                </label>&nbsp;
                                                <input type="number" className="form-control-file" id="exampleInputNumber"   onChange={props.onChangeInputPartyData('partyId')}/>
                                            </div>

                                    <button type="submit" className="btn btn-primary">
                                        <strong>SUKURTI</strong>
                                    </button>
                                </fieldset>
                            </form>


                        </div>
                    </div>
                </div>

                <div className="container-fluid" style={{
                    marginTop: '60px',
                    marginBottom: '60px'
                }}>

                                        <div className="row">
                                        <div className="col-sm-0"></div>
                                        <div className="col-sm-6">
                                            <form onSubmit={props.onSubmitMultiPartyList}>
                                                <fieldset>
                                                    <legend>Partijos sąrašo registravimas</legend>
                                                    <div className="form-group">
                                                        <label htmlFor="exampleSelect1">Partijos pavadinimas</label>
                                                        <select className="form-control" id="exampleSelect1" name="partyId" onChange={props.onChangeSelectPartyIdForCandidateList}>
                                                            <option>---------</option>
                                                            {partyList}
                                                        </select>
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputFile">Partijos kandidatų sąrašas (CSV)</label>
                                                        <input onChange={this.onChangeMultiPartyListFileInput} ref="file" type="file" name="file" />
                                                    </div>
                                                    <button type="submit" className="btn btn-primary">
                                                        <strong>ĮKELTI</strong>
                                                    </button>
                                                </fieldset>
                                            </form>
                                        </div>
                        <div className="col-sm-6">


                                        <form onSubmit={props.onSubmitDeleteParty}>
                                        <fieldset>
                                            <legend>Partijos ir jos sąrašo trinimas</legend>
                                            <div className="form-group">
                                            <label htmlFor="exampleSelect1">Partijos pavadinimas(Partijos NR.)</label>
                                            <select className="form-control" id="exampleSelect1" onChange={props.onChangeInputPartyIdToDelete} >
                                               <option>--------</option>
                                        {partyList}
                                            </select>
                                        </div>

                                            <button type="submit" className="btn btn-danger">
                                                <strong>Trinti</strong>
                                            </button>
                                        </fieldset>
                                    </form>




                                        </div>
                    </div>
                </div>

                <h2 className="text-center">Esamos Apygardos</h2><hr />

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Pavadinimas</th>
                            <th>Apygardos vienmandatis kandidatų sąrašas(CSV)</th>
                        </tr>
                    </thead>
                    <tbody >
                        {countyList}
                    </tbody>
                </table>

            </div>
        );
    }
});

window.AdminPageComponent = AdminPageComponent;
