import React from 'react'


 const View = ({books}) => {
  return books.map(book=>(
     <tr className='tr' key={book.bookno}>
      <tb>{book.tittle}</tb>
      <tb>{book.author}</tb>
      <tb>{book.bookno}</tb>
    
     </tr>
     
  ))
      
  
}

export default View;
