import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

//add by myself
import husbandImg from "../images/icon_husband2.jpg"
import wifeImg from "../images/icon_wife2.jpg"
import { Row } from "react-bootstrap";

const Aboutpage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const author = data.site.siteMetadata.author.name;
  return (
    <div>
      <Layout location={location} title={siteTitle} author={author}>
        <SEO title="プロフィール" />
        <Row style={{padding:`0.5rem`,textAlign:'center'}}>
          <h1>プロフィール</h1>
          <imag src={husbandImg} style={{maxwith:'120px', maxheight:'120px'}}/>
        </Row>
      </Layout>
    </div>
  );
};

export default Aboutpage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author {
          name
        }
      }
    }
  }
`;