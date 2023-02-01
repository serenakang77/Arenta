import React from "react"

function Homepage() {
  return (
    <div className='homepageTop'>
      <div className='homepageSearchBar'>
        <form action='' className='homepageForm'>
          <label htmlFor='pickup'>Pick</label>
          <input type='search' placeholder='Pickup location' />
        </form>
      </div>
    </div>
  )
}

export default Homepage
