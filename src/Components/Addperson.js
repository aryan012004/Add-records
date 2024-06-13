import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

function Addperson() {

  let [person, setPerson] = useState({});
  let [data, setData] = useState([]);
  let [hobby , setHobby] = useState([]);
  let [city , setCity] = useState(["Surat" , "Vadodra" , "Ahemdabad","Heydrabad"]);
  let [personError, setPersonError] = useState({});




  useEffect(() => {
    setTimeout(() => {
      let localRecord = JSON.parse(localStorage.getItem('data'));
      if (localRecord == null) {
        setData([]);
      }
      else {
        setData(localRecord)
      }
    }, 1000)
  }, setData);


  let getInputvalue = (e) => {
    let name = e.target.name;
    
    let value = e.target.value;
    if(name == 'image')
    {
      if(e.target.file)
      {
        value=URL.createObjectURL(e.target.file[0])
      }
    }

    let newData = { ...person, [name]: value }
    setPerson(newData);

  }

  let handelsubmit = (e) => {
    e.preventDefault();
    person['id'] = Math.round(Math.random() * 1000);

    var confirm = window.confirm("Are You Sure");
    if (confirm) {
      var newRacord = ([...data, person])
      setData(newRacord);
      localStorage.setItem('data', JSON.stringify(newRacord));
     
  }
  setPerson({});
}

  return (

    <div>
      <Container>
        <Row className="justify-content-md-center">
          <Col md={6}>
            <Form method='post' onSubmit={(e) => handelsubmit(e)} className="mt-5 p-4 rounded"style={{backgroundColor:'rgb(69 214 255)',padding:'50px'}} >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name='email' value={person.email ? person.email : ""} onChange={(e) => getInputvalue(e)} />
                <span style={{ color: "red" }}>{personError.email ? personError.email : ""}</span>
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name='password' value={person.password ? person.password : ""} onChange={(e) => getInputvalue(e)} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Label>Select Gender</Form.Label><br></br>
                  <Form.Check inline name='gender' type="radio" id="default-1" label="Male" value="male" checked={person.gender?person.gender == 'male'?person.gender:"":""} onChange={(e) => getInputvalue(e)}/>
                  <Form.Check inline name='gender' type="radio" id="default-1" label="Female" value="female" checked={person.gender?person.gender == 'female'?person.gender:"":""} onChange={(e) => getInputvalue(e)}/>
              </Form.Group>


              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Label>Select Hobby</Form.Label><br></br>
                  <Form.Check inline type="checkbox" id="default-1" label="Reading" value="Reading" name='hobby' onChange={(e) => getInputvalue(e)}/>
                  <Form.Check inline type="checkbox" id="default-1" label="Dancing" value="Dancing" name='hobby' onChange={(e) => getInputvalue(e)}/>
                  <Form.Check inline type="checkbox" id="default-1" label="Playing" value="Playing" name='hobby' onChange={(e) => getInputvalue(e)}/>
              </Form.Group>


              <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Label>Select City</Form.Label><br></br>
              <Form.Select aria-label="Default select example" name='city' onChange={(e) => getInputvalue(e)}>
                <option>-- Select City --</option>
              {city.map((v)=> {
                  return(
                    <option value={v}>{v}</option>
                  )
                })
                }
              </Form.Select>
              </Form.Group>
                
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} name='text' value={person.text ? person.text : ""} onChange={(e) => getInputvalue(e)}/>
            </Form.Group>

              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Default file input example</Form.Label>
                <Form.Control type="file" name='image' onChange={(e) => getInputvalue(e)}/>
            </Form.Group>


              <Button variant="primary" type="submit">
                Submit
              </Button>

            </Form>
          </Col>
        </Row>
  
      </Container>
    </div>
  );
}
export default Addperson;