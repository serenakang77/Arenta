import Carousel from "react-bootstrap/Carousel"
import { useState } from "react"
import { Link } from "react-router-dom"

function Homepage({
  formInfo,
  setFormInfo,
  eventApi,
  formButton,
  setFormButton,
  // startDate,
  // setStartDate,
}) {
  const bigImage = (images) => {
    const filteredArray = images.filter(
      (individualImage) =>
        individualImage.width === 640 && individualImage.height === 427
    )
    return filteredArray[0].url
  }

  // const formContainer = [
  //   {
  //     name: "location",
  //     type: "text",
  //     placeholder: "Search Your City",
  //     className: "locationForm",
  //   },
  //   {
  //     name: "startDate",
  //     type: "date",
  //     placeholder: "Chose Date",
  //     className: "startDateForm",
  //   },
  //   {
  //     name: "endDate",
  //     type: "date",
  //     placeholder: "End Date",
  //     className: "endDateForm",
  //   },
  //   {
  //     name: "eventType",
  //     type: "text",
  //     placeholder: "eventType",
  //     className: "eventTypeForm",
  //   },
  // ]
  return (
    <>
      <div className='homepageTop'>
        <div className='homepageSearchBar'>
          <form action='' className='homepageForm'>
            {/* {formContainer.map((individual) => {
              return (
                <div className={`formContainer ${individual.className}`}> */}
            {/* const formContainer = [{name: "location", type: "text", placeholder: "Search Your City"}, {name: "startDate", type: "date", placeholder: "Chose Date"}, {name: "endDate", type: "date", placeholder: "End Date"}, {name: "eventType", type: "text", placeholder: "eventType"}] */}

            {/* <label htmlFor={individual.name}>
                    {individual.name.toUpperCase()}
                  </label>
                  <input
                    type={individual.type}
                    placeholder={individual.placeholder}
                    name={individual.name} 
                    onChange={(event) => {
                      setFormInfo({
                        ...formInfo,
                        {individual.name}: event.target.value,
                      })
                    }}
                    value={formInfo[individual.name]}
                    id={individual.name}
                  />
                </div>
              )
            })} */}
            <div className='locationForm formContainer'>
              <label htmlFor='location'>Location</label>
              <input
                type='text'
                placeholder='Search Your City'
                name='location'
                onChange={(event) => {
                  setFormInfo({ ...formInfo, location: event.target.value })
                }}
                value={formInfo.location}
                id='location'
              />
            </div>
            <div className='startDateForm formContainer'>
              <label htmlFor='startDate'>Start Date</label>
              <input
                type='date'
                placeholder='Chose Date'
                name='startDate'
                onChange={(event) => {
                  setFormInfo({ ...formInfo, startDate: event.target.value })
                }}
                value={formInfo.startDate}
                id='startDate'
              />
            </div>
            <div className='endDateForm formContainer'>
              <label htmlFor='endDate'>End Date</label>
              <input
                type='date'
                placeholder='End Date'
                name='endDate'
                onChange={(event) => {
                  setFormInfo({ ...formInfo, endDate: event.target.value })
                }}
                value={formInfo.endDate}
                id='endDate'
              />
            </div>
            <div className='eventTypeForm formContainer'>
              <label htmlFor='eventType'>Event Type</label>
              <input
                type='text'
                placeholder='eventType'
                name='eventType'
                onChange={(event) => {
                  setFormInfo({ ...formInfo, eventType: event.target.value })
                }}
                value={formInfo.eventType}
                id='eventType'
              />
            </div>
            <button
              type='submit'
              onClick={(e) => {
                e.preventDefault()
                setFormButton(!formButton)
              }}
            >
              Search
            </button>
          </form>
        </div>
      </div>
      <div className='homepageHeading'>
        <h2>UPCOMING EVENTS</h2>
      </div>
      <div className='homepageCarousel'>
        <Carousel>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src='holder.js/800x400?text=First slide&bg=373940'
              alt='First slide'
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src='holder.js/800x400?text=Second slide&bg=282c34'
              alt='Second slide'
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src='holder.js/800x400?text=Third slide&bg=20232a'
              alt='Third slide'
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className='homepageMiddle'>
        <ul className='homepagePostings wrapper'>
          {eventApi.length
            ? eventApi.map((individual) => {
                return (
                  <Link
                    to={`event/${individual.id}`}
                    className='homepageEventContainer'
                  >
                    <li key={individual.id} className='homepagePosting'>
                      <img
                        src={bigImage(individual.images)}
                        alt={individual.name}
                      />
                      <div className='homepagePostingTitle'>
                        <h4>{individual.name}</h4>
                        <p>
                          {individual.dates.start.localDate}{" "}
                          {individual.dates.start.localTime}
                        </p>
                        <p>
                          {/* {console.log(individual.priceRanges[0])} */}
                          Starts at {individual.priceRanges[0].currency} ${" "}
                          {individual.priceRanges[0].min}
                        </p>
                      </div>
                    </li>
                  </Link>
                )
              })
            : null}
        </ul>
      </div>
    </>
  )
}

export default Homepage
