import React, { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'
import GlobalStyle from '@Components/common/GlobalStyle'
import Footer from '@Components/common/Footer'

type TemplateProps = {
  children: ReactNode
}

const Template: FunctionComponent<TemplateProps> = ({ children }) => {
  return (
    <Container>
      <GlobalStyle />
      {children}
      <Footer />
    </Container>
  )
}

export default Template

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`
