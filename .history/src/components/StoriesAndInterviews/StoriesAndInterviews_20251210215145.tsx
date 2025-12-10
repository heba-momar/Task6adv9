import { Link } from "react-router-dom"
import type { StoriesAndInterviewsProps } from "../../Interface/Interface"


const StoriesAndInterviews = ({ pargraphSize }:StoriesAndInterviewsProps) => {
  return (
      <div className="mt-5 md:mt-[72px]">
            <p className=" font-semibold text-center tracking-wider text-pink01 leading-6">Newlatters</p>
            <h4 className="text-5xl font-semibold leading-[60px] mt-3  md:text-center ">Stories and interviews</h4>
            <p className={`text-[20px] leading-[30px] tracking-wider text-gray01 mt-6 md:text-center  lg:mx-auto ${pargraphSize}`}>Subscribe to learn about new product features, the latest in technology, solutions, and updates.</p>

            <div className="mt-10 flex flex-col md:items-center">
                <div >
                    <div className="flex flex-col gap-3 md:flex-row ">
                        <input type="Email" placeholder="Enter your email"  className="pr-3.5 pl-4 py-3 border border-gray02 rounded-lg placeholder:text-gray01 md:w-[360px]" />
                        <button className="bg-pink01 px-5 py-3 text-white rounded-lg w-fit">Subscribe</button>
                    </div>
                    <p className="text-sm mt-3 text-gray01">We care about your data in our <Link to="#" className="underline">privacy policy</Link> </p>
                </div>
            </div>
        </div>
  )
}

export default StoriesAndInterviews
