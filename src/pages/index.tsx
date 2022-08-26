import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import GlobalStyle from '@Components/common/GlobalStyle'
import Introduction from '@Components/main/Introduction'
import CategoryList from '@Components/main/CategoryList'
import PostList from '@Components/main/PostList'
import Footer from '@Components/common/Footer'

const CATEGORY_LIST = {
  All: 5,
  Web: 3,
  Mobile: 2,
}

const IndexPage: FunctionComponent = function () {
  return (
    <Container>
      <GlobalStyle />
      <Introduction />
      <CategoryList selectedCategory="Web" categoryList={CATEGORY_LIST} />
      <PostList />
      <Footer />
    </Container>
  )
}

export default IndexPage

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`
