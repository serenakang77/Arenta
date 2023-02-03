import React from "react"
import Carousel from "react-bootstrap/Carousel"

function Homepage({ pickUpLocation, setPickUpLocation, carApi }) {
  //   console.log(carApi)
  //   function randomNum(arrayLength) {
  //     Math.floor(Math.random() * arrayLength) + 1
  //   }
  // console.log(carApi)
  return (
    <>
      <div className='homepageTop'>
        <div className='homepageSearchBar'>
          <form action='' className='homepageForm'>
            <label htmlFor='pickup'>PICK UP</label>
            <input
              type='text'
              placeholder='Pickup location'
              name='pickup'
              onChange={(event) => {
                setPickUpLocation(event.target.value)
              }}
              value={pickUpLocation}
              id='pickup'
            />
            <label htmlFor='checkIn'>CHECK IN</label>
            <input
              type='date'
              placeholder='Chose Date'
              name='checkIn'
              onChange=''
              value=''
              id='checkIn'
            />
            <label htmlFor='checkOut'>CHECK OUT</label>
            <input
              type='date'
              placeholder='Chose Date'
              name='checkOut'
              onChange=''
              value=''
              id='checkOut'
            />
            <button type='submit' onClick=''>
              Search
            </button>
          </form>
        </div>
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
        <div className='homepageMiddleFirstContainer'>
          <h3>Drive Your Dream Car</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
            nulla suscipit nobis vel non earum nemo laborum sit sapiente? Quia.
          </p>
        </div>
        <div className='homepageMiddleSecondContainer'>
          <div className='homepageMiddleFirstStep'>
            <h4>Find Your Dream Car</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
              omnis!
            </p>
          </div>
          <div className='homepageMiddleSecondStep'>
            <h4>Contact the Hirer</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
              omnis!
            </p>
          </div>
          <div className='homepageMiddleThirdStep'>
            <h4>Drive...</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
              omnis!
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Homepage
