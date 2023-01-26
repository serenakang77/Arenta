import menuIcon from "../assets/menu-icon.png"
import Button from "react-bootstrap/Button"

export default function PageHeader() {
  return (
    <>
      <header className='header'>
        <div className='headerLeft'>
          <h1>ARENTA</h1>
          <a href=''>
            <img src={menuIcon} alt='menuIcon' class='menuIcon' />
          </a>
        </div>
        <div className='headerRight'>
          <a href=''>Log in</a>
          <div className='headerRightButton'>
            <Button variant='outline-danger'>Sign Up</Button>{" "}
            <Button variant='outline-danger'>Rent your car</Button>{" "}
          </div>
        </div>
      </header>
    </>
  )
}
