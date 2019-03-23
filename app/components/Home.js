var React= require('react')
var Link= require('react-router-dom').Link

class Home extends React.Component{
    render(){
        return(
            <div className="container">
                <h1> Whatever battle</h1>
                <Link className='button' to="/battle">
                    Battle
                </Link>
            </div>
        )
    }
}

module.exports= Home;