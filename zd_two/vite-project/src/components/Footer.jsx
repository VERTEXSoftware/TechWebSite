import React from 'react';

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 w-full h-[20%] bg-gray-800 text-white">
      <div className='flex w-[70%] m-auto'>
        <div className='flex flex-col'>
      
          <span className='text-2x1 font-medium'>Page</span>
          <li>Home</li>
          <li>About</li>
          <li>Contacts</li>
          </div>

          <div className='flex flex-col'>
          <span className='text-2x1 font-medium'>Info</span>
          <li>Private policy</li>
          <li>Terms of services</li>

        </div>
      </div>
      <p>&copy; VERTEX Software 2025. All rights reserved.</p>
    </div>

  );
};

export default Footer;