import {useState,useEffect} from "react"
import './FilterBox.css'
const FilterBox = ({getMonthYear})=>{
    const[selectedMonth,setselectedMonth]=useState("January");
    const[selectedYear,setselectedYear]=useState(2024);
    const handleMonthChange = (e) =>{
        setselectedMonth(e.target.value)
    }
    const handleYearChange = (e) =>{
        setselectedYear(e.target.value)
    }

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",

    ];
    const years = [2024,2025]
    const updateParent =()=>{
        
        getMonthYear(selectedMonth,selectedYear)

    }
    const submitEventinfo= (e)=>{
           e.preventDefault()
           updateParent()
    }
    useEffect(()=>{
        updateParent()

    },[])
    return(
        <div>
            
            <form  className='filter-card'onSubmit={submitEventinfo}>
                <div className="wrapper">
                    <div className='date'>
                <label htmlFor='month'> Month: </label>
                    <select
                    value = {selectedMonth} 
                    onChange={handleMonthChange}
                    >
                        <option>Jan</option>
                        <option>Feb</option>
                        <option>March</option>
                        <option>April</option>
                        <option>May</option>
                        <option>June</option>
                        <option>July</option>
                        <option>Aug</option>
                        <option>Sept</option>
                        <option>Oct</option>
                        <option>Nov</option>
                        <option>Dec</option>
                    </select>
               
                <label htmlFor='year'> Year: </label>
                <select
                   value={selectedYear}
                   onChange={handleYearChange}
                >
                    <option>2024</option>
                    <option>2025</option>
                    
                </select>
                
                <div class="container">
               <div class="month-year">
               
               </div>
              <button type="submit" class="check-events-btn">Check Events</button>
              </div>

                </div>
                </div>
            </form>
        </div>
    )
}
export default FilterBox;