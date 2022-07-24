import React from 'react';
import {useEffect, useState} from "react";
import {usePosts} from "../hooks/usePosts";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {getPageCount} from "../utils/pages";
import MyButton from "../components/UI/Button/MyButton";
import MyModal from "../components/Modal/MyModal";
import PostForm from "../components/PostForm/PostForm";
import PostFilter from "../components/PostFilter/PostFilter";
import Loader from "../components/UI/Loader/Loader";
import PostList from "../components/PostList/PostList";
import Pagination from "../components/UI/Pagination/Pagination";
import '../App.css'

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [modal, setModal] = useState(false);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);



    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data);
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    });

    useEffect(() => {
        fetchPosts();
    }, [page]);

    const changePage = (page) => {
        setPage(page)
    }

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    };

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    };


    return (
        <div className="App">

            <MyButton onClick={() => setModal(true)}>
                Create post
            </MyButton>


            <MyModal
                visible={modal}
                setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>

            <hr style={{margin: '15px 0'}}/>
            <PostFilter
                filter={filter}
                setFilter={setFilter}/>

            {postError && <h1>Error :( $(postError)</h1>}

            {isPostsLoading
                ? <div style={{display: "flex", justifyContent: "center", marginTop: '100px', color: 'dodgerblue'}}>
                    <Loader/>
                </div>
                : <PostList remove={removePost} posts={sortedAndSearchPosts} name='Post List'/>
            }

            <Pagination
                page={page}
                changePage={changePage}
                totalPages={totalPages}
            />
        </div>
    );
};

export default Posts;