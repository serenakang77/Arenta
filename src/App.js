import axios from "axios"
import "./styles/styles.css"
import PageHeader from "./components/PageHeader"
import Homepage from "./components/Homepage"
import EventDetail from "./components/EventDetail"
import { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
// import Menu from "./components/Menu"

function App() {
  const [formInfo, setFormInfo] = useState({
    startDate: new Date().toISOString().substring(0, 10),
    // endDate: new Date().toISOString().substring(0, 10),
  })
  const [formButton, setFormButton] = useState(false)
  const [eventApi, seteventApi] = useState("")
  useEffect(() => {
    const apiOption = {
      method: "get",
      url: `https://app.ticketmaster.com/discovery/v2/events`,
      params: {
        apikey: "IuMgmOvIfhU9Df4sHJ3ggGEMKzjMXdnD",
        countryCode: "CA",
        city: formInfo.location,
        classificationName: formInfo.eventType,
        startDateTime: formInfo.startDate + "T00:00:00Z",
        // startDateTime: "2023-02-07T00:00:00Z",
        endDateTime: formInfo.endDate ? formInfo.endDate + "T00:00:00Z" : null,
        size: "200",
        sort: "random",
      },
    }
    axios(apiOption)
      .then(function (response) {
        seteventApi(
          response.data._embedded.events
            .filter(
              (value, index) =>
                response.data._embedded.events.findIndex(
                  (item) => item.name === value.name
                ) === index
            )
            .filter((value) => value.priceRanges)
        )
      })
      .catch(function (error) {
        console.error(error)
      })
  }, [formButton])

  return (
    <>
      <PageHeader />
      <Homepage
        formInfo={formInfo}
        setFormInfo={setFormInfo}
        eventApi={eventApi}
        formButton={formButton}
        setFormButton={setFormButton}
        // startDate={startDate}
        // setStartDate={setStartDate}
      />
      <Routes>
        {/* <Route path='/' element={<Menu />} /> */}
        <Route
          path='/event/:id'
          element={<EventDetail formInfo={formInfo} />}
        />
        {/* <Route path="" element={}/> */}
      </Routes>
    </>
  )
}

export default App
