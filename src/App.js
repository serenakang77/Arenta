// import axios from "axios"
import "./styles/styles.css"
import PageHeader from "./components/PageHeader"
// import { Routes, Route } from "react-router-dom"
// import Menu from "./components/Menu"

function App() {
  // const options = {
  //   method: "GET",
  //   url: "https://booking-com.p.rapidapi.com/v1/car-rental/search",
  //   params: {
  //     sort_by: "recommended",
  //     drop_off_latitude: "50.08773",
  //     pick_up_latitude: "50.08773",
  //     from_country: "it",
  //     pick_up_longitude: "14.421133",
  //     currency: "CAD",
  //     drop_off_datetime: "2023-04-17 13:00:00",
  //     pick_up_datetime: "2023-04-16 13:00:00",
  //     drop_off_longitude: "14.421133",
  //     locale: "en-gb",
  //   },
  //   headers: {
  //     "X-RapidAPI-Key": "d68a0da33dmshec23235f282deeap141e2bjsn8069a44d4671",
  //     "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
  //   },
  // }

  // axios
  //   .request(options)
  //   .then(function (response) {
  //     console.log(response.data)
  //   })
  //   .catch(function (error) {
  //     console.error(error)
  //   })

  return (
    <>
      <PageHeader />
      {/* <Routes> */}
      {/* <Route path='/' element={<Menu />} /> */}
      {/* <Route path="" element={}/> */}
      {/* <Route path="" element={}/> */}
      {/* </Routes> */}
    </>
  )
}

export default App
