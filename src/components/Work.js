import React from 'react'
//image
import accounting from '../assets/accounting.png';
//image
import design from'../assets/design.png';

const Work = () => {
  return (
    <div class ='section' id='work'>
      <div>
        <div>
       <h3>Full-Stack Developer</h3>
       <p> UTO Software Solutions,Yangon ,Myanmar| Feb 2020 - August 2023</p>
       <p>
        - Led a team of 4 developers in designing, developing, and deploying a cloud-based accounting software using JavaScript, Node.js, and React.
        - Implemented complex financial algorithms to ensure accurate calculation of tax liabilities, resulting .
        - Optimized database queries, reducing response time and improving overall system performance.
        - Conducted code reviews and mentored junior developers, enhancing the overall quality of the team's output.
        </p>
          <div className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top '>
              <img src={accounting} />
          </div>
        </div>
        <div>
        <h3>Web Designer</h3>
        <p>Green Hacker Institute, Yangon ,Myanmar| August 2019 - Jan-2020</p>
        <p>
          - Responsible for coding and building web pages using HTML, CSS, Javascript and Bootstrap focus on the front-end of websites.And to make sure that websites are responsive, meaning they adapt and look good on different screen sizes and devices, including desktops, tablets, and mobile phones.
        </p>
        <div className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top '>
            <img src={design} />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Work