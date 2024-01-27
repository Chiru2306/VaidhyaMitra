import React, { useState } from 'react';
import './App.css';

const SearchComponent = ({ elements, selectedElements, handleCheckboxChange, inputValues, handleInputChange }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [tableVisible, setTableVisible] = useState(true); // State to track table visibility
    // State to track input values for each element

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };



    const filteredElements = elements.filter((element) => {
        return element.toLowerCase().includes(searchTerm.toLowerCase());
    });

    const toggleTableVisibility = () => {
        setTableVisible(!tableVisible);
    };

    return (
        <div>
            <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Ex: Dolo 640mg.." />
            <button onClick={toggleTableVisibility}>Hide/Unhide</button>
            {tableVisible && (
                <table>
                    <thead>
                        <tr>
                            <td><h4>Medicine Name</h4></td>
                            <td>
                                <h3>B  M  A  N</h3>
                            </td>
                            <td><h3>Dosage(Days)</h3></td>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredElements.map((element, index) => {
                            const selectedElement =
                                selectedElements.find((el) => el.element === element) || {
                                    element,
                                    checkbox0: false,
                                    checkbox1: false,
                                    checkbox2: false,
                                    checkbox3: false,
                                };

                            return (
                                <tr key={index}>
                                    <td>{element}</td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            name="checkbox0"
                                            checked={selectedElement.checkbox0}
                                            onChange={(event) => handleCheckboxChange(event, element)}
                                        />
                                        <input
                                            type="checkbox"
                                            name="checkbox1"
                                            checked={selectedElement.checkbox1}
                                            onChange={(event) => handleCheckboxChange(event, element)}
                                        />
                                        <input
                                            type="checkbox"
                                            name="checkbox2"
                                            checked={selectedElement.checkbox2}
                                            onChange={(event) => handleCheckboxChange(event, element)}
                                        />
                                        <input
                                            type="checkbox"
                                            name="checkbox3"
                                            checked={selectedElement.checkbox3}
                                            onChange={(event) => handleCheckboxChange(event, element)}
                                        />
                                    </td>
                                    <td>
                                        <div >
                                            <input className="aaa"
                                                type="text"
                                                value={inputValues[element] || ''}
                                                onChange={(event) => handleInputChange(event, element)}
                                            />
                                        </div>

                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            )}
            <div>
                <h3>Selected Medicines:</h3>
                <ul>
                    {selectedElements.map((selectedElement, index) => (
                        <li key={index}>
                            {selectedElement.element} - {selectedElement.checkbox0 ? 'B' : ' '}
                            {selectedElement.checkbox1 ? 'M' : ' '}
                            {selectedElement.checkbox2 ? 'A' : ' '}
                            {selectedElement.checkbox3 ? 'N' : ' '}
                            {inputValues[selectedElement.element] && ` - ${inputValues[selectedElement.element]} days`} {/* Display the input value */}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SearchComponent;
