'use client'

import { useSearchParams } from 'next/navigation'
import React from 'react'
import useSWR from 'swr'

const fetchPosts = async (url: string) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Failed to fetch posts");
    }
    return response.json();
};

const Page = () => {
    const search = useSearchParams()
    const searchq = search ? search.get('q') : null
    const encodedq = encodeURIComponent(searchq || "")
    const { data, error, isLoading } = useSWR<{posts: {title: string}[]}>(`/api/search?q=${encodedq}`, fetchPosts)
    
    console.log('I am search', encodedq)
    
    if (isLoading) return <div className=' bg-slate-400 flex items-center h-screen w-full'>Loading...</div>
    if (error) return <div className=' bg-slate-400 flex items-center h-screen w-full'>Error: {error.message}</div>
    if (!data?.posts || data.posts.length === 0) return <div className=' bg-slate-400 flex items-center h-screen w-full'>No results found</div>

    return (
        <div className=' bg-slate-400 flex items-center h-screen w-full'>
           {data.posts.map((post) => (
            <div>{post.title} </div>)
           )}
        </div>
    )
}

export default Page