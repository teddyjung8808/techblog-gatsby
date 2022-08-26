import React, { FunctionComponent } from 'react'
import { Link } from 'gatsby'

const IndexPage: FunctionComponent = function () {
  return (
    <>
      <Link to="/info">info 페이지로</Link>
    </>
  )
}

export default IndexPage
