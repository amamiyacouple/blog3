/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"
// add by myself
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        Written by <strong>{author.name}</strong> {author.summary}
        {` `}
        <a href={`https://twitter.com/${social.twitter}`}>
          Follow me on Twitter
        </a>
      </p>
      <div style={{ position: "relative", marginTop: "10px", }}　>
        <div style={{ position: "absolute", width: "100%", top: "0", left: "0", }} >
          <a style={{ boxShadow: "none", }} href="https://twitter.com/amamiya_couple">
            <FontAwesomeIcon
              style={{ height: "1.5em", width: "1.5em", marginRight: "5", }}
              color="#3eaded"
              icon={faTwitter}
            />
          </a>
        </div>
      </div>
    </div>
    
  )
}

export default Bio
