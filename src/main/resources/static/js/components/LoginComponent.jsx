
var LoginComponent = React.createClass( {


    render: function() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-4 col-md-offset-4">
                        <h1 className="text-center login-title">Prisijungimas</h1>
                        <div className="account-wall">
                            <img className="profile-img" src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120"
                                alt="" />
                            <form className="form-signin">
                                <input type="text" className="form-control" placeholder="Prisijungimo vardas" required />
                                <input type="password" className="form-control" placeholder="Slaptazodis" required />
                                <button className="btn btn-lg btn-primary btn-block" type="submit">
                                    Sign in</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>


        );
    }
});



window.LoginComponent = LoginComponent;
