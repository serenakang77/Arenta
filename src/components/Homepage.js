import React from "react"
import Carousel from "react-bootstrap/Carousel"

function Homepage({ location, setLocation, eventApi }) {
  //   console.log(eventApi)
  //   function randomNum(arrayLength) {
  //     Math.floor(Math.random() * arrayLength) + 1
  //   }
  // console.log(eventApi)
  return (
    <>
      <div className='homepageTop'>
        <div className='homepageSearchBar'>
          <form action='' className='homepageForm'>
            <div className='locationForm formContainer'>
              <label htmlFor='location'>Location</label>
              <input
                type='text'
                placeholder='Location'
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
          {eventApi.map((individual) => {
            return (
              <li key={individual.id}>
                <img src={individual.images[0].url} alt='' />
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default Homepage
