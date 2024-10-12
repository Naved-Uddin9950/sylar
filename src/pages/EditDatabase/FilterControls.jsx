import React from 'react';

const FilterControls = ({ filter, setFilter, data }) => {
    const years = [...new Set(data.map(item => item.year))];
    const topics = [...new Set(data.flatMap(item => item.topics))];

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilter(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="flex space-x-4 mb-4">
            <select
                name="year"
                value={filter.year}
                onChange={handleFilterChange}
                className="p-2 bg-primary rounded-md cursor-pointer"
            >
                <option value="">Select Year</option>
                {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                ))}
            </select>

            <select
                name="topic"
                value={filter.topic}
                onChange={handleFilterChange}
                className="p-2 bg-primary rounded-md cursor-pointer"
            >
                <option value="">Select Topic</option>
                {topics.map(topic => (
                    <option key={topic} value={topic}>{topic}</option>
                ))}
            </select>
        </div>
    );
};

export default FilterControls;