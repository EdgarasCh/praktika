var CandidateProfilePageComponent = React.createClass({
    render: function() {
        return (
            <div>

                <h1 className="text-center">

                    KANDIDATAS
                    <br/>
                    <br/> {this.props.candidate.firstName}&nbsp;
                    {this.props.candidate.lastName}
                </h1>
                <div style={{
                    marginTop: '50px'
                }}>
                    <p>
                        <strong>Vardas:</strong>
                        {this.props.candidate.firstName}</p><br/>
                    <p>
                        <strong>Pavardė:</strong>
                        {this.props.candidate.lastName}</p><br/>
                    <p>
                        <strong>Gimimo data:</strong>
                        {this.props.candidate.date}</p><br/>
                    <p>
                        <strong>Partinė priklausomybė:</strong>
                        {this.props.candidate.party}</p><br/>
                    <p>
                        <strong>Aprašymas:</strong>
                        {this.props.candidate.description}</p><br/>
                </div>

            </div>
        );
    }
});

window.CandidateProfilePageComponent = CandidateProfilePageComponent;
