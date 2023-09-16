import './App.css';
import Card from './component/Card';
import Contactus from './component/Contactus';
import Country from './component/Country';

export type CountryType = {
  name: string;
  description: string;
  disclaimer: string;
}

const countries: CountryType[] = [
  { name: 'India', description: 'India is our country', disclaimer: '<span style="color:red;">India disclaimer</span>' },
  { name: 'UK', description: 'UK is our country', disclaimer: '<span style="color:green;">UK disclaimer</span>' },
  { name: 'USA', description: 'USA is our country', disclaimer: '<span style="color:blue;">USA disclaimer</span>' },
  { name: 'Canada', description: 'Canada is our country', disclaimer: '<span style="color:orange;">Canada disclaimer</span>' }
]

function App() {
  return (
    <div className="App">
      <Contactus />
      <div className="container text-center">
        <div className="row">
          {
            countries.map(country => {
              return <div key={country.name} className="col">
                <Country country={country}>This is common text</Country>
              </div>
            })
          }
        </div>
        <div className="row">
          <Card>
            <>
              <Card.Body>This is card body</Card.Body>
              <Card.Footer>This is card footer</Card.Footer>
            </>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
