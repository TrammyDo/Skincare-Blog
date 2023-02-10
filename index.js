const http = require('http')
const { readFileSync } = require('fs')

// get all files
const homePage = readFileSync('./Skincare Blog/html/index.html')
const homeStyles = readFileSync('./Skincare Blog/css/style.css')
const homeLogic = readFileSync('./Skincare Blog/js/main.js')
const img1 = readFileSync ('./Skincare Blog/img/skincare.jpg')
const img2 = readFileSync ('./Skincare Blog/img/skincare2.jpg')
const img3 = readFileSync ('./Skincare Blog/img/skincare3.jpg')
const img4 = readFileSync ('./Skincare Blog/img/skincare4.jpg')
const img5 = readFileSync ('./Skincare Blog/img/skincare5.jpg')
const img6 = readFileSync ('./Skincare Blog/img/skincare6.jpg')
const img7 = readFileSync ('./Skincare Blog/img/skincare7.jpg')
const img8 = readFileSync ('./Skincare Blog/img/skincare8.jpg')
const exfoJelly = readFileSync ('./Skincare Blog/html/exfoJelly.html')

const server = http.createServer((req, res) => {
  const url = req.url
  console.log(url)
  // home page
  if (url === '/' || url === '/index.html') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write(homePage)
    res.end()
  }
  else if (url === '/css/style.css') {
    res.writeHead(200, { 'content-type': 'text/css' })
    res.write(homeStyles)
    res.end()
  }
  else if (url === '/js/main.js') {
    res.writeHead(200, { 'content-type': 'text/javascript' })
    res.write(homeLogic)
    res.end()
  }
  else if (url === '/img/skincare.jpg') {
    res.writeHead(200, { 'content-type': 'image/jpeg' })
    res.write(img1)
    res.end()
  }
  else if (url === '/img/skincare2.jpg') {
    res.writeHead(200, { 'content-type': 'image/jpeg' })
    res.write(img2)
    res.end()
  }
  else if (url === '/img/skincare3.jpg') {
    res.writeHead(200, { 'content-type': 'image/jpeg' })
    res.write(img3)
    res.end()
  }
  else if (url === '/img/skincare4.jpg') {
    res.writeHead(200, { 'content-type': 'image/jpeg' })
    res.write(img4)
    res.end()
  }
  else if (url === '/img/skincare5.jpg') {
    res.writeHead(200, { 'content-type': 'image/jpeg' })
    res.write(img5)
    res.end()
  }
  else if (url === '/img/skincare6.jpg') {
    res.writeHead(200, { 'content-type': 'image/jpeg' })
    res.write(img6)
    res.end()
  }
  else if (url === '/img/skincare7.jpg') {
    res.writeHead(200, { 'content-type': 'image/jpeg' })
    res.write(img7)
    res.end()
  }
  else if (url === '/img/skincare8.jpg') {
    res.writeHead(200, { 'content-type': 'image/jpeg' })
    res.write(img8)
    res.end()
  }
  else if (url === '/exfoJelly.html') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write(exfoJelly)
    res.end()
  }
  else {
    res.writeHead(404, { 'content-type': 'text/html' })
    res.write('<h1>page not found</h1>')
    res.end()
  }
})

server.listen(5000)