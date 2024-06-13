import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from "react";
// import 'react-toastify/dist/ReactToastify.css';
import { useParams, useNavigate } from "react-router-dom";

function Upadate() {

    let { id } = useParams();
    let navigate = useNavigate();
    let [person, setPerson] = useState({});
    let [hobby , setHobby] = useState([]);

    let [city , setCity] = useState(["Surat" , "Rajkot" , "Amreli"]);


    useEffect(() => {
        setTimeout(() => {
            let localData = JSON.parse(localStorage.getItem('data'));
            // console.log(localData);
            let pos = localData.findIndex(v => v.id == id);
            if (pos != -1) {
                setPerson(localData[pos]);
            }
            // console.log(person);
        }, 500)
    },setPerson);


    let getInputvalue = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setPerson({...person,[name]:value})
        
    }

    let handlesubmit = (e) => {
        e.preventDefault();
        let localData = JSON.parse(localStorage.getItem('data'));
        let pos = localData.findIndex(v => v.id == id);
        if (pos != -1) {
            localData[pos] = person;
        }
        localStorage.setItem('data', JSON.stringify(localData));
        console.log(localData);
        navigate("/viewperson");
    }


    return (
        <Container>
                <Row>
                    <Col sm={8}>
                        <Form className='mt-5' method='post' onSubmit={(e) => handlesubmit(e)}style={{backgroundColor:'rgb(69 214 255)',padding:'50px'}}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name='email' value={person.email?person.email:""} onChange={(e) => getInputvalue(e)} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="text" placeholder="Password" name='password' value={person.password?person.password:""} onChange={(e) => getInputvalue(e)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Label>Select Gender</Form.Label><br></br>
                            <Form.Check inline name='gender' type="radio" id="default-1" label="Male" value="male" checked={person.gender?person.gender == 'male'?person.gender:"":""} onChange={(e) => getInputvalue(e)}/>
                            <Form.Check inline name='gender' type="radio" id="default-1" label="Female" value="female" checked={person.gender?person.gender == 'female'?person.gender:"":""} onChange={(e) => getInputvalue(e)}/>
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Label>Select Hobby</Form.Label><br></br>
                            <Form.Check inline type="checkbox" id="default-1" label="Reading" value="hobby" checked={person.hobby ? hobby.includes("Reading") ? person.hobby : "" : ""} onChange={(e) => getInputvalue(e)}/>
                            <Form.Check inline type="checkbox" id="default-1" label="Dancing" value="hobby" checked={person.hobby ? hobby.includes("Dancing") ? person.hobby : "" : ""} onChange={(e) => getInputvalue(e)}/>
                            <Form.Check inline type="checkbox" id="default-1" label="Playing" value="hobby" checked={person.hobby ? hobby.includes("Playing") ? person.hobby : "" : ""} onChange={(e) => getInputvalue(e)}/>
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
                          <Form.Control type="file" />
                      </Form.Group>
                      
                        <Button variant="primary" type="submit">
                            Update
                        </Button>
                </Form>
                    </Col>
                </Row>
            </Container>
    )
}

export default Upadate;