import React from 'react';
import MyInput from "./UI/Input/MyInput";
import MyButton from "./UI/Button/MyButton";
import {useState} from "react";

const PostForm = ({create}) => {
    const [post, setPost] = useState( {title: '', body: ''})

    const addNewPost = (event) => {
        event.preventDefault()
        const newPost = {
            ...post,
            id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
    }

    return (
        <form>
            <MyInput
                value={post.title}
                onChange={event => setPost( {...post, title: event.target.value})}
                type="text"
                placeholder='post name'/>
            <MyInput
                value={post.body}
                onChange={event => setPost({...post, body: event.target.value})}
                type="text"
                placeholder='post description'/>
            <MyButton onClick={addNewPost}>Create post</MyButton>
        </form>
    );
};

export default PostForm;