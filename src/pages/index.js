import * as React from "react";
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this for following the Gatsby Tutorial</p>
      <StaticImage 
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/karsten-winegeart-8PqaIfbV1H8-unsplash.jpg"
        />
    </Layout>
  )
}

export default IndexPage 
