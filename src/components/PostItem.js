import React from 'react'

export default function PostItem({posts,loading,handleRemovePost}) {
	if (loading) {
		return <h2 className='text-center'>Loading.....</h2>
	}

	return (
		<ul className='list-group mb-4'>
			{
				posts.map(post =>(
					<li key={post.id} className='list-group-item'>
						{post.id}.{post.title}
						<button className='btn btn-danger btn-sm float-end' onClick={() =>handleRemovePost(post.id)}>X</button>
					</li>
				))
			}
		</ul>
	)
}