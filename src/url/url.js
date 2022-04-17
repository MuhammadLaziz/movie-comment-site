import axios from "axios"
import { useEffect, useState } from "react"
import Movie from "../components/movieList/Movie"
import Comment from '../components/comment/Comment'

const Url = () => {
    const [movie, setmovie] = useState([])
    const [comments, setComments] = useState([])
    
    const getMovies = () => {
        axios.get('https://624b0e2171e21eebbcec0e9d.mockapi.io/movies').then(res=> setmovie(res.data))
    }

    const getComments = (id = 1) => {
        axios.get(`https://624b0e2171e21eebbcec0e9d.mockapi.io/movies/${id}/comments`).then(res => setComments(res))
    }

    useEffect(() => {
        getMovies()
        getComments()
    })

    return(
        <div>
            <Movie movie={movie}/>
            <Comment comments={comments}/>
        </div>
    )
}
export default Url