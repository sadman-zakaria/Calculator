// import React, { useState } from 'react'


// const Calculator = () => {

//     const [data, setData ] = useState("")

//     function getValue(e){
//         setData(data.concat(e.target.value) )     
//     }

//     function calculation(){
//         setData(eval(data).toString())
//     }

//     function Back(){
//         setData(data.slice(0,  - 1))
//     }

//     function Clear(){
//         setData("")
//     }
   
//   return (
//     <> 
//        <div className=' h-screen bg-gray-200  flex justify-center items-center'> 
        
//            <div className='bg-yellow-50 w-2/4 mx-auto container p-10 max-w-sm rounded-3xl'>   
//               <div>

//                 <h1 className='text-center text-3xl font-bold mb-5'>Calculator</h1>

//                 <input className='w-full p-2 text-3xl border-2 rounded-2xl' type="text" placeholder='0' value={data} />
//                </div>

//                <div className='grid grid-cols-5 items-center justify-between gap-5 mt-5'>
//                     <button onClick={getValue}  className='btn' value="(">(</button>
//                     <button onClick={getValue}  className='btn' value=")">)</button>
//                     <button onClick={getValue}  className='btn' value="%">%</button>
//                     <button onClick={Clear}  className='btn' >AC</button>
//                     <br />
//                     <button onClick={getValue}  className='btn' value="7">7</button>
//                     <button onClick={getValue}  className='btn' value="8">8</button>
//                     <button onClick={getValue}  className='btn' value="9">9</button>
//                     <button onClick={getValue}  className='btn' value="*">*</button>
//                     <br />
//                     <button onClick={getValue}  className='btn' value="4">4</button>
//                     <button onClick={getValue}  className='btn' value="5">5</button>
//                     <button onClick={getValue}  className='btn' value="6">6</button>
//                     <button onClick={getValue}  className='btn' value="-">-</button>
//                     <br />
//                     <button onClick={getValue}  className='btn' value="1">1</button>
//                     <button onClick={getValue}  className='btn' value="2">2</button>
//                     <button onClick={getValue}  className='btn' value="3">3</button>
//                     <button onClick={getValue}  className='btn' value="+">+</button>
//                     <br />
//                     <button onClick={getValue}  className='btn' value="0">0</button>
//                     <button onClick={Back}  className='btn' >Back</button>
//                     <button onClick={getValue} className='btn' value="/">/</button>
//                     <button onClick={calculation}  className='btn' value="=">=</button>

//                     <p className='text-center text-2xl font-bold mt-5 grid-rows-1'>{data}
                        
//                     </p>
                    
//                 </div>
//            </div>
           
//        </div>
//     </>
//   )
// }

// export default Calculator


import React, { useState } from "react";

const Calculator = () => {
  const [data, setData] = useState("");

  function getValue(e) {
    setData((prev) => prev + e.target.value);
  }

  function calculation() {
    try {
      setData(eval(data).toString());
    } catch {
      setData("Error");
    }
  }

  function Back() {
    setData((prev) => prev.slice(0, -1));
  }

  function Clear() {
    setData("");
  }

  return (
    <div className="h-screen bg-gray-200 flex justify-center items-center p-4">
      <div className="bg-yellow-50 w-full  p-6 rounded-3xl max-w-lg shadow-lg">
        <h1 className="text-center text-3xl font-bold mb-5">Calculator</h1>

        {/* Display */}
        <input
          className="w-full p-3 text-3xl  border-2 rounded-2xl mb-4 bg-white"
          type="text"
          placeholder="0"
          value={data}
          readOnly
        />

        {/* Buttons Grid */}
        <div className="grid grid-cols-4 gap-3">
          {["(", ")", "%", "AC"].map((item) => (
            <button
              key={item}
              className="btn bg-red-400"
              value={item}
              onClick={item === "AC" ? Clear : getValue}
            >
              {item}
            </button>
          ))}
          {["7", "8", "9", "*"].map((item) => (
            <button key={item} className="btn" value={item} onClick={getValue}>
              {item}
            </button>
          ))}
          {["4", "5", "6", "-"].map((item) => (
            <button key={item} className="btn" value={item} onClick={getValue}>
              {item}
            </button>
          ))}
          {["1", "2", "3", "+"].map((item) => (
            <button key={item} className="btn" value={item} onClick={getValue}>
              {item}
            </button>
          ))}
          <button className="btn" value="." onClick={getValue}>
            .
          </button>
          
          <button className="btn" value="0" onClick={getValue}>
            0
          </button>
          <button className="btn bg-yellow-400" onClick={Back}>
            Back
          </button>
          <button className="btn bg-green-500" onClick={calculation}>
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
