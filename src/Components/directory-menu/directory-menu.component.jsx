import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelectorCreator, createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import MenuItem from '../menu-item/menu-item.component';
import { DirectoryMenuContainer } from './directory-menu.styles';



class DirectoryMenu extends Component {


    render() {

        const {sections} = this.props

        return(
            <DirectoryMenuContainer>
                {
                    sections.map( ({id , ...otherSectionProps}) => (
                        <MenuItem key={id} {...otherSectionProps}/>
                    ) 
                    
                    )
                }
            </DirectoryMenuContainer>

        )
    }

}

const mapStateToProps = createStructuredSelector({
  sections : selectDirectorySections
})



export default connect(mapStateToProps)(DirectoryMenu);
    