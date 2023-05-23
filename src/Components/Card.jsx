import React, { useContext, useEffect} from 'react'
import QouteContext from '../Context/QouteContext'
import { getQoute } from '../Context/QouteActions'


const Card = () => {

  const { qoute, dispatch } = useContext(QouteContext)

  const handleClick = async () => {
    const data = await getQoute()
    dispatch({
      type: "GET_QOUTE",
      payload: data
    })
  }


  useEffect(() => {

    handleClick()

  }, [])

  if (!qoute) {
    return ( <>
   
   <button className="btn btn-emphasis " id='spinner' type="button" disabled>
  <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
  <span className="visually-hidden">Loading...</span>
</button>
<button className="btn btn-emphasis " id='spinner' type="button" disabled>
  <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
  Loading...
</button>
</>
    )
  }
    
  

  

  return (
    <body className='body'>
      {/* <h1 className='date'>{qoute.dateAdded}</h1> */}
      <input id="card-one" className="hidden" type="radio" name="ok-button" checked />
      <input id="card-two" className="hidden" type="radio" name="ok-button" />
      <input id="card-three" className="hidden" type="radio" name="ok-button"></input>
      <div className="container">

        <div className="inner inner-one ">
        

          <h1 className='hone'>Qoute-app  </h1>
          <div className="box">
            <div className="triangle">
            </div>
            <p className="number">{qoute.length}</p>
            <div className="text">
              <i className="start-quote fas fa-quote-left"></i>
              <p className="quote">{qoute.content}</p>
              <p className="credit">{qoute.author}</p>
              <p className='credit two'>{qoute.dateAdded}</p>

              
            </div>

            <button className="button" onClick={handleClick}>next</button>
          </div>
        </div>


      </div>
    </body>
  )
}

export default Card
