import React from 'react'

export default async function getUserPosts(id: string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?postId=${id}`)
    if (!res.ok) throw new Error('failed to fetch data !')
  return res.json()
}
