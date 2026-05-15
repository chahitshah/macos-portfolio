import React, { useEffect, useState } from 'react'
const DateTime = () => {
    const [time, settime] = useState(new Date());

    useEffect(()=>{
        const interval = setInterval(() => {
            settime(new Date())
        },1000);

        return ()=> clearInterval(interval);
    },[])
  return (
    <div>
        {
            time.toLocaleString("en-US", {
   weekday: "short",
   month: "short",
   day: "numeric",
   hour: "numeric",
   minute: "2-digit",
   second: "2-digit",
   hour12: true,
})

        }
    </div>
  )
}

export default DateTime
