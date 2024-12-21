import '../styling/progressBar.css'
import PropTypes from 'prop-types';


function ProgressBar( {width}) {

    return (
      <div className='container'>
      {
        width >= 0 && width <= 100 ? (
            <div className='innerContainer' style={{ width: `${width}%` }}>
            {width}%
        </div>
        ): (
            alert("Please enter value less than 100")
        )
      }
    
       
      </div>
    );
};

ProgressBar.propTypes = {

    width: PropTypes.number.isRequired
}

export default ProgressBar