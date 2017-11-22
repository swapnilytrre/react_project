import React from 'react'

export default class AppFooter extends React.Component {
    
    render() {
        console.log('footer ..',this.props)
        return (
            <div id="footerContainer">
                {this.props.copyRightTxt}
            </div>
        )
        
    }
}