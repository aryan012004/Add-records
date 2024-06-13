import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function Viewperson()
{
    let [data,setData]=useState([])
    let [email,setEmail]=useState('')

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
    return(
       <Container>
            <Row>
                <Col>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Sorting</Form.Label>
                            <Form.Control type="text" placeholder="Searchin by email" name='email'onChange={(e)=> setEmail(e.target.value)}/>
                        </Form.Group>
                <Table striped bordered hover className='mt-5'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Gender</th>
                                <th>Hobby</th>
                                <th>City</th>
                                <th>Text</th>
                                <th>Image</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.
                            filter((v,i)=>{
                                if(v.email.toLowerCase().includes(email.toLowerCase()))
                                {
                                    return v;
                                }  
                            })
                             .map((v, i) => {
                                return (
                                    <tr>
                                        <td>{++i}</td>
                                        <td>{v.email}</td>
                                        <td>{v.password}</td>
                                        <td>{v.gender}</td>
                                        <td>{v.hobby}</td>
                                        <td>{v.city}</td>
                                        <td>{v.text}</td>
                                        <td><img src={v.image}/></td>
                                        
                                    <td><Link to={'/deletRecord/'+v.id} style={{backgroundColor:'red',color:'white',padding:'7px 15px',borderRadius:'5px',textDecoration:'none'}}>Delete</Link>|| <Link to={'/update/'+v.id}style={{backgroundColor:'blue',color:'white',padding:'7px 15px',borderRadius:'5px',textDecoration:'none'}}>Update</Link></td>
            
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
                </Col>
            </Row>
       </Container>
    )
}
export default Viewperson;