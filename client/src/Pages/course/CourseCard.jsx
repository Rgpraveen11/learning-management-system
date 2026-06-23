import { useNavigate } from 'react-router-dom'

function CourseCard({ data }) {
    const navigate = useNavigate()
    console.log("CourseCard Data:", data)
    console.log("Lectures =", data.numberOfLectures)
    return (
<div
  onClick={() => {
    console.log("Sending Data =", data);
console.log("Lectures Count =", data.numberOfLectures);
    navigate('/course/description', { state: data });
  }}
>
            <figure><img src={data.thumbnail?.secure_url} alt="course thumbnail" className="w-full h-60 group-hover:scale[1.1]" /></figure>
            <div className="card-body">
                <h2 className="card-title capitalize text-xl text-white">
                    {data.title}
                    <span className="badge badge-primary text-xs">NEW</span>
                </h2>
                <p className="capitalize font-bold">Instructor : <span className='text-blue-500'>{data.createdBy}</span></p>
                <p className="capitalize font-bold">Number of Lectures : <span className="text-blue-500">
  {data.numberOfLectures}
</span></p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline capitalize py-4 px-3 border-yellow-400 border-2">{data.category}</div>
                </div>
            </div>
        </div>
    )
}

export default CourseCard
