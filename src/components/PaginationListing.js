import React,{useState,useEffect}  from 'react';
import axios from 'axios';
import PostItem from './PostItem';
import Pagination from './Pagination';

const PaginationListing = () =>{
	const [posts, setPost] = useState([]);
	const [loading,setLoading] = useState(false);
	const [currentPage,setCurrentPage] = useState(1);
	const [postsPerPage,setPostPerPage] = useState(10);


	useEffect(() => {
		const fetchPosts = async() =>{
			setLoading(true);
			const oResult = await axios.get("https://jsonplaceholder.typicode.com/posts");
			setPost(oResult.data);
			setLoading(false);
		}

		fetchPosts();
	}, []);


	//Get current posts
	const indexOfLastPost = currentPage*postsPerPage;
	const indexOfFirstPost = indexOfLastPost-postsPerPage;
	const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost);


	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	const handleRemovePost = id => setPost(posts.filter((post) => post.id !== id));

	return(
		<>
			<div className='container default-margin'>
				<h1 className='text-center'>Posts</h1>
				<PostItem posts={currentPosts} loading={loading} handleRemovePost={handleRemovePost}/>
				<Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
			</div>
		</>
	);
}

export default PaginationListing;


