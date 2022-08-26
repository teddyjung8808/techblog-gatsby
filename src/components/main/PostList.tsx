import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import PostItem from '@Components/main/PostItem'

const PostList: FunctionComponent = () => {
  return (
    <PostListWrapper>
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
    </PostListWrapper>
  )
}

export default PostList

const PostListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 768px;
  margin: 0 auto;
  padding: 50px 0 100px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    padding: 50px 20px;
  }
`

const POST_ITEM_DATA = {
  title: 'Post Item Title',
  date: '2022.08.26.',
  categories: ['Web', 'Frontend', 'Testing'],
  summary:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repellat doloremque fugit quis rem temporibus! Maxime molestias, suntrem debitis odit harum impedit. Modi cupiditate harum dignissimos eos in corrupti!',
  thumbnail:
    'https://media.istockphoto.com/photos/image-of-open-antique-book-on-wooden-table-with-glitter-overlay-picture-id873507500?b=1&k=20&m=873507500&s=170667a&w=0&h=jHslAXdeW5Ob6D9I0zyiLGChrluxKg2S35Z_SHS_Kfc=',
  link: 'https://www.google.co.kr/',
}
