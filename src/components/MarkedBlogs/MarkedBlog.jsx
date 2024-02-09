import PropTypes from 'prop-types';

const MarkedBlog = ({singleBlog}) => {
  
    return (
        <div className='bg-white p-7 rounded-md mt-5'>
            <h2 className='text-xl font-semibold'>{singleBlog.title}</h2>
        </div>
    );
};

MarkedBlog.propTypes = {
    singleBlog: PropTypes.object
};

export default MarkedBlog;