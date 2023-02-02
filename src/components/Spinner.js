
import loading from "./loading.gif"
const Spinner=()=>{
    return (
      <div className='text-center'>
        <img className='my-5' style={{height:"5rem"}} src={loading} alt="loading"  />
      </div>
    )
  }
export default Spinner
