var React= require('react')
var Dogs=require('./Dogs')
var ReactRouter=require('react-router-dom');
var Router= ReactRouter.BrowserRouter;
var Route= ReactRouter.Route;
var Nav= require('./Nav');
var Home= require('./Home');
var Battle= require("./Battle")
var Results= require('./Results')
var Switch= ReactRouter.Switch;


//The component
class App extends React.Component{
    render(){
        return(
            <Router>
                <div className="container">
                    <Nav/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/battle" component={Battle}/>
                        <Route path="/battle/results" component={Results}/> 
                        <Route path="/dogs" component={Dogs}/>
                        <Route render={function(){
                            return 'Not found'
                        }}/>
                    </Switch>  
                </div>
            </Router>
            
        )
    }  
} 

module.exports= App