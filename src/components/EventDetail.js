import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import axios from "axios"

function EventDetail({ formInfo }) {
  const { id } = useParams()
  console.log(id)
  console.log(id)
  const [eventDetail, setEventDetail] = useState({})
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
        endDateTime: formInfo.endDate ? formInfo.endDate + "T00:00:00Z" : null,
        size: "200",
        sort: "random",
      },
    }
    axios(apiOption)
      .then(function (response) {
        setEventDetail(
          response.data._embedded.events.filter((data) => data.id == id)
        )
      })
      .catch(function (error) {
        console.error(error)
      })
  }, [id])
  return <div>EventDetail</div>
}

export default EventDetail
