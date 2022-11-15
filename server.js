const express = require('express')
const app = express();
const fs = require('fs')

// const links = ['about-me','hobbies' ,'movies','food','soft-skills','tech-skills','goals','degrees','experience']
// // const newLinksArray = links.split(',')


// for (let i = 0; i < links.length; i++) {
//     let newLinks = 'http://127.0.0.1:3000/' + links[i]
//     console.log(newLinks)
// }


app.engine('rania', (filePath, options, callback) => {
    fs.readFile(filePath, (err, content) => {
        if (err) return callback(err)
        const rendered = content.toString()
            .replace('#title#', '<title>' + options.title + '</title>')
            .replace('#message#', '<h1>' + options.message + '</h1>')
            .replace('#content#', '<div>' + options.content + '</div>')

            .replace('#title1#', '<title>' + options.title + '</title>')
            .replace('#message1#', '<h1>' + options.message + '</h1>')
            .replace('#content1#', '<h1>' + options.content + '</h1>')
            .replace('#content2#', `<a href=  ${options.content2} > Next Page</a>`)

        return callback(null, rendered)

    })
})

app.set('views', './views')

app.set('view engine', 'rania')

app.get('/', (req, res) => {
    res.render('template', { title: 'Rania Elnaggar', message: 'Welcome to my World!', content: 'we are going to practice how to use EXPRESS' ,content2 : 'http://127.0.0.1:3000/about-me'})
    // res.send(newLinksArray[req.params.indexOfArray])

})
app.get('/about-me', (req, res) => {
    res.render('template', { title: 'about me', message: 'what do you do for living?', content: 'Mother of Two little boys', content2 : 'http://127.0.0.1:3000/hobbies' })
    // res.send(newLinksArray[req.params.indexOfArray])
})
app.get('/hobbies', (req, res) => {
    res.render('template', { title: 'hobbies', message: 'Do you have any Hobbies?', content: 'enjoy time with family and ice skating',content2 : 'http://127.0.0.1:3000/movies' })
})
app.get('/movies', (req, res) => {
    res.render('template', { title: 'movies', message: 'what is your favorite movie?', content: 'home Alone',content2 : 'http://127.0.0.1:3000/food' })
})

app.get('/food', (req, res) => {
    res.render('template', { title: 'food', message: 'what is favorite food?', content: 'mexican' ,content2 : 'http://127.0.0.1:3000/soft-skills'})
})
app.get('/soft-skills', (req, res) => {
    res.render('template2', { title: 'soft-skills', message: 'what are soft skills you have?', content: 'my previous jobs in Health care allowed me to develop soft skills like problem solving, team player ,communication and critical thinking', content2 : 'http://127.0.0.1:3000/tech-skills' })
})
app.get('/tech-skills', (req, res) => {
    res.render('template2', { title: 'tech-skills',message: 'how did you obtain your tech skills?', content: 'joining Per Scholas bootCamp allowed me to have hands on projects and prepared me to become a professional experienced software engineering ' , content2 : 'http://127.0.0.1:3000/goals'})
})
app.get('/goals', (req, res) => {
    res.render('template2', { title: 'goals', message: 'what are your future goals?', content: 'to become skilled full stack or backend developer', content2 : 'http://127.0.0.1:3000/degree'})
})
app.get('/degree', (req, res) => {
    res.render('template2', { title: 'degree', message: 'what is the highest level of eduction?', content: 'I have two bachelor degrees (biology and psychology) ', content2 : 'http://127.0.0.1:3000/experience'})
})
app.get('/experience', (req, res) => {
    res.render('template2', { title: 'experience', message: 'what are your work experience?', content: '8 years in retail pharmacy as pharmacy technician, 3 years in health insurance industry as prior autherization specialist ',content2 : 'http://127.0.0.1:3000/'})
})
app.listen(3000, function () {
    console.log('listening to port 3000')
})


