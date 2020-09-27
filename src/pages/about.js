import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

//add by myself
import Image from "gatsby-image";
import "../styles/style.scss"
import { Col } from "react-bootstrap";
import husbandImg from "../../content/assets/icon_husband2.jpg"
import wifeImg from "../../content/assets/icon_wife2.jpg"
import defaultImage from "../images/default_image.jpg"

const Aboutpage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const author = data.site.siteMetadata.author.name;
  return (
    <div>
      <Layout location={location} title={siteTitle} author={author}>
        <SEO title="プロフィール" />
        <Col className='about_profile'>
          <h1>書いている夫婦</h1>
          <div>
            <img src={wifeImg} className='about_profile__icon'/>
          </div>
          <div class="twitter">
            <a 
              href="https://twitter.com/amamiya_wife?ref_src=twsrc%5Etfw" 
              class="twitter-follow-button" 
              data-show-count="true"
              data-lang="ja">Follow @amamiya_wife
            </a>
            {<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>}
          </div>
          <div>
            <h5>GAFA勤務の妻です。</h5>
          </div>
          <div>
            <h5>東京一工卒/英中トリリンガル(TOEIC970/HSK6)です。</h5>
          </div>
          <div>
            <h5>資産運用/語学/キャリア/転職/婚活術について発信しています。</h5>
          </div>
          <div>
            <img src={husbandImg} className='about_profile__icon'/>
          </div>
          <div class="twitter">
            <a 
              href="https://twitter.com/amamiya_couple?ref_src=twsrc%5Etfw"
              class="twitter-follow-button"
              data-show-count="true"
              data-lang="ja">Follow @amamiya_couple
            </a>
            {<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>}
          </div>
          <div>
            <h5>時価総額10兆円越え企業勤務の夫です。</h5>
          </div>
          <div>
            <h5>早慶卒のエンジニアです。</h5>
          </div>
          <div>
            <h5>キャリア/転職/仕事/勉強/婚活術について発信しています。</h5>
          </div>
        </Col>
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