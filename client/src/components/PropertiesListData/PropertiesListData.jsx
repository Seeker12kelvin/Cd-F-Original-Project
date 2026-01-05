import React from 'react'
import { favoriteDetails } from '../../data/data'
import FavoriteButton from '../favoriteFunction'
import { FaBath, FaBed, FaStarOfLife } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styles from './PropertiesListData.module.css'
import Squares from "../../Images/Square-Meters-Outline.png";

const PropertiesListData = ({props}) => {

  const {filteredProperties} = props

  return (
      
    filteredProperties.map(data => {
      return(
        <Link key={data.id} to={`/rent/${data.id}`}>
          <article
            className={`${styles['onLoad-animation']} bg-white w-[330px] h-fit scale-[0.9] relative shadow-xl shadow-[#00000010] rounded-2xl border-[#D6DDEB] border-2 flex flex-col`}>
            <figure>
              <img
                className='object-cover rounded-xl rounded-b-none z-3 bg-[white] h-47' 
                src={data.imgUrl}
                alt={data.name}/>
            </figure>
            

            <header className='bg-white h-full w-full z-3 flex rounded-b-2xl gap-4 flex-col p-6'>

              <section className='border-b border-[#F0EFFB] pb-2 flex bg-[white] h-full items-center justify-between'>
                <div className='flex flex-col gap-2'>
                  <h3 className='text-[#7065F0] text-xl font-bold'>{
                    data.price}<span className='text-[#6C727F] text-sm'>/month</span></h3>
                  <p className='font-bold text-2xl'>{data.name}</p>
                  <address className='text-[#6C727F] text-[0.86em]'>{data.location}</address>
                </div>

                <div className='border-2 border-[#F0EFFB] flex items-center p-1.5 -mt-10 rounded-[50%] w-fit'>    
                  <FavoriteButton
                    isFavorite={favoriteDetails.some(item => item.id === data.id)}
                    onToggle={() => {
                      if (favoriteDetails.some(item => item.id === data.id)) {
                        const index = favoriteDetails.findIndex(item => item.id === data.id);
                        if (index > -1) {
                          favoriteDetails.splice(index, 1);
                        }
                      } else {
                        favoriteDetails.push(data);
                        localStorage.setItem('favorites', JSON.stringify(favoriteDetails));
                      }
                    }}
                    size={19}
                  />
                </div>
              </section>

              <ul className='flex gap-3 self-center bg-[white]'>
                <li className='flex text-sm items-center gap-1'><FaBed className='text-[#7065F0]'/> {data.beds} Beds</li>
                <li className='flex text-sm items-center gap-1'><FaBath className='text-[#7065F0]'/> {data.bathrooms} Bathrooms</li>
                <li className='flex text-sm items-center gap-1'><img className='h-4' src={Squares} alt='Square Meters' /> {data.squareFeet}</li>
              </ul>
            </header>

            {data.popular ? 
            <>
              <div
                className='max-sm:scale-[0.8] max-sm:p-0 max-sm:pl-2 max-sm:pr-2 bg-[#7065F0] scale-[0.9] text-white text-[0.87em] rounded-xl rounded-bl-none p-2 pl-3 flex gap-2 items-center z-5 absolute top-40.5 -left-[0.704rem]'>
                <FaStarOfLife />
                <p>POPULAR</p>
              </div>
      
              <div
                className='max-sm:scale-[0.8] bg-[#5245ED] h-10 scale-[0.9] rotate-45 w-[100px] text-white text-sm rounded-xl rounded-bl-none p-2 flex gap-2 items-center absolute top-50 -left-[0.704rem]'>
              </div>
            </>
            :
            null}
          </article>
        </Link>
      )
    })
      
  )
}

export default PropertiesListData