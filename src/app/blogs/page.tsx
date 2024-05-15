import React from 'react'
import Link from 'next/link';
import { getList } from '@/app/libs/client'
import parse from 'html-react-parser'


const blogs = async () => {
  const { contents } = await getList()
  return (
    <div>
      <ul>
        {contents.map((post) => {
          return (
            <Link href={`/blogs/${post.id}`}>
              <li key={post.id}>
                <h2>{post.title}</h2>
                {parse(post.body)}
              </li>
            </Link>
          )
        }
        )}
      </ul>
    </div>
  )
}

export default blogs