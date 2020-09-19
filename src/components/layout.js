import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
//Add by myself
//import NavBar from "../components/navbar"
import Header from "../components/header"
import "../styles/style.scss"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <Header/>
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        © 2020 - {new Date().getFullYear()},
        {` `}
        バリキャリ夫婦雨宮のブログ All rights reserved.
      </footer>
    </div>
  )
}

export default Layout
