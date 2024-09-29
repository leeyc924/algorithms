import { useState } from 'react';
import { Link } from 'react-router-dom';

const ProblemPage = () => {
  const [value, setValue] = useState('1');
  return (
    <>
      문제를 선택해주세요
      <select value={value} onChange={e => setValue(e.target.value)}>
        <option value={1}>1</option>
        <option value={2}>2</option>
      </select>
      <Link to={`/${value}/management`}>이동</Link>
    </>
  );
};

export default ProblemPage;
