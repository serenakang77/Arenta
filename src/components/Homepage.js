import React from "react"

function Homepage({ pickUpLocation, setPickUpLocation }) {
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
