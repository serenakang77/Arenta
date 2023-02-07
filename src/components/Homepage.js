import React from "react"
import Carousel from "react-bootstrap/Carousel"

function Homepage({ location, setLocation, eventApi }) {
  const bigImage = (images) => {
    const filteredArray = images.filter(
      (individualImage) =>
        individualImage.width > 350 && individualImage.height > 350
    )
    return filteredArray[0].url
  }
  // const uniqueEvent = (array) => {
  //   return array.filter(
  //     (value, index) =>
  //       array.findIndex((item) => item.name === value.name) === index
  //   )
  // }
  // uniqueEvent(eventApi)
  // console.log(uniqueEvent(eventApi))
  const number = 0
  return (
    <>
      <div className='homepageTop'>
        <div className='homepageSearchBar'>
          {/* <form action='' className='homepageForm'>
            <div className='locationForm formContainer'>
              <label htmlFor='location'>Location</label>
              <input
                type='text'
                placeholder='Search Your City'
                name='location'
                onChange={(event) => {
                  setLocation(event.target.value)
                }}
                value={location}
                id='location'
              />
            </div>
            <div className='startDateForm formContainer'>
              <label htmlFor='startDate'>Start Date</label>
              <input
                type='date'
                placeholder='Chose Date'
                name='startDate'
                onChange=''
                value=''
                id='startDate'
              />
            </div>
            <div className='endDateForm formContainer'>
              <label htmlFor='endDate'>End Date</label>
              <input
                type='date'
                placeholder='End Date'
                name='endDate'
                onChange=''
                value=''
                id='endDate'
              />
            </div>
            <div className='eventTypeForm formContainer'>
              <label htmlFor='eventType'>Event Type</label>
              <input
                type='text'
                placeholder='eventType'
                name='eventType'
                onChange=''
                value=''
                id='eventType'
              />
            </div>
            <button type='submit' onClick=''>
              Search
            </button>
          </form> */}
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
                {
                  {
                    console.log(individual)
                  }
                }
                return (
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
                        {individual.priceRanges.length !== 0
                          ? individual.priceRanges[0].currency
                          : null}
                        $
                        {individual.priceRanges.length !== 0
                          ? individual.priceRanges[0].min
                          : null}
                      </p>
                    </div>
                  </li>
                )
              })
            : null}
        </ul>
      </div>
    </>
  )
}

export default Homepage
