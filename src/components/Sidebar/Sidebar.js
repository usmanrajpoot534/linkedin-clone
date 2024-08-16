import { Avatar } from '@mui/material';
import React from 'react';
import './Sidebar.css';

function Sidebar() {
    const recentItem = (topic) => (
        <div className='sidebar-recentItem'>
            <span className='sidebar-hash'>#</span>
            <p>{topic}</p>
        </div>
    );

    return (
        <div className='sidebar'>
            <div className='sidebar-top'>
                <img className='sidebar-image' src='https://kruschecompany.com/wp-content/uploads/2022/09/Hero-image-for-analysis-of-international-Flutter-developer-salary-ranges-with-data-covering-Germany-Switzerland-United-Kingdom-Eastern-Europe-India-and-USA.jpg' alt='' />
                <Avatar className='sidebar-avatar' />
                <h2>Usman Arif</h2>
                <h4>usmanarif534@gmail.com</h4>
            </div>
            <div className='sidebar-stats'>
                <div className='sidebar-stat'>
                    <p>Who viewed you</p>
                    <p className='sidebar-statNumber'>2,543</p>
                </div>
                <div className='sidebar-stat'>
                    <p>Views on post</p>
                    <p className='sidebar-statNumber'>4,589</p>
                </div>
            </div>
            <div className='sidebar-bottom'>
                <p>Recent</p>
                {recentItem('Flutter')}
                {recentItem('Dart')}
                {recentItem('ReactJs')}
                {recentItem('Programming')}
                {recentItem('Computing')}
            </div>
        </div>
    )
}

export default Sidebar