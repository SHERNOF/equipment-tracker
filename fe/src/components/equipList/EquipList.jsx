import './equipList.scss'
import data from '../../data.js'

import React, { Component } from 'react';

class EquipList extends Component {
    constructor(){
        super()
        this.state = {
            lists: data
        }
    }
    render() {
        const {lists} = this.state
        console.log(lists[0].pressureKit)
        return (
            <div className="equipList">

                <div className='equip-title'>
                    <div className='title'>
                        <span className='span-title'>Lab</span>&nbsp;Equipment List
                    </div>
                    
                    <div className='controls'>
                        <button className='button-lab'>Lab</button>
                        <button className='button-van'>Van</button>
                    </div>
                    
                </div>

                <div className='equip-list'>  
                    <div className='pressure'>
                        <div className='arrows'>
                            <span>&#10094;</span>
                            <span>&#10095;</span>
                        </div>
                        
                        {
                            lists[0].pressureKit.filter((list, idx) => idx < 7)
                            .map( list => 
                                
                                <div key={list.id} className='circle'>{list.number}</div>   

                                
                            )
                        }
                        

                        
                    </div>
                </div>


                <div className="equip-details">
                    
                </div>

            </div>

        );
    }
}

export default EquipList;

