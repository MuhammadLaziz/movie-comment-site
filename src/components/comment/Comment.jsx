import axios from 'axios'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import './comment.css'

const Comment = () => {
  const [comment, setComment] = useState([])
  const movieId = useSelector(state => state.movieId)

  const getComment = (id) => {
    axios.get(`https://624b0e2171e21eebbcec0e9d.mockapi.io/movies/${id}/comments`).then(res => setComment(res.data))
  }

  useEffect(() => {
    getComment(movieId)
    console.log(comment)
  }, [movieId])

  const initialState = {
    username: '',
    newComment: ''
  }

  const [com, setCom] = useState(initialState)

  const onSubmit = (e) => {
    e.preventDefault()

    const formData = {
      username: com.username,
      comments: com.newComment
    }
    axios.post(`https://624b0e2171e21eebbcec0e9d.mockapi.io/movies/1/comments`, formData)
      .catch(er => console.log(er))
      .finally(() => {
        getComment()
        setCom(initialState)
      })
  }


  return (
    <div className='comments'>
      <h1 className='title'>Comments</h1>
      <ul className="co-list">
        {
          comment.map(item => (
            <li className='co-item' key={item.id}>
              <p className='user'>{item.username}</p>
              <p className='text'>{item.comment_msg}</p>
            </li>
          ))
        }
      </ul>
      <form className="com-form" onSubmit={onSubmit}>
        <input type="text" placeholder='Username'/>
        <textarea name="comment" rows="10" placeholder='Comments'></textarea>
        <button className='btn'onClick={onSubmit}>POST</button>
      </form>
    </div>
  )
}

export default Comment