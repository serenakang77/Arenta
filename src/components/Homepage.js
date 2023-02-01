import React from "react"

function Homepage({ pickUpLocation, setPickUpLocation }) {
  return (
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
  )
}

export default Homepage
