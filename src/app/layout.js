

import './globals.module.scss'


export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <head>
        <meta charSet='utf-8'/>
        <title>Mini Netflix</title>
        <script src='https://unpkg.com/lodash@4.17.20'></script>
      </head>
      <body>
        {children}
        <script src='./src/index.js'></script>
      </body>
    </html>
  )
}
