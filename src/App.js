import axios from 'axios';
import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { Input } from '@chakra-ui/react';
import { Progress } from '@chakra-ui/react'
import CardUser from './components/CardUser/CardUser';

function App() {
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({})

  const onChangeValue = (e) => {
    setValue(e.target.value)
  }

  const onSubmitForm = (e) => {
    setLoading(true)
    e.perventDefault()
    const userValue = value.toLowerCase().replace(/ /g, ''); // Sanitizo la variable
    if (userValue) {
      axios.get(`https://api.github.com/users/${userValue}`).then((res) => setUserData(res.data))
    }
    setTimeout(() => {
      setLoading(false);
    }, 500);
    setValue('');
  }

  return (
    <div className="App">
      <NavBar />
      <form className='Form' onSubmit={onSubmitForm}>
        <Input
          placeholder='Buscar Usuario'
          variant='outlined'
          className='textField'
          value={value}
          onChange={onChangeValue}
        />
        <button>Buscar</button>
      </form>
      {loading ? (
        <Progress />
      ) : (
        userData.id && <CardUser userData={userData} />
      )}
    </div>
  );
}

export default App;
