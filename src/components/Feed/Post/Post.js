import { ChatOutlined, SendOutlined, ShareOutlined, ThumbUpAltOutlined } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import React from 'react';
import InputOption from '../InputOption/InputOption';
import './Post.css';

function Post(props) {
    return (
        <div className='post'>
            <div className='post-header'>
                <Avatar src={props.userProfile} />
                <div className='post-info'>
                    <h2>{props.userName}</h2>
                    <p>{props.description}</p>
                </div>
            </div>
            {/* <div className='post-time'>
                <props.timeIcon className='timeIcon' />
                <small>{(props.time)?.toDate().toLocaleString()}</small>
            </div> */}
            <div className='post-body'>
                <p>{props.message}</p>
            </div>
            <div className='post-footer'>
                <InputOption icon={ThumbUpAltOutlined} title='Like' />
                <InputOption icon={ChatOutlined} title='Comment' />
                <InputOption icon={ShareOutlined} title='Share' />
                <InputOption icon={SendOutlined} title='Send' />
            </div>
        </div>
    );
}

export default Post