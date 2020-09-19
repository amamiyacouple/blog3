import React from 'react'
import { useStaticQuery, Link, graphql } from 'gatsby'
import '../styles/style.scss'

export default function Header () {
  const {
    site: {
      siteMetadata: { title },
    },
  } = useStaticQuery (
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <header id="luxbar" class="luxbar-fixed">
        <input type="checkbox" class="luxbar-checkbox" id="luxbar-checkbox"/>
        <div class="luxbar-menu luxbar-menu-right luxbar-menu-dark">
            <ul class="luxbar-navigation">
                <li class="luxbar-header">
                    <a href="#" class="luxbar-brand">LUXBAR</a>
                    <label class="luxbar-hamburger luxbar-hamburger-doublespin" 
                    id="luxbar-hamburger" for="luxbar-checkbox"> <span></span> </label>
                </li>
                <li class="luxbar-item"><a href="#">Item 1</a></li>
                <li class="luxbar-item"><a href="#">Item 2</a></li>
                <li class="luxbar-item"><a href="#">Item 3</a></li>
                <li class="luxbar-item"><a href="#">Item 4</a></li>
            </ul>
        </div>
    </header>
  )
}