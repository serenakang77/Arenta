import menuIcon from "../assets/bars-solid.svg"
import Button from "react-bootstrap/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import Menu from "./Menu"
export default function PageHeader() {
  const [isMenuClicked, setIsMenuClicked] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='wrapper flexContainer'>
          <FontAwesomeIcon
            icon={faBars}
            size='2x'
            className='menuIcon'
            onClick={() => setIsMenuClicked(!isMenuClicked)}
          />
          <h1>ARENTA</h1>
          {isMenuClicked ? <Menu /> : console.log("not clicked")}
          <div className='headerRightButton'>
            <Button variant='outline-light'>Sign Up</Button>{" "}
          </div>
        </div>
      </header>
    </>
  )
}
