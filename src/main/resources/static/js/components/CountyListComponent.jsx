var CountyListComponent = React.createClass({

    render: function() {
        var list = this.props.counties.map(function(el) {

            return (
                <tr key={el.id}>

                    <td>
                        <h3>{el.id}</h3>
                    </td>
                    <td>
                        <h3>{el.countyName}</h3>
                    </td>

                </tr>
            );
        });

        return (
            <div>

                <table className="table table-striped ">
                    <thead>
                        <tr>

                            <th>
                                <h3>NR.</h3>
                            </th>
                            <th>
                                <h3>Apygardos Pavadinimas</h3>
                            </th>

                        </tr>
                    </thead>
                    <tbody >
                        {list}
                    </tbody>
                </table>

            </div>
        );
    }
});

window.CountyListComponent = CountyListComponent;
