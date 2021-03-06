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
      maxWidth: rhythm(30),
    }}
    >
      <Header/>
      <main>{children}</main>
      <footer className='footer'>
        © 2020 - {new Date().getFullYear()}, {' '} 雨宮夫婦 All rights reserved. 
        発言は全て私見でいかなる所属・団体とも無関係
      </footer>
    </div>
  )
}
//<header>{header}</header>

export default Layout
