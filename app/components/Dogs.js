var React= require('react')
var ReactDOM= require('react-dom')
var PropTypes=require('prop-types')
var api=require('../../utils/api')

function SelectDog(props){
    var dogs=["All","Java","Swift", "JavaScript","C++"]
    return(
        <ul className="dogs">
            {dogs.map(function(dog){
                return(
                    <li
                    style={dog === props.selectedDog ? {color:'red'} : null}
                    onClick={props.onSelect.bind(null,dog)}
                    key={dog}>
                        {dog} 
                    </li>
                ) 
            })
            }
        </ul>
 )
}

function RepoGrid(props){
    return(
        <ul className="popular-list">
            {props.repo.map(function(repo,index){
                return(
                    <li key={repo.name} className='popular-item'>
                        <div className="popular-rank">
                            #{index+1}
                            <ul className="space-list-items">
                                <li>
                                    <img
                                        className='avatar'
                                        src={repo.owner.avatar_url}
                                        alt={'Avatar for '+ repo.owner.login}/>
                                </li>
                                <li><a href={repo.html_url}>{repo.name}</a></li>
                                <li>@{repo.owner.login}</li>
                                <li>{repo.stargazers_count}</li>
                            </ul>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}

SelectDog.propTypes={
    selectedDog:PropTypes.string.isRequired,
    onSelect:PropTypes.func.isRequired
}

RepoGrid.propTypes={
    repo:PropTypes.array.isRequired,
}
//The component
class Dogs extends React.Component{
    constructor(props){
        super(props)
        this.state={
            selectedDog: "All",
            repos: null
        }
        this.updateDog=this.updateDog.bind(this)
    }
    componentDidMount(){
       this.updateDog(this.state.selectedDog)
    }
    
    updateDog(dog){
        this.setState(function(){
            return{
                selectedDog:dog,
                repos:null
            }
        })

        api.fetchPopularRepos(dog)
        .then(function(repos){
            console.log(repos);
            this.setState(function(){
                return{
                    repos:repos
                }
            })
        }.bind(this));     
    }

    render(){
        return(
            <div>
                <SelectDog
                selectedDog={this.state.selectedDog}
                onSelect={this.updateDog}/>
                {!this.state.repos
                ?<p>Loading</p>
                : <RepoGrid
                repo={this.state.repos}
            />}
               
            </div>
    
        )
    }
}

module.exports= Dogs;