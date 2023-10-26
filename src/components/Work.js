import React from 'react'
//image
import accounting from '../assets/accounting.png';
//image
import design from'../assets/design.png';

const Work = () => {
  return (
    <div id='work'>
      <div className='grid grid-cols-2'>
        <div className='px-20 text-gray-600'>
       <h3 className='text-2xl text-blue-700 mb-5'>Full-Stack Developer</h3>
       <p> UTO Software Solutions,Yangon ,Myanmar| Feb 2020 - August 2023</p>
       <p>
        - Led a team of 4 developers in designing, developing, and deploying a cloud-based accounting software using JavaScript, Node.js, and React.
        - Implemented complex financial algorithms to ensure accurate calculation of tax liabilities, resulting .
        - Optimized database queries, reducing response time and improving overall system performance.
        - Conducted code reviews and mentored junior developers, enhancing the overall quality of the team's output.
        </p>
          <div className='bg-about bg-contain bg-no-repeat mix-blend-lighten bg-top mt-10'>
              <img src={accounting} />
          </div>
        </div>
        <div className='px-20 text-gray-600'>
        <div className='bg-about bg-contain bg-no-repeat mix-blend-lighten bg-top mb-20 mt-10'>
            <img src={design} />
        </div>
        <h3 className='text-2xl text-blue-700 mb-5'>Web Designer</h3>
        <p>Green Hacker Institute, Yangon ,Myanmar| August 2019 - Jan-2020</p>
        <p>
          - Responsible for coding and building web pages using HTML, CSS, Javascript and Bootstrap focus on the front-end of websites.And to make sure that websites are responsive, meaning they adapt and look good on different screen sizes and devices, including desktops, tablets, and mobile phones.
        </p>
        
        </div>
      </div>
    </div>
  )
}

export default Work