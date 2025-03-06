import { Link } from "react-router-dom"
import { RiHomeOfficeFill } from "react-icons/ri";

const Header = () => {
  return (
    <div>
      <Link to='/'><RiHomeOfficeFill style={{color: '#f5f1e9', fontSize: '45px'}}/></Link>
    </div>
  )
}

export default Header