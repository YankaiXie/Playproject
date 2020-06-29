import {Menu, MenuItem} from 'semantic-ui-react'
import React from 'react'
import {Link} from 'react-router-dom'

class MyMenu extends React.Component{
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
        const props=this.props
        const menuItems=props.menuItems
        return <Menu inverted>
            {menuItems.map(function(it,ii){
                var name=it.name
                var route=it.route
                var color=it.color
                console.log(color)
                return <MenuItem as={Link} to={route} key={name} color={color}>
                    {name}
                </MenuItem>
            })}
        </Menu>
    }
}

export default MyMenu

