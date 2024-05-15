import React from 'react'
import { getDetail, getList } from '@/app/libs/client'
import parse from 'html-react-parser'
import Link from 'next/link'

const post = async () => {
  const { contents } = await getList();

  const paths = contents.map((post) => {
    return {
      postId: post.id,
    };
  });

  const post = await getDetail(paths[0].postId)
  console.log(post)

  return (
    <div>
      {contents.map((post) => {
        return (
          <div key={post.id}>
            <h1>{post.title}</h1>
            {parse(post.body)}
          </div>
        )
      })}
    </div >
  )
}

export default post