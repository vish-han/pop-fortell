import React from 'react'
import Dummy from '../assets/dummyimage1.jpg'
import pred from '../assets/pred1.png'
import predi from '../assets/pred2.png'
import prediction from '../assets/pred3.png'
const Details2 = () => {
  return (
    <div>
    <div className='flex '>
        <div className="text flex flex-col w-[60%]">
            <div className="uppertext font-bold text-white text-3xl  py-12 mx-12">
                Lorem ipsum dolor sit amet consectetur adipisicing.
            </div>
            <div className="midtext text-white text-xl font-semibold mx-12">
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque ex dicta aut amet? Necessitatibus vitae laudantium modi nihil in distinctio doloribus, iusto ad consectetur perspiciatis a repellat ex, sunt veniam!
            </div>
            <div className="lowertext text-white flex py-12 mx-12">
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit libero corporis sint, expedita beatae vel facere soluta voluptatem, quod sequi reprehenderit dolorem consequatur dolor deleniti veritatis autem at. Eaque voluptatum tempora rerum ex neque culpa aut ipsa alias nam id.
            </div>
        </div>
        <div className="img mt-16 px-6 w-[40%] ">
<img src={pred} alt="" className='rounded-lg'/>
        </div>
    </div>
    <div className='flex '>
        <div className="img mt-16 px-6 w-[40%] ">
        <img src={predi} alt="" className='rounded-lg'/>
        </div>
        <div className="text flex flex-col w-[60%]">
            <div className="uppertext font-bold text-white text-3xl  py-12 mx-12">
                Lorem ipsum dolor sit amet consectetur adipisicing.
            </div>
            <div className="midtext text-white text-xl font-semibold mx-12">
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque ex dicta aut amet? Necessitatibus vitae laudantium modi nihil in distinctio doloribus, iusto ad consectetur perspiciatis a repellat ex, sunt veniam!
            </div>
            <div className="lowertext text-white flex py-12 mx-12">
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit libero corporis sint, expedita beatae vel facere soluta voluptatem, quod sequi reprehenderit dolorem consequatur dolor deleniti veritatis autem at. Eaque voluptatum tempora rerum ex neque culpa aut ipsa alias nam id.
            </div>
        </div>
    </div>
    <div className='flex '>
        <div className="text flex flex-col w-[60%]">
            <div className="uppertext font-bold text-white text-3xl  py-12 mx-12">
                Lorem ipsum dolor sit amet consectetur adipisicing.
            </div>
            <div className="midtext text-white text-xl font-semibold mx-12">
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque ex dicta aut amet? Necessitatibus vitae laudantium modi nihil in distinctio doloribus, iusto ad consectetur perspiciatis a repellat ex, sunt veniam!
            </div>
            <div className="lowertext text-white flex py-12 mx-12">
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit libero corporis sint, expedita beatae vel facere soluta voluptatem, quod sequi reprehenderit dolorem consequatur dolor deleniti veritatis autem at. Eaque voluptatum tempora rerum ex neque culpa aut ipsa alias nam id.
            </div>
        </div>
        <div className="img  px-6 w-[40%] ">
<img src={prediction} alt="" className='rounded-lg'/>
        </div>
    </div>
    </div>
// ------------

    
  )
}

export default Details2