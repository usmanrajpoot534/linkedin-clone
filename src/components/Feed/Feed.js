import { CalendarViewDay, CreateOutlined, EventNote, Image, Subscriptions } from '@mui/icons-material';
import React from 'react';
import './Feed.css';
import InputOption from './InputOption/InputOption';
import Post from './Post/Post';

function Feed() {
    // const [posts, setPosts] = useState([])
    // const sendPost = e => {
    //     e.preventDefault();
    //     // const postData = e.target[0].value;
    //     // setPosts([...posts, { message: postData, userName: 'Usman Arif', userProfile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkZTK04q5MAb3xxGj9xiBt-rOefqwu5X4jtg&s' }]);
    //     // e.target[0].value = '';
    // }

    return (
        <div className='feed'>
            <div className='feed-inputContainer'>
                <div className='feed-inputForm'>
                    <CreateOutlined />
                    <form>
                        <input type='text' ></input>
                        <button type='submit'>Send</button>
                    </form>
                </div>
                <div className='feed-inputOptions'>
                    <InputOption icon={Image} title='Photo' color='#70B5F9' />
                    <InputOption icon={Subscriptions} title='Video' color='#E7A33E' />
                    <InputOption icon={EventNote} title='Event' color='#C0CBCD' />
                    <InputOption icon={CalendarViewDay} title='Write article' color='#7FC15E' />
                </div>
            </div>

            {/* Posts */}
            {/* {posts.map((post) => (<Post />))} */}
            <Post userName='Usman Arif' userProfile='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkZTK04q5MAb3xxGj9xiBt-rOefqwu5X4jtg&s' description='First post on this platform' message='Welcome here' />
        </div>
    );
}

export default Feed