import React from 'react'
import { Helmet } from 'react-helmet'

export default ({ children }) => ([
    <div style={{ maxWidth: 1180, margin: '0 auto' }}>{children}</div>,
    <Helmet>
      <script
        src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossOrigin="anonymous"></script>
      ,
      <script src="../dist/js/bootstrap.bundle.min.js"
              integrity="sha384-xrRywqdh3PHs8keKZN+8zzc5TX0GRTLCcmivcbNJWm2rs5C8PRhcEn3czEjhAO9o"
              crossOrigin="anonymous"></script>
    </Helmet>,
  ]
)
