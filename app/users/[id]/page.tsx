import React from 'react'
import getUser from '@/lib/getUser'
import UserPosts from './components/UserPosts';
import getUserPosts from '@/lib/getUserPosts';
import { Suspense } from 'react';
import type { Metadata } from 'next';

type Params = {
    params: {
        id: string;
    }
}

export async function generateMetadata({ params: {id}}: Params): Promise<Metadata> {
    const userData: Promise<Users> = await getUser(id)
    const user = await userData
    return {
        title: user.name,
        description: `this is the page of ${user.name}`
    }
}

export default async function UserPage({ params: {id}}: Params) {
    const userData: Promise<Users> = await getUser(id)
    const userPostData: Promise<UserPost[]> = await getUserPosts(id)
    const user = await userData
  return (
    <div>
        <h2>{user.name}</h2>
        <Suspense fallback={<h2>Loading ... </h2>}>
         {/* @ts-expect-error Server Component */}
        <UserPosts promise={userPostData} />
        </Suspense>
    </div>
  )
}
