import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./favorite.module.css"
import FavoriteButton from '../../components/favoriteFunction.jsx'
import { FaBed, FaList, FaTrash } from 'react-icons/fa';
import { FaBath } from 'react-icons/fa';
import Squares from "../../Images/Square-Meters-Outline.png";
import { FaStarOfLife } from 'react-icons/fa';
import { BsFillGridFill } from "react-icons/bs";
import User from '../../components/User.jsx';

const Favorite = () => {
  const { userData } = React.useContext(User)
  const name = userData.name
  const [gridView, setGridView] = React.useState(true);
  const favoriteItems = JSON.parse(localStorage.getItem('favorites')) || [];

  return (
    <div className='p-10 pt-7 flex flex-col gap-7'>
      <h1 className='text-3xl font-bold hidden'>Favorited page of {name}</h1>
      <div className='flex items-center justify-between border-[0.09375rem] border-[#E8E6F9] rounded-xl p-3'>
        <select className={`${styles['first-select']}`}>
          <option>Showing all</option>
        </select>
        <div className='flex items-center gap-4'>
          <select className={styles.select}>
            <option>By date added</option>
          </select>

          <button 
            className='border-[0.09375rem] border-[#E8E6F9] rounded-xl p-2'
            onClick={() => setGridView(prev => !prev)}>
            {gridView ? <FaList />: <BsFillGridFill />}
          </button>

          <button
            onClick={() => {
              localStorage.removeItem('favorites');
              window.location.reload();
            }}
            className='text-[#F06565] text-sm flex items-center gap-2 border-[0.09375rem] rounded-xl p-2'>
            <FaTrash /> Remove all
          </button>
        </div>
      </div>
      <div className={`w-full flex ${gridView ? 'flex-wrap justify-center  gap-10' : 'flex-col items-center gap-10' }`}>
        {/* Add your favorited items display logic here */}
        {favoriteItems.length === 0 ? (
          <p>No favorited items yet...</p>
        ) : (
          favoriteItems.map((item, index) => (
            <Link key={index} to={`/rent/${item.id}`}>
              <div
                className=' bg-white w-[330px] h-fit relative shadow-xl shadow-[#00000010] rounded-2xl border-[#D6DDEB] border-2 flex flex-col'>
      
                <img className='object-cover rounded-xl rounded-b-none z-3 bg-[white] h-fit' src={item.imgUrl} alt={item.name}/>

                <div className='bg-white h-full w-full z-3 flex rounded-b-2xl gap-4 flex-col p-6'>
      
                  <div className='border-b border-[#F0EFFB] pb-2 flex bg-[white] h-full items-center justify-between'>
                    <div className='flex flex-col gap-2'>
                      <h3 className='text-[#7065F0] text-xl font-bold'>{item.price}<span className='text-[#6C727F] text-sm'>/month</span></h3>
                      <h3 className='font-bold text-2xl'>{item.name}</h3>
                      <p className='text-[#6C727F] text-[0.86em]'>{item.location}</p>
                    </div>
                    <div className='border-2 border-[#F0EFFB] flex items-center p-1.5 -mt-10 rounded-[50%] w-fit'>
                      <FavoriteButton 
                        isFavorite={favoriteItems.some(item => item.id === item.id)}
                        onToggle={() => {
                          if (favoriteItems.some(item => item.id === item.id)) {
                            const index = favoriteItems.findIndex(item => item.id === item.id);
                            if (index > -1) {
                              favoriteItems.splice(index, 1);
                            }
                          } else {
                            favoriteItems.push(item);
                          }
                        }}
                        size={24}
                      />
                    </div>
                  </div>
        
                  <div className='flex gap-3 self-center bg-[white]'>
                    <p className='flex text-sm items-center gap-1'><FaBed className='text-[#7065F0]'/> {item.beds} Beds</p>
                    <p className='flex text-sm items-center gap-1'><FaBath className='text-[#7065F0]'/> {item.bathrooms} Bathrooms</p>
                    <p className='flex text-sm items-center gap-1'><img className='h-4' src={Squares} alt='Square Meters' /> {item.squareFeet}</p>
                  </div>

                </div>

                {item.popular ? <><div
                  className='bg-[#7065F0] text-white text-[0.87em] rounded-xl rounded-bl-none p-2 pl-3 flex gap-2 items-center z-5 absolute top-42.5 -left-[0.704rem]'>
                  <FaStarOfLife />
                  <p>POPULAR</p>
                </div>

                <div
                  className='bg-[#5245ED] h-10 rotate-45 w-[100px] text-white text-sm rounded-xl rounded-bl-none p-2 flex gap-2 items-center absolute top-52 -left-[0.704rem]'>
                </div></>: null}

              </div>
            </Link>
          ))
        )} 
      </div>
    </div>
  )
}

export default Favorite