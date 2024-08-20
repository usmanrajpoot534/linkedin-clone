import { CalendarViewDay, CreateOutlined, EventNote, History, Image, Subscriptions } from '@mui/icons-material';
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from "firebase/firestore";
import React, { useEffect, useState } from 'react';
import { firestore } from '../../firebase/firebase';
import './Feed.css';
import InputOption from './InputOption/InputOption';
import Post from './Post/Post';

function Feed() {
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const postsRef = collection(firestore, 'posts');
        const q = query(postsRef, orderBy('timestamp', 'desc'));

        const unsubscribe = onSnapshot(q, (snapshot) => {
            setPosts(snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data()
            })));
        });

        // Cleanup function
        return () => unsubscribe();
    }, []);

    const sendPost = async (e) => {
        e.preventDefault();
        try {
            addDoc(collection(firestore, 'posts'), {
                userName: 'Usman Arif',
                userProfile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkZTK04q5MAb3xxGj9xiBt-rOefqwu5X4jtg&s',
                description: 'testing',
                message: input,
                timestamp: serverTimestamp(),
            });
            setInput('');
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    }

    return (
        <div className='feed'>
            <div className='feed-inputContainer'>
                <div className='feed-inputForm'>
                    <CreateOutlined />
                    <form onSubmit={sendPost}>
                        <input
                            type='text'
                            placeholder="What's on your mind?"
                            value={input}
                            onChange={e => setInput(e.target.value)}
                        />
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
            {posts.map(({ id, data }) => (
                <Post
                    key={id}
                    userName={data.userName}
                    userProfile={data.userProfile}
                    description={data.description}
                    timeIcon={History}
                    message={data.message}
                    time={data.timestamp}
                />
            ))}
        </div>
    );
}

export default Feed;