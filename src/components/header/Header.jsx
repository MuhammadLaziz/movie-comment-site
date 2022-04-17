import './header.css'
import Search from '../../Assets/image/Search.svg'
import Circle from '../../Assets/image/Circle.png'
import Dots from '../../Assets/image/Dots.png'


const Header = () => {
  return (
    <div className='header'>
        <h1 className="title-1">MOVIE</h1>
        <div className="menu">
            <p>Movies</p>
            <p>TV shows</p>
            <p>Animations</p>
        </div>
        <div className="control">
            <button>
                <img src={Search} alt="" />
            </button>
            <button>
            <img src={Circle} alt="" />
            </button>
            <button>
            <img src={Dots} alt="" />
            </button>
        </div>
    </div>
  )
}

export default Header