import ReactDOM from 'react-dom';
import React from 'react';
import AppHeader from './appHeader'
import AppFooter from './appFooter'
import {connect} from 'react-redux'
import {ErrorBoundary} from './ErrorBoundary'

//window.React = React
class SimpleComponent extends React.Component {
    
    getAppheader() {
        let header = <AppHeader/>
        return header
    }
    
    render() {
        console.log('here books: ', this.props)
        return (
            <div>
               <ErrorBoundary>
                    {this.getAppheader()}
                    <div id="mapD" style={{width: '100%', height: '700px'}}>
                        {'map'}
                    </div>
                    <footer>
                        <AppFooter copyRightTxt={this.props.messages}/>
                    </footer>
               </ErrorBoundary>
            </div>
        );
    }
}

ReactDOM.render(
    <SimpleComponent message="CopyRight@Swap"/>,
    document.querySelector('.js-app')
);


export default connect(SimpleComponent)

