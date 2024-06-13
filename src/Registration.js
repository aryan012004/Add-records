import { useEffect, useState } from "react";

function Registration()
{
    let [record,setRecord] = useState([])


    useEffect =(()=>
   {
       let data = JSON.parse(localStorage.getItem('record'));
       if(data == null)
       {
            setRecord([])
       }
       else{

           setRecord(data);
       }

   },setRecord);

     let formsubmit =(e) =>
     {
        e.preventDefault();

        var obj = {
           userId : e.target.userId.value,
           pass :e.target.pass.value,
           confirm :e.target.confirm.value,
           que:e.target.que.value,
           ans:e.target.ans.value,
           language:e.target.language.value,
           firstname:e.target.firstname.value,
           middlename:e.target.middlename.value,
           lastname:e.target.lastname.value,
           gender:e.target.gender.value,
           married:e.target.married.value,
           date:e.target.date.value,                       
           email:e.target.email.value,
           mobile:e.target.mobile.value,
           nationality:e.target.nationality.value,
           flat:e.target.flat.value,
           street:e.target.street.value,
           area:e.target.area.value,
           country:e.target.country.value,
        }
      

        let newRecord = [...record,obj];
        setRecord(newRecord);
        localStorage.setItem('record',JSON.stringify(newRecord));

        e.target.userId.value='';
        e.target.pass.value='';
       }       
    return(
        <>
             <form  method="post" onSubmit={(e) => formsubmit(e)}> 
                <table border={1}>
                    <tr>
                        <td>Enter UserId</td>
                        <td><input type="text" name="userId"></input></td>
                    </tr>
                    <tr>
                        <td>Enter Password</td>
                        <td><input type="text" name="pass"></input></td>
                    </tr>
                    <tr>
                        <td>Confirm Password</td>
                        <td><input type="text" name="confirm"></input></td>
                    </tr>
                    <tr>
                        <td>Security Question</td>

                        
                        <td>
                            <select name="que">
                             <option>What is your pet name</option>
                             <option>What is your ex name</option>
                            </select></td>
                    </tr>
                    <tr>
                        <td>Security Answer</td>
                        <td><input type="password" name="ans"></input></td>
                    </tr>
                    <tr>
                        <td>Preffered Language</td>
                        <td>
                            <select name="language">
                             <option>Enlglish</option>
                             <option>hindi</option>
                             <option>Gujarati</option>
                            </select></td>
                    </tr>
                    <h3>Personal Detail</h3>
                    <tr>
                        <td> First Name</td>
                        <td><input type="text" name="firstname"></input></td>
                    </tr>
                    <tr>
                        <td> Middle Name</td>
                        <td><input type="text" name="middlename"></input></td>
                    </tr>
                    <tr>
                        <td> Last Name</td>
                        <td><input type="text" name="lastname"></input></td>
                    </tr>
                    <tr>
                        <td> Gender</td>
                        <td><input type="radio" name="gender" value={"male"}/>Male</td>
                        <td><input type="radio" name="gender" value={"female"}/>Female</td>
                    </tr>
                    <tr>
                        <td> Married Status</td>
                        <td><input type="radio" name="married" value={"married"}/>Married</td>
                        <td><input type="radio" name="married" value={"unmarried"}/>Unmarried</td>
                    </tr>
                    <tr>
                        <td> Date of Birth</td>
                        <td><input type="date" name="date"/></td>
                        
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td><input type="text" name="email"/></td>
                        
                    </tr>
                    <tr>
                        <td>Mobile Number</td>
                        <td><input type="text" name="mobile"/></td>
                    </tr>
                    <tr>
                        <td>Nationality</td>
                        <td>
                            <select name="nationality">
                             <option>India</option>
                             <option>USA</option>
                             <option>Korea</option>
                             <option>Japan</option>
                            </select></td>
                    </tr>
                    <h3>Residental Adderess</h3>
                    <tr>
                        <td>Flat/Block.no</td>
                        <td><input type="text" name="flat"/></td>
                    </tr>
                    <tr>
                        <td>Street</td>
                        <td><input type="text" name="street"/></td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td><input type="text" name="area"/></td>
                    </tr>
                    <tr>
                        <td>Country</td>
                        <td>
                            <select name="country">
                             <option>India</option>
                             <option>USA</option>
                             <option>Korea</option>
                             <option>Japan</option>
                            </select></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="submit" name="submit" value='add data'></input></td>
                    </tr>
                </table>
                </form> 
                <table border={1}>
                    <tr>
                        <td>UserId</td>
                        <td>Password</td>
                        <td>Con Password</td>
                        <td>Question</td>
                        <td>Answer</td>
                        <td>Language</td>
                        <td>First Name</td>
                        <td>Middle Name</td>
                        <td>Last Name</td>
                        <td>Gender</td>
                        <td>Married status</td>
                        <td>Date of birth</td>
                        <td>Email</td>
                        <td>Mobile num</td>
                        <td>nationality</td>
                        <td>Falt</td>
                        <td>Street</td>
                        <td>Area</td>
                        <td>Country</td>
                        <td>Action</td>
                    </tr>
                    {
                    record.map((v,i)=>{
                        return(
                            <>
                                <tr>
                                    <td>{v.userId}</td>
                                    <td>{v.pass}</td>
                                    <td>{v.confirm}</td>
                                    <td>{v.que}</td>
                                    <td>{v.ans}</td>
                                    <td>{v.language}</td>
                                    <td>{v.firstname}</td>
                                    <td>{v.middlename}</td>
                                    <td>{v.lastname}</td>
                                    <td>{v.gender}</td>
                                    <td>{v.married}</td>
                                    <td>{v.date}</td>
                                    <td>{v.email}</td>
                                    <td>{v.mobile}</td>
                                    <td>{v.nationality}</td>
                                    <td>{v.flat}</td>
                                    <td>{v.street}</td>
                                    <td>{v.area}</td>
                                    <td>{v.country}</td>
                                    <td>Del || Up</td>
                                </tr>
                            </> 
                        )
                    })}
                </table>
        </>
    )
}

export default Registration;