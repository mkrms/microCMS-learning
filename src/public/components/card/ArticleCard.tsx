import React from 'react'
import Link from 'next/link';
import parse from 'html-react-parser'
import styles from './ArticleCard.module.scss'

type Props = {
  id: string;
  title: string;
  body: string;
}

const ArticleCard = (props: Props) => {
  return (
    <li key={props.id} className={styles['c-articleCard']}>
      <Link href={`/blogs/${props.id}`}>
        <h3 className={styles['c-articleCard--title']}>{props.title}</h3>
        {parse(props.body)}
      </Link>
    </li>
  )
}

export default ArticleCard