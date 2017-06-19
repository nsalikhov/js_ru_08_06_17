import React from 'react'
<<<<<<< HEAD
import { render } from 'react-dom'
import ArticleList from './ArticleList'
import { articles } from './fixtures'

render(<ArticleList articles={articles} />, document.getElementById('container'));
=======
import {render} from 'react-dom'
import App from './components/App'
import {articles} from './fixtures'

render(<App articles = {articles} />, document.getElementById('container'))
>>>>>>> 861ae0d4ead1168a5032a6451f062792686cb63f
