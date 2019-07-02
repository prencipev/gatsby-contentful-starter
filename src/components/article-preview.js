import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './article-preview.module.css'

export default ({ article }) => (

    <div className="col-lg-4 text-center">
      <Img alt="" fluid={article.heroImage.fluid}/>
      <h2 className="mt-3 block"><Link to={`/blog/${article.slug}`}>{article.title}</Link></h2>
      <p
        dangerouslySetInnerHTML={{
          __html: article.description.childMarkdownRemark.html,
        }}
      />
        <a className="btn btn-secondary" href={`/blog/${article.slug}`} role="button">View details &raquo;</a>
    </div>
)
