import menuIcon from "../assets/bars-solid.svg"
import Button from "react-bootstrap/Button"
import { useState } from "react"
import Menu from "./Menu"
export default function PageHeader() {
  const [isMenuClicked, setIsMenuClicked] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='headerLeft'>
          <h1>ARENTA</h1>
          <img
            src={menuIcon}
            alt='menuIcon'
            className='menuIcon'
            onClick={() => setIsMenuClicked(!isMenuClicked)}
          />
        </div>
        {isMenuClicked ? <Menu /> : console.log("not clicked")}
        <div className='headerRight'>
          {/* <a href=''>Log in</a> */}
          <div className='headerRightButton'>
            <Button variant='outline-light'>Sign Up</Button>{" "}
            <Button variant='outline-light'>Rent your car</Button>{" "}
          </div>
        </div>
      </header>
    </>
  )
}
