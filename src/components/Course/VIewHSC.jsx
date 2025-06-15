import {useParams} from 'react-router-dom'

export default function VIewHSC() {

  const {courseId} = useParams()
  let formattedCourseId = courseId.replace(/_/g, ' ');

  const Data ={
    id: "HSC-001",
    img: 'https://res.cloudinary.com/dnpn8ljki/image/upload/v1749897520/COMPUTER_HARDWARE_AND_NETWORKING_ASSOCIATE_c7eegv.jpg',
    title: 'COMPUTER HARDWARE AND NETWORKING ASSOCIATE',
    description: "Professional training in computer assembly, networking fundamentals, and hardware troubleshooting. Gain hands-on experience with routers, switches, and system maintenance.",
    likes: "assembling computers, configuring networks, solving technical issues",
    duration: '52 Weeks',
    durationType: 'Long Duration',
    category: 'Hardware',
    skills: ['PC Assembly', 'Network Configuration', 'Troubleshooting', 'OS Installation'],
    certification: 'Hartron Certified Hardware Technician',
    careerPaths: ['Hardware Technician', 'Network Support Specialist', 'IT Support Engineer'],
    fee: '₹25,000',
    eligibility: '10th Pass'
  }

  return (
    <div className='bg-red-400 h-screen'>
      
      <div className='flex justify-center items-center uppercase mt-10 text-5xl font-semibold'>
        <h1>{formattedCourseId}</h1>
      </div>

    </div>
  )
}
