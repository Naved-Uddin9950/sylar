import React, { useState } from 'react';

const QuestionTable = ({ data, onUpdate }) => {
    const [editMode, setEditMode] = useState(null);

    // Handle input change
    const handleInputChange = (e, id, field, index = null) => {
        const { value } = e.target;
        const updatedItem = data.find(item => item.id === id);

        if (field === 'topics') {
            updatedItem[field][index] = value; // Update a specific topic
        } else if (field === 'questions') {
            updatedItem[field][index] = value; // Update a specific question
        } else {
            updatedItem[field] = value; // Update year
        }

        onUpdate(id, updatedItem); // Call parent function to update state
    };

    return (
        <table className="w-full text-left table-auto border-collapse">
            <thead>
                <tr>
                    <th className="border px-4 py-2">Year</th>
                    <th className="border px-4 py-2">Topics</th>
                    <th className="border px-4 py-2">Questions</th>
                    <th className="border px-4 py-2">Actions</th>
                </tr>
            </thead>
            <tbody>
                {data.map(item => (
                    <tr key={item.id}>
                        <td className="border px-4 py-2">
                            {editMode === item.id ? (
                                <input
                                    type="text"
                                    value={item.year}
                                    onChange={(e) => handleInputChange(e, item.id, 'year')}
                                    className="border rounded-md p-2 w-full bg-transparent"
                                />
                            ) : (
                                item.year
                            )}
                        </td>
                        <td className="border px-4 py-2">
                            {editMode === item.id
                                ? item.topics.map((topic, index) => (
                                    <input
                                        key={index}
                                        type="text"
                                        value={topic}
                                        onChange={(e) => handleInputChange(e, item.id, 'topics', index)}
                                        className="border rounded-md p-1 w-full my-1 bg-transparent"
                                    />
                                ))
                                : item.topics.join(', ')}
                        </td>
                        <td className="border px-4 py-2">
                            {editMode === item.id
                                ? item.questions.map((question, index) => (
                                    <input
                                        key={index}
                                        type="text"
                                        value={question}
                                        onChange={(e) => handleInputChange(e, item.id, 'questions', index)}
                                        className="border rounded-md bg-transparent p-1 w-full my-1"
                                    />
                                ))
                                : item.questions.join(', ')}
                        </td>
                        <td className="border px-4 py-2">
                            {editMode === item.id ? (
                                <button
                                    onClick={() => setEditMode(null)}
                                    className="bg-primary hover:bg-secondary hover:scale-110 font-semibold px-2 py-1 rounded-md"
                                >
                                    Save
                                </button>
                            ) : (
                                <button
                                    onClick={() => setEditMode(item.id)}
                                    className="bg-primary hover:bg-secondary hover:scale-110 font-semibold px-2 py-1 rounded-md"
                                >
                                    Edit
                                </button>
                            )}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default QuestionTable;