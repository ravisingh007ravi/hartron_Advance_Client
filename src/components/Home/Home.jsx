import Banner from './Banner'
import Swiper from './Swiper'
import Course from './Course'
import Testimonials from './Testimonials'
import Placement from './Placement '
import AdvanceCourse from './AdvanceCourse'

export default function Home() {
  return (
    <div>
      <Swiper />
      <Course />
      {/* <Banner /> */}
      <AdvanceCourse />
      <Testimonials />
      <Placement />
    </div>
  )
}
