import PropTypes from 'prop-types';

const Time = ({time}) => {
    return (
        <div className=' text-violet-900 p-4'>
            <h1>Spent Time on Read : {time} min</h1>
        </div>
    );
};

Time.propTypes ={
    time: PropTypes.number
}
export default Time;