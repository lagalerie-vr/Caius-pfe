import React from 'react';
import PropTypes from 'prop-types';

const Progress = ({ percentage }) => {
    return (
        <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
            <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                style={{ width: `${percentage}%` }} >
                {percentage}%
            </div>
        </div>
    );
};





Progress.propTypes = {
    percentage: PropTypes.number.isRequired
};

export default Progress;