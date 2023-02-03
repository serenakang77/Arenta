import axios from "axios"
import "./styles/styles.css"
import PageHeader from "./components/PageHeader"
import Homepage from "./components/Homepage"
import { useState } from "react"
// import { Routes, Route } from "react-router-dom"
// import Menu from "./components/Menu"

function App() {
  const [pickUpLocation, setPickUpLocation] = useState("")
  const [carApi, setCarApi] = useState("")

  const apiOption = {
    method: "get",
    url: `https://app.ticketmaster.com/discovery/v2/events`,
    params: {
      apikey: "9SQCElh2lWz2fRirkaU7NyGQ3I97xegP",
      city: "Toronto",
      // classificationName: eventType,
      // startDateTime: ourStart,
      // endDateTime: ourEnd,
      size: "100",
      sort: "random",
    },
  }
  axios(apiOption)
    .then(function (response) {
      console.log(response.data)
    })
    .catch(function (error) {
      console.error(error)
    })

  return (
    <>
      <PageHeader />
      <Homepage
        pickUpLocation={pickUpLocation}
        setPickUpLocation={setPickUpLocation}
        carApi={carApi}
      />
      {/* <Routes> */}
      {/* <Route path='/' element={<Menu />} /> */}
      {/* <Route path="" element={}/> */}
      {/* <Route path="" element={}/> */}
      {/* </Routes> */}
    </>
  )
}

export default App
