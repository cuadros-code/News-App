import React, { useEffect, useState } from 'react';
import { Form } from './components/Form';
import { Header } from './components/Header';
import { ListNews } from './components/ListNews';

function App() {

  const [saveCategorie, setSaveCategorie] = useState<string>('');
  const [resultNews, setResultNews] = useState([]);

  useEffect(() => {

    const callAPI = async () => {

      const URL = `http://newsapi.org/v2/top-headlines?country=co&category=${saveCategorie}&apiKey=276435fcbb2a42768c0276a9b2dd57a5`;
      const result = await fetch( URL );
      const { articles } = await result.json();
      // const  { articles }:any = await axios.get( URL );
      setResultNews( articles );

    }
    callAPI();

  }, [ saveCategorie ])

  return (
    <div className="content-app">
      <Header
        title="App News"
      />
      <div
        className="container
       white">
          <Form 
            setSaveCategorie={ setSaveCategorie }
          />

          <ListNews news={resultNews} />
      </div>
    </div>
  );
}

export default App;
