// const http = require ('http')
// const fs = require ('fs')
// const {readFileSync} = require ('fs')
// const homePage = readFileSync ('./Skincare Blog/html/index.html')
// const homeStyles = readFileSync ('./Skincare Blog/css/style.css')

// const server = http.createServer ((req, res) => {
//     const url = req.url

//     if (url === '/') {
//         res.writeHead (200, {'content-type': 'text/html'})
//         res.write (homePage)
//         res.end
//     }
//     else if (url === '/style.css') {
//         res.writeHead(200, { 'content-type': 'text/css' })
//         res.write(homeStyles)
//         res.end()
//     }
//     else {
//         res.writeHead(404, { 'content-type': 'text/html' })
//         res.write('<h1>page not found</h1>')
//         res.end()
//     }
  
// })

// // server.listen (port, function (err) {
// //     if (err) {
// //         console.log ('Something went wrong', err)
// //     }
// //     else [
// //         console.log (`Server is listening on port ${port}`)
// //     ]
// // })

// server.listen (5000)

const express = require ('express')
const path = require ('path')

const app = express ()

app.use (express.static (__dirname))

app.get ('/', (req, res) => {
    res.sendFile (path.resolve(__dirname, './Skincare Blog/html/index.html'))
})

app.all('*', (req, res) => {
    res.status(404).send('Resource Not Found')
})
  
 app.listen(5000, () => {
    console.log('Server is listening on port 5000....')
})
  