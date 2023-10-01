"use client"


export default function ScheduleCard(organizer) {
    const {intervals,day} = organizer.organizer;


    return (
        <div className="lg:py-6 px-10 text-[#0A142F] bg-white rounded-lg">
        <p className=" text-xl font-bold pb-2 lg:pb-6">{day}</p>
        <div>
        {
            intervals?.map((interval,i) =><p key={i} className="opacity-80 text-base font-normal pb-3 lg:pb-6">Duration: {interval.begin} - {interval.end}</p>)
        }
        </div>
    </div>
  )
}
