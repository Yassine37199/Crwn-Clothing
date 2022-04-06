import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelectorCreator, createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import MenuItem from '../menu-item/menu-item.component';

import './directory-menu.styles.scss';



class DirectoryMenu extends Component {


    render() {

        const {sections} = this.props

        return(
            <div className='directory-menu'>
                {
                    sections.map( ({id , ...otherSectionProps}) => (
                        <MenuItem key={id} {...otherSectionProps}/>
                    ) 
                    
                    )
                }
            </div>

        )
    }

}

const mapStateToProps = createStructuredSelector({
  sections : selectDirectorySections
})



export default connect(mapStateToProps)(DirectoryMenu);
    