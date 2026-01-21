import React, { useEffect, useState } from "react"
// Icons
// import { FaRegStar, FaStar } from "react-icons/fa"
import { Link } from "react-router-dom"

import GetAvgRating from "../../../utils/avgRating"
import RatingStars from "../../common/RatingStars"
import Img from './../../common/Img';



function Course_Card({ course, Height }) {
  // const avgReviewCount = GetAvgRating(course.ratingAndReviews)
  // console.log(course.ratingAndReviews)
  const [avgReviewCount, setAvgReviewCount] = useState(0)
  useEffect(() => {
    const count = GetAvgRating(course.ratingAndReviews)
    setAvgReviewCount(isNaN(count) || count === undefined || count === null ? 0 : count)
  }, [course])
  // console.log("count............", avgReviewCount)

  return (
    <div className='hover:scale-[1.02] transition-all duration-300 ease-out transform will-change-transform'>
      <Link to={`/courses/${course._id}`}>
        <div className="bg-transparent rounded-xl overflow-hidden">
          <div className="rounded-lg overflow-hidden aspect-video">
            <Img
              src={course?.thumbnail}
              alt="course thumnail"
              className="w-full h-full rounded-xl object-cover transition-transform duration-300 ease-out"
            />
          </div>
          <div className="flex flex-col gap-2 px-1 py-3">
            <p className="text-xl text-richblack-5">{course?.courseName}</p>
            <p className="text-sm text-richblack-50">
              {course?.instructor?.firstName} {course?.instructor?.lastName}
            </p>
        
            <p className="text-xl text-richblack-5">Rs. {course?.price}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Course_Card
