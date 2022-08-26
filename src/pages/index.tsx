import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import GlobalStyle from '@Components/common/GlobalStyle'
import Introduction from '@Components/main/Introduction'
import Footer from '@Components/common/Footer'

const IndexPage: FunctionComponent = function () {
  return (
    <Container>
      <GlobalStyle />
      <Introduction />
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
