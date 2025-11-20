import React, { useMemo } from 'react';
import styles from "./rentDetails.module.css";
import { useNavigate, useParams, Link } from 'react-router-dom';
import properDetails from '../../../data/data';
import { FaBath, FaBed, FaCheckCircle, FaHome, FaLessThan, FaMapMarker, FaPaintBrush, FaQuestionCircle, FaReadme, FaSearch, FaSquare, FaStarOfLife, FaVideo } from 'react-icons/fa';
import { CiHeart, CiShare2 } from 'react-icons/ci';
import Owner from "../../../Images/ListingOwner.png";
import Squares from "../../../Images/Square-Meters-Outline.png";

const RentDetails = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const details = useMemo(
    () => properDetails.find(item => item.id === id),
    [id]
  );

  if (!details) return <p className="p-20">Property not found.</p>;

  const rentalFeatures1 = [
    { grey: 'Listed on', black: '1 week' },
    { grey: 'Date available', black: 'Available now' },
    { grey: 'Type', black: 'Home' },
    { grey: 'Laundry', black: 'In unit' },
    { grey: 'Cooling', black: 'Air Conditioner' },
    { grey: 'Heating', black: 'Forced Air' }
  ];

  const rentalFeatures2 = [
    { grey: 'City', black: 'Miami' },
    { grey: 'Year Built', black: '2018' },
    { grey: 'Size', black: '2,173 sqft' },
    { grey: 'Lot Size', black: '9,060 sqft' },
    { grey: 'Parking Area', black: 'Yes' },
    { grey: 'Deposit & Fees', black: '$2,400' }
  ];

  const stats = [
    { label: "Bedrooms", value: details.beds },
    { label: "Bathrooms", value: details.bathrooms },
    { label: "Square Area", value: details.beds },
    { label: "Repair Quality", value: "Modern Loft" },
    { label: "Status", value: "Active" }
  ];

  const rentalColClasses = "text-[#6C727F] text-[1em]";
  const rentalValueClasses = "text-[#000929] font-bold text-[1em] text-right";

  const similarListings = properDetails.filter(d => d.beds === details.beds && d.id !== id);

  return (
    <div className="flex flex-col gap-5">
      
      <button onClick={() => navigate(-1)} className="flex p-20 pb-0 pt-30 items-center gap-2 text-[#7065F0]">
        <FaLessThan /> Back to map
      </button>

      <section className="flex flex-col gap-10 p-20 pt-0" id={`details-${details.name}`}>

        <div>
          <h1 className="text-[2.5em]">{details.name}</h1>
          <div className="flex justify-between items-center">
            <p className="text-[#0009299a]">{details.location}</p>

            <div className="text-[#7065F0] flex items-center p- gap-4">
              <button className={`${styles['btn-secondary']}`}><CiShare2 /> Share</button>
              <button className={`${styles['btn-secondary']}`}><CiHeart /> Favorite</button>
              <button className={`${styles['btn-secondary']}`}><FaSearch /> Browse nearby listings</button>
            </div>
          </div>
        </div>

        <div id='Image-section' className="w-full flex justify-between gap-6">
          <img className="w-[65%] rounded-xl" src={details.imgUrl} alt={details.name} />
          <div className="w-[35%] flex flex-col gap-6">
            <img className="rounded-xl" src={details.imgUrl} alt={`${details.name}`} />
            <img className="rounded-xl" src={details.imgUrl} alt={`${details.name}`} />
          </div>
        </div>

        <div className="flex justify-between gap-8">

          <div className="w-[65%] flex flex-col gap-10">

            <div className="flex w-full items-center justify-around p-6 rounded-xl border border-[#F0EFFB]">
              {stats.map((item, index) => (
                <div key={index} className="flex flex-col gap-3">
                  <p className="text-[#0009297e] text-[1em]">{item.label}</p>
                  <p className="text-[1.1em]">{item.value}</p>
                </div>
              ))}
            </div>

            <article id='about-section' className="flex flex-col gap-10 pb-15 border-b border-[#F0EFFB]">
              <h3 className="text-2xl font-bold">About this home</h3>
              <p className="leading-7 text-[1em]">{details.description}</p>

              <div id='owner-card' className="bg-[#F7F7FD] border border-[#F0EFFB] p-4 rounded-xl flex flex-col gap-4">
                <p className="text-[#00092960]">Listed by property owner</p>

                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <img className="h-12 rounded-full mr-5" src={Owner} alt="" />
                    <div>
                      <h3 className="font-bold">Madina Aulia</h3>
                      <p className="text-sm text-[#00092950]">Rich Capital Properties LLC</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button className={`${styles['btn-light']}`}>Ask a question</button>
                    <button className={`${styles['btn-light']}`}><FaQuestionCircle /> Get more info</button>
                  </div>
                </div>

              </div>
            </article>

            <section id='rental-features' className="border-b border-[#E0DEF7] pb-10">
              <h3 className="text-2xl font-bold mb-5">Rental features</h3>

              <div className="flex gap-20 leading-13">

                <div className="flex w-[50%] justify-between">
                  <div>
                    {rentalFeatures1.map((item, index) => (
                      <p key={index} className={rentalColClasses}>{item.grey}</p>
                    ))}
                  </div>
                  <div>
                    {rentalFeatures1.map((item, index) => (
                      <p key={index} className={rentalValueClasses}>{item.black}</p>
                    ))}
                  </div>
                </div>

                <div className="flex w-[50%] justify-between">
                  <div>
                    {rentalFeatures2.map((item, index) => (
                      <p key={index} className={rentalColClasses}>{item.grey}</p>
                    ))}
                  </div>
                  <div>
                    {rentalFeatures2.map((item, index) => (
                      <p key={index} className={rentalValueClasses}>{item.black}</p>
                    ))}
                  </div>
                </div>

              </div>
            </section>

          </div>

          <aside id='price-box' className="h-fit w-[33%] p-6 border rounded-xl border-[#F0EFFB] flex flex-col gap-6">
            
            <div>
              <p className="text-[#0009297e] text-sm">Rent price</p>
              <h3 className="text-[#7065F0] text-2xl font-bold">
                {details.price}
                <span className="text-sm text-[#6C727F]">/month</span>
              </h3>
            </div>

            <button className={`${styles['btn-primary']}`}><FaReadme /> Apply now</button>

            <hr className="border-[#F0EFFB]" />

            <h3>Request a home tour</h3>

            <div className="flex gap-2">
              <button className={`${styles['btn-outline']} border-[#E0DEF7] text-[#0009297a]`}><FaHome /> In Person</button>
              <button className={`${styles['btn-outline']} bg-[#E8E6F9] text-[#7065F0] border-[#7065F0]`}><FaVideo /> Virtual</button>
            </div>

            <input type="date" className="border p-3 rounded-xl border-[#F0EFFB]" />

            <button className={`${styles['btn-dark']} bg-[#100A55]`}><FaMapMarker /> Request a tour</button>

            <p className="text-xs text-[#6C727F]">It's free with no obligation—cancel anytime.</p>
          </aside>

        </div>

      </section>

      <section id='similar-listing' className='bg-[#F7F7FD] p-20 flex flex-col gap-5'>
        <h2 className="text-3xl ml-6 font-bold">Similar listings</h2>

        <div className={`flex gap-6 overflow-scroll p-6 ${styles["no-scrollbar"]}`}>
          {similarListings.map(list => (
            <Link key={list.id} to={`/rent/${list.id}`}>
              <div
                className='bg-white w-[330px] h-fit relative shadow-xl shadow-[#00000010] rounded-2xl border-[#D6DDEB] border-2 flex flex-col'>
      
                <img className='object-cover rounded-xl rounded-b-none z-3 bg-[white] h-fit' src={list.imgUrl} alt={list.name}/>

                <div className='bg-white h-full w-full z-3 flex rounded-b-2xl gap-4 flex-col p-6'>
      
                  <div className='border-b border-[#F0EFFB] pb-2 flex bg-[white] h-full items-center justify-between'>
                    <div className='flex flex-col gap-2'>
                      <h3 className='text-[#7065F0] text-xl font-bold'>{list.price}<span className='text-[#6C727F] text-sm'>/month</span></h3>
                      <h3 className='font-bold text-2xl'>{list.name}</h3>
                      <p className='text-[#6C727F] text-[0.86em]'>{list.location}</p>
                    </div>
                    <div className='border-2 border-[#F0EFFB] p-1 -mt-10 rounded-[50%] w-fit'>
                      <CiHeart className='text-[#7065F0] text-2xl '/>
                    </div>
                  </div>
        
                  <div className='flex gap-3 self-center bg-[white]'>
                    <p className='flex text-sm items-center gap-1'><FaBed className='text-[#7065F0]'/> {list.beds} Beds</p>
                    <p className='flex text-sm items-center gap-1'><FaBath className='text-[#7065F0]'/> {list.bathrooms} Bathrooms</p>
                    <p className='flex text-sm items-center gap-1'><img className='h-4' src={Squares} alt='Square Meters' /> {list.squareFeet}</p>
                  </div>

                </div>

                {list.popular ? <><div 
                  className='bg-[#7065F0] text-white text-[0.87em] rounded-xl rounded-bl-none p-2 pl-3 flex gap-2 items-center z-5 absolute top-42.5 -left-[0.704rem]'>
                  <FaStarOfLife />
                  <p>POPULAR</p>
                </div>
        
                <div 
                  className='bg-[#5245ED] h-10 rotate-45 w-[100px] text-white text-sm rounded-xl rounded-bl-none p-2 flex gap-2 items-center absolute top-52 -left-[0.704rem]'>
                </div></>: null}
      
              </div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  )
}

export default RentDetails;
