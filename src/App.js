import React,{useState,useEffect} from 'react'
import View from './View'

//function to get the value from localstorage
const getDatafromLS=()=>{
  const data = localStorage.getItem('books'); 
  if(data){
    return JSON.parse(data)
  }else{
    return[]
  }

}


function App(){

  const[books,setBooks] =useState([getDatafromLS()])

  const [tittle,setTittle] =useState('')
  const [author,setAuthor] =useState('')
  const [bookno,setBookno] =useState('')

  const handleAddBookSubmit=(event)=>{
    event.preventDefault();

    let book={
      tittle,
      author,
      bookno
    }
    setBooks([...books,book]);
    setTittle('')
    setAuthor('')
    setBookno('')
  }

  useEffect(()=>{
     localStorage.setItem('books',JSON.stringify(books))
  },[books])

  return(
    <div className='wrapper'>
      <h1 align="center">Booklist App</h1>
      <p align="center">Add and view your books using local storage</p>
      <div className='main'>
        <div className='form-conatiner'>
          <form autoCapitalize='off' onSubmit={handleAddBookSubmit}>
          <br/><br/>
            <label>Tittle</label><br/>
            <input type="text" onChange={(event)=>setTittle(event.target.value)} value={tittle} className='text' required/>
            <br/><br/>
            <label>Author</label><br/>
            <input type="text"  onChange={(event)=>setAuthor(event.target.value)} value={author} className='text' required/>
            <br/><br/>


            <label>Book No.</label><br/>
            <input type="text" onChange={(event)=>setBookno(event.target.value)} value={bookno}   className='text' required/>
            <br/><br/>

            <button type='submit' className='btn'>Add</button>
          </form>

        </div>
        <div className='view-conatiner'>
        
            {books.length>0 &&<div>
              <table border="1" >
                <thead>
                  <tr className='tr'>
                   

                    <tb>Tittle</tb>
                    <tb>Author</tb>
                    <tb>bookno</tb>
                

                    
                  </tr>
                </thead>
                <tbody>
                  <View books={books}/>
                </tbody>
              </table>
              
              
              </div>}
              {books.length<1 && <div>No Books Found </div>}
        </div>
      </div>

    </div>
  )
}

export default App;