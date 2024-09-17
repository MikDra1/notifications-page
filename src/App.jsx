import { useState } from 'react';
import Comments from './components/Comments';
import Header from './components/Header';

function App() {
  const [isNew, setIsNew] = useState(true)
  const [newComments, setNewComments] = useState(3)

  return (
    <div className='container'>
      <Header setNewComments={setNewComments} newComments={newComments} isNew={isNew} setIsNew={setIsNew} />
     <Comments isNew={isNew} newComments={newComments} setNewComments={setNewComments} />
    </div>
  )
}

export default App
