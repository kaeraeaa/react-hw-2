import Greeting from './Greetings';
import Message from './Message';
import Button from './Button';


function App() {
  const handleClick = () => {
      console.log('button click');
  };

  return (
      <div>
          <Greeting name="kaeraea" />
          <Message text="hiiiiii" />
          <Button onClick={handleClick} />
      </div>
  );
}


export default App;