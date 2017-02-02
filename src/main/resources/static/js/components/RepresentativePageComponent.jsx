var RepresentativePageComponent = React.createClass({

    render: function() {

        var partyList = this.props.parties.map(function(el) {

            return (
                <tr key={el.partyId}>
                    <td>{el.partyName}</td>
                    <td>
                        <div className="form-group">
                            <input type="number" className="form-control" required min="0"/>
                        </div>
                    </td>
                </tr>
            );
        });

        var candidateList = this.props.candidates.map(function(el) {

            return (
                <tr key={el.personCode}>
                    <td>{el.firstName} {el.lastName}</td>
                    <td>
                        <div className="form-group">
                            <input type="number" className="form-control" required min="0"/>
                        </div>
                    </td>
                </tr>
            );
        });

        return (
            <div>

                <div className="text-center" style={{
                    marginBottom: '60px'
                }}>
                    <strong>
                        <h1>ATSTOVO PUSLAPIS</h1>
                    </strong>
                </div>

                <div className=" container-fluid">
                    <div className="row">
                        <div className="col-sm-6">

                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Kandidatas</th>
                                        <th>Balsai</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {candidateList}
                                    <tr>
                                        <td style={{
                                            color: 'red',
                                            fontWeight: 'bold'
                                        }}>NEGALIOJANTYS BALSAI</td>
                                        <td>
                                            <div className="form-group">
                                                <input type="number" className="form-control" required min="0"/>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{
                                            color: 'skyblue',
                                            fontWeight: 'bold'
                                        }}>LAIKAS (auto)</td>
                                        <td>
                                            <button type="submit" className="btn btn-success">ĮKELTI</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                        <div className="col-sm-6">

                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Partijas</th>
                                        <th>Balsai</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    {partyList}
                                    <tr>
                                        <td style={{
                                            color: 'red',
                                            fontWeight: 'bold'
                                        }}>NEGALIOJANTYS BALSAI</td>
                                        <td>
                                            <div className="form-group">
                                                <input type="number" className="form-control" required min="0"/>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{
                                            color: 'skyblue',
                                            fontWeight: 'bold'
                                        }}>LAIKAS (auto)</td>
                                        <td>
                                            <button type="submit" className="btn btn-success">ĮKELTI</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

window.RepresentativePageComponent = RepresentativePageComponent;
