import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [candidates, setCandidates] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    const fetchCandidates = async () => {
      console.log("Fetchinf data");
      const response = await axios.get('http://localhost:5000/api/candidates');
      setCandidates(response.data);
    };
    fetchCandidates();
  }, []);

  const filteredCandidates = candidates.filter(
    (candidate) =>
      candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      candidate.skills.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedCandidates = [...filteredCandidates].sort((a, b) =>
    sortOrder === 'asc'
      ? a.yearsOfExperience - b.yearsOfExperience
      : b.yearsOfExperience - a.yearsOfExperience
  );

  return (
    <div>
      <h1>Candidate List Viewer</h1>
      <input
        type="text"
        placeholder="Search by name or skills"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />&nbsp;&nbsp;
      <button onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}>
      
        Sort by Experience ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})
      </button>
      <table className='table'>
        <thead>
          <tr>
            <th className='name'>Name</th> &nbsp; &nbsp; &nbsp;
            <th className='skills'>Skills</th> &nbsp; &nbsp; &nbsp;
            <th className='years'>Years of Experience</th>
          </tr>
        </thead>
        <tbody>
          {sortedCandidates.map((candidate) => (
            <tr key={candidate.id}>
              <td>{candidate.name}</td>
              <td>{candidate.skills}</td>
              <td>{candidate.yearsOfExperience}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
