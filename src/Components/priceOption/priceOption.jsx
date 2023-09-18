
import PropTypes from 'prop-types'
import Features from '../Features/Features';

const priceOption = ({option}) => {

    const {name,price,features} = option;

    return (
        <div className='bg-blue-800 rounded-md p-4 text-white flex flex-col '>
            
            <h2 className='text-center'>
                <span className='text-7xl font-extrabold'>{price}</span>
                <span className='text-2xl'></span>
            </h2>

        <h4 className='text-3xl text-center my-8'>{name}</h4>
        
        <div className='pl-6 flex-grow'>
        {

        features.map((feature,idx) => <Features key={idx} feature ={feature}></Features>)

    }
        </div>

        <button className='mt-12 bg-green-600 w-full  py-2 font-bold rounded-lg hover:bg-green-800'>Buy Now</button>

        </div>
    );
};

priceOption.prototype = {

    option: PropTypes.object

}

export default priceOption;