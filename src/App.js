import React from 'react'
//adding components
import Router from './Router'
import Header from './containers/header/Header'
import Footer from './containers/footer/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <Router />
      <Footer />
      <p className='text-center text-sm py-1 text-gray-600'>
        تمامی حقوق این وبسایت متعلق به شغلانه می باشد.
      </p>
    </div>
  ) 
}

export default App