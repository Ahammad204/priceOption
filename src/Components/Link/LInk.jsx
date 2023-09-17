
import PropTypes from 'prop-types'

const LInk = ({route}) => {
    return (
       
        <li className="mr-10" ><a href={`route.path`}> {route.name}</a></li>
    );
};

LInk.propTypes ={

    route: PropTypes.object

}

export default LInk;