import { useEffect, useState } from "react"
import axios from "axios"

const Contact =() => {
    const [email, setEmail] = useState('')
    const [message, setMesage] = useState('')
    const [error, setError] = useState('')
    const [selectData, setSelectData] = useState([])
    const [selectValue, setSelectValue] = useState('')

    useEffect(()=>{
        let processing = true        
        axiosFetchData(processing)
        return () =>{
            processing=false
        }         
    },[])

    // const fetchData = async(processing) => {    
    //     await fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(res=>res.json())
    //     .then(data=> {
    //         if(processing) {
    //             setSelectData(data) }})
    //     .catch(err => console.log(err))
    // }

    const axiosFetchData =  async(processing) => {
        // const options = {
        //     email:email,
        //     message:message
        // }
        await axios.get('http://localhost:4000/users')
        //await axios.post('https://jsonplaceholder.typicode.com/users',options)
        .then(res=>{
            if(processing){
                setSelectData(res.data)
            }
        })    
        .catch(err => console.log(err))
    }

    const axiosPostData = async() =>{
        const postData = {
            email:email,
            website: selectValue,
            message: message
        }
        await axios.post('http://localhost:4000/contact', postData)
        .then(res =>setError(<p className="success">{res.data}</p>))

    }

    const SelecteDropdown =() =>{
        return (
            <select value={selectValue} onChange={(e)=>setSelectValue(e.target.value)}>
            {
                selectData?.map( (item) => (
                   <option value={item.website} key={item.website}>{item.website}</option>
                 
                )) 
            } 
            </select>
        )
    }
 
    const handleSumbit = (e) =>{
        e.preventDefault()

        console.log(email , '|' , selectValue, '|', message)

        if (!message) {
            setError(<p className="required">Message is empty, please type a message</p>)
        }else{
            setError('')
                       
        }
        setError('')
            axiosPostData()  
    }

    return (
        <>
        <h2>Contact us </h2>
        <form className="contactForm">
            <label>Email</label>
            <input type="text" id="email" name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)} /> 

            <label>How did you hear aobut us?</label>
            <SelecteDropdown />
          

            <label>Message</label>
            <textarea id="message" name="email"
            value={message}
            onChange={(e)=>setMesage(e.target.value)}></textarea>

            {error}

        <button type="submit" onClick={handleSumbit}>submit</button>


        </form>
        </>

    )
}

export default Contact
