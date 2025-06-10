import {useParams} from 'react-router-dom'

export default function ViewCourse() {

  const {courseId} = useParams()
  let formattedCourseId = courseId.replace(/_/g, ' ');

  return (
    <div>
      
      <div className='flex justify-center items-center uppercase tektur-font mt-10 text-5xl font-semibold'>
        <h1>{formattedCourseId}</h1>
      </div>

    </div>
  )
}
