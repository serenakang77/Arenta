import axios from "axios"
import "./styles/styles.css"
import PageHeader from "./components/PageHeader"
import Homepage from "./components/Homepage"
import { useState, useEffect } from "react"

// import { Routes, Route } from "react-router-dom"
// import Menu from "./components/Menu"

function App() {
  const [location, setLocation] = useState("")
  const [eventApi, seteventApi] = useState("")
  const [startDate, setStartDate] = useState(new Date())
  let today = new Date()
  // const dd = today.getDate()
  // const mm = today.getMonth()
  // const yyyy = today.getFullYear()
  // today = yyyy + "-" + mm + "-" + dd
  console.log(today)
  useEffect(() => {
    const apiOption = {
      method: "get",
      url: `https://app.ticketmaster.com/discovery/v2/events`,
      params: {
        apikey: "IuMgmOvIfhU9Df4sHJ3ggGEMKzjMXdnD",
        countryCode: "CA",
        // city: "Toronto",
        // classificationName: eventType,
        startDateTime: "2023-02-07T00:00:00Z",
        // endDateTime: ourEnd,
        size: "200",
        sort: "random",
      },
    }
    axios(apiOption)
      .then(function (response) {
        // console.log(response.data)
        seteventApi(
          response.data._embedded.events
            .filter(
              (value, index) =>
                response.data._embedded.events.findIndex(
                  (item) => item.name === value.name
                ) === index
            )
            .filter((value) => value.priceRanges)
          // .filter((value) => value.dates.start.localDate > today)
        )
        console.log(
          response.data._embedded.events.filter(
            (value, index) =>
              response.data._embedded.events.findIndex(
                (item) => item.name === value.name
              ) === index
          )
        )
        // seteventApi(response.data._embedded.events)
      })
      .catch(function (error) {
        console.error(error)
      })
  }, [])

  return (
    <>
      <PageHeader />
      <Homepage
        location={location}
        setLocation={setLocation}
        eventApi={eventApi}
        startDate={startDate}
        setStartDate={setStartDate}
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
