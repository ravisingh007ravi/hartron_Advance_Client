import Banner from './Banner'
import Swiper from './Swiper'
import Course from './Course'
import Testimonials from './Testimonials'
import Placement from './Placement '

export default function Home() {
  return (
    <div>
      <Swiper/>
      <Banner/>
      <Course/>
      <Testimonials/>
      <Placement/>
    </div>
  )
}
