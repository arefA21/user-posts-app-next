import React from 'react'
import getAllUsers from '@/lib/getAllUsers'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'users page'
}

export default async function UsersPage() {
    const userData: Promise<Users[]> = await getAllUsers()
    const users = await userData

    const section = (
        <section>
            <h2>
                <Link href='/'>Back to Home</Link>
                <br />
            </h2>
            {
                users.map(user => {
                    return (
                        <>
                            <Link href={`users/${user.id}`}><p key={user.id}>{user.name}</p></Link>
                            <br />
                        </>
                    )
                })
            }
        </section>
    )

    
  return section
}
