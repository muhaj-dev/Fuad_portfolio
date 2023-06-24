import React from 'react'
import fuad from '../../../public/img/fuad.svg'
import Image from 'next/image'

export const Profile = () => {
  return (
    <div>
        <p className='text-center text-[30px] font-bold mt-5' >My Profile</p>
        <div className='mt-2 bg-red-100'>
        <Image
            src={fuad}
            className="m-auto  "
            alt="lang"
            width={100}
            height={100}
            priority
          />
        </div>
    </div>
  )
}
