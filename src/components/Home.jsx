import React from 'react'
import vg from "../img/hero-img.svg"
import Companies from './companies'
import Service from './Service'
function Home() {
  return (
    <>
       <div id='hero-section' className='hero-section'>
      <main>
        <div className='hero-text'>
            <h1>
                Problem
            </h1>
            <p>
                We are a team of talented designers making websites with Bootstrap
            </p>
        </div>

      </main>
    </div>
    <div  id='about' className='hero-section2 row' >
      <img src={vg} alt="" className='col-lg-6 col-12'  />
      <main className=' col-lg-6 col-12 d-flex flex-column justify-content-center justify-content-lg-start'>
        <div className='hero-text2'>
            <h1 className='text-center text-lg-start'>
                Send any problem
            </h1>
            <p className='text-center text-lg-start'>
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem dolorum recusandae sit autem quam culpa ab corporis! Quaerat itaque pariatur consequatur quod ratione, sapiente magnam, alias eveniet doloribus, voluptate inventore quisquam nostrum vitae consectetur tenetur sed earum eius molestias enim!
            </p>
        </div>

      </main>
    </div>
    <div className='hero-section3'>
      <main>
        <div className='hero-text3'>
            <h1>

          Who I am 
            </h1>
            <p>
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem dolorum recusandae sit autem quam culpa ab corporis! Quaerat itaque pariatur consequatur quod ratione, sapiente magnam, alias eveniet doloribus, voluptate inventore quisquam nostrum vitae consectetur tenetur sed earum eius molestias enim!
            </p>
        </div>

      </main>
    </div>
    <Companies />
    <Service/>
    </>
 
  )
}

export default Home
