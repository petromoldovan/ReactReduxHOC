import React from 'react'
import {connect} from 'react-redux';


export default function(ComposedComponent) {
    class Authentifiation extends React.Component {

        //////////////////////////////////1. define component level context
        static contextTypes = {
            router: React.PropTypes.object
        }

        /////////////////////////////////2. handle redirects properly
        componentWillMount() {
            if(!this.props.authenticated) {
                this.context.router.push('/')
            }
        }

        componentWillUpdate(nextProps) {
            if(!this.props.authenticated) {
                this.context.router.push('/')
            }
        }

        render() {
            console.log(this.context)
            return <ComposedComponent {...this.props} />
        }
    }

    function mapStateToProps(state) {
        return {authenticated: state.authenticated}
    }


    return connect(mapStateToProps)(Authentifiation);
}

//usage
// in some other files:

//import Authentication      <--import higher order component (HOC)
//import Resources          <--import target component

//const ComposedComponent = Authentication(Resources)     <--- WE PASS simple component to higer order compont and this is how we add smth to simple component

//render and pass props if needed
//<ComposedComponent resources={list} />
