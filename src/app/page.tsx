import React from 'react'
import { getList } from '@/app/libs/client'
import ArticleCard from '@/public/components/card/ArticleCard';
import styles from './FrontPage.module.scss'

const FrontPage = async () => {
  const { contents } = await getList()
  return (
    <div className={styles['p-frontPage']}>
      <ul className={styles['p-frontPage__articleList']}>
        {contents.map((post) => {
          return (
            <ArticleCard
              {...post}
            />
          )
        }
        )}
      </ul>
    </div>
  )
}

export default FrontPage