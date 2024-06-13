import React, { useState, useEffect } from "react";
                                                                                // import { AiFillEyeInvisible } from "react-icons/ai";
                                                                                // import { AiFillEye } from "react-icons/ai";

function Ir() {
    var [person, setPerson] = useState({});
    var [personError, setPersonError] = useState({});
    var [usedNames, setUsedNames] = useState([]);
    var [showPassword, setShowPassword] = useState(false);
    var [showPassword2, setShowPassword2] = useState(false);
    var [userData, setuserData] = useState([]);
    var [validdata, setvalidData] = useState([]);
    var [active, setactive] = useState([]);


    useEffect(() => {
        var localData = JSON.parse(localStorage.getItem('userdata')) || [];
        var usedNamesArray = localData ? localData.map(user => user.name) : [];
        setUsedNames(usedNamesArray);
        setuserData(localData);

        setTimeout(() => {
            if (localData == null) {
                setuserData([]);
            }
            else {
                setuserData(localData)
            }

            var string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";

            var first = string[Math.round(Math.random() * string.length)];
            var second = string[Math.round(Math.random() * string.length)];
            var third = string[Math.round(Math.random() * string.length)];
            var four = string[Math.round(Math.random() * string.length)];
            var fifth = string[Math.round(Math.random() * string.length)];

            let total1 = first + second + third + four + fifth;

            var totaldata = (total1);
            setactive(totaldata);

        }, 500);
    }, setactive);

    var getInputvalue = (e) => {
        var name = e.target.name;
        var value = e.target.value;

        if (name === "name" && usedNames.includes(value)) {
            setPersonError({ ...personError, ['username']: <span style={{ color: "red" }}>User ID already exists. Please choose a different one.</span> });
            var username = ({ ...validdata, [name]: value });
            var data1 = [...userData, username];
            setvalidData(data1);
        }

        else {
            setPersonError({ name: "User Id is Valid..!" });
        }


        console.log(name);
        console.log(value);
        setPerson({ ...person, [name]: value });
    }

    var Userdata = (e) => {
        e.preventDefault();

        if (!person.name || person.name.trim() === "") {
            setPersonError({ ...personError, ['username']: <span style={{ color: "red" }}>username is required</span> });
            return;
        }


        if (usedNames.includes(person.name)) {
            setPersonError({ ...personError, ['username']: "User ID already exists. Please choose a different one." });
            return;
        }
        else {
            setPersonError({ ...personError, ['username']: "User ID is Valid..!" });
        }

        if (!person.perpass) {
            setPersonError({ ...personError, ['perpass']: "Please Write a Password." });
            return;
        }
        else if (person.perpass.length < 6) {
            setPersonError({ ...personError, ['perpass']: "Password must be at least 6 characters long." });
            return;
        }
        else {
            setPersonError({ ...personError, ['perpass']: "" });
        }

        if (person.perpass !== person.confirm) {
            setPersonError({ ...personError, ['confirm']: "Passwords do not match." });
            return;
        }


        if (!person.security_que) {
            setPersonError({ ...personError, ['security_que']: "Please select a security question." });
            return;
        }
        else {
            setPersonError({ ...personError, ['security_que']: "" });
        }


        if (!person.security_ans) {
            setPersonError({ ...personError, ['security_ans']: "Please Write a security answer." });
            return;
        }
        else {
            setPersonError({ ...personError, ['security_ans']: "" });
        }

        if (!person.language) {
            setPersonError({ ...personError, ['language']: "Please select your language." });
            return;
        }
        else {
            setPersonError({ ...personError, ['language']: "" });
        }

        if (!person.firstname) {
            setPersonError({ ...personError, ['firstname']: "Please enter your First name." });
            return;
        }
        else {
            setPersonError({ ...personError, ['firstname']: "" });
        }

        if (!person.lastname) {
            setPersonError({ ...personError, ['lastname']: "Please enter your Last name." });
            return;
        }
        else {
            setPersonError({ ...personError, ['lastname']: "" });
        }

        if (!person.gender) {
            setPersonError({ ...personError, ['gender']: "Please select your gender." });
            return;
        }
        else {
            setPersonError({ ...personError, ['gender']: "" });
        }

        if (!person.status) {
            setPersonError({ ...personError, ['status']: "Please select your status." });
            return;
        }
        else {
            setPersonError({ ...personError, ['status']: "" });
        }

        if (!person.date) {
            setPersonError({ ...personError, ['date']: "Please select Date." });
            return;
        }
        else {
            setPersonError({ ...personError, ['date']: "" });
        }

        if (!person.occupation) {
            setPersonError({ ...personError, ['occupation']: "Please select occupation." });
            return;
        }
        else {
            setPersonError({ ...personError, ['occupation']: "" });
        }

        if (!person.email) {
            setPersonError({ ...personError, ['email']: "Enter Your Email." });
            return;
        }
        else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.email.value)) {
            setPersonError({ ...personError, ['email']: "Enter '@' , '.' and other character to  valid email" });
            return;
        }
        else {
            setPersonError({ ...personError, ['email']: "" });
        }

        if (!person.number) {
            setPersonError({ ...personError, ['number']: "Enter Your mobile number." });
            return;
        }
        else if (!/^\d{10}$/.test(person.number)) {
            setPersonError({ ...personError, ['number']: "Please enter a 10-digit number." });
            return;
        }
        else {
            setPersonError({ ...personError, ['number']: "" });
        }

        if (!person.nation) {
            setPersonError({ ...personError, ['nation']: "Select Nationallity." });
            return;
        }
        else {
            setPersonError({ ...personError, ['nation']: "" });
        }

        if (!person.nation) {
            setPersonError({ ...personError, ['nation']: "Select Nationallity." });
            return;
        }
        else {
            setPersonError({ ...personError, ['nation']: "" });
        }

        if (!person.blockno) {
            setPersonError({ ...personError, ['blockno']: "Enter Block no." });
            return;
        }
        else {
            setPersonError({ ...personError, ['blockno']: "" });
        }

        if (!person.country) {
            setPersonError({ ...personError, ['country']: "Select Your country" });
            return;
        }
        else {
            setPersonError({ ...personError, ['country']: "" });
        }

        if (!person.pincode) {
            setPersonError({ ...personError, ['pincode']: "Enter Your pincode" });
            return;
        }
        else {
            setPersonError({ ...personError, ['pincode']: "" });
        }

        if (!person.state) {
            setPersonError({ ...personError, ['state']: "Enter Your state" });
            return;
        }
        else {
            setPersonError({ ...personError, ['state']: "" });
        }

        if (!person.city) {
            setPersonError({ ...personError, ['city']: "Select Your city" });
            return;
        }
        else {
            setPersonError({ ...personError, ['city']: "" });
        }

        if (!person.postoffice) {
            setPersonError({ ...personError, ['postoffice']: "Select Your postoffice" });
            return;
        }
        else {
            setPersonError({ ...personError, ['postoffice']: "" });
        }

        if (!person.phone) {
            setPersonError({ ...personError, ['phone']: "Enter Your phone no" });
            return;
        }
        else if (!/^\d{10}$/.test(person.phone)) {
            setPersonError({ ...personError, ['phone']: "Please enter a 10-digit number." });
            return;
        }
        else {
            setPersonError({ ...personError, ['phone']: "" });
        }

        if (!person.copyaddress) {
            setPersonError({ ...personError, ['copyaddress']: "Select Your copyaddress" });
            return;
        }
        else {
            setPersonError({ ...personError, ['copyaddress']: "" });
        }


        if (!person.capcha) {
            setPersonError({ ...personError, ['capcha']: "<< Write This capcha" });
            return;
        }
        else if (person.capcha !== active) {
            setPersonError({ ...personError, ['capcha']: "Incorrect CAPTCHA. Please enter the correct code." });
            return;
        }
        else {
            setPersonError({ ...personError, ['capcha']: "" });
        }


        setPersonError({ ...personError, ['perpass']: "" });
        setPersonError({ ...personError, ['confirm']: "" });
        var data = ([...userData, person]);
        console.log(data);
        setuserData(data);
        localStorage.setItem('userdata', JSON.stringify(data));
        setPersonError({});
        setPerson({});
        setactive(true)
    }


    var passhowhide = () => {
        // console.log("click");
        setShowPassword(!showPassword);
    }
    var passhowhide2 = () => {
        // console.log("click");
        setShowPassword2(!showPassword2);
    }

    var refreshpage = () => {
        window.location.reload(false);
    }

    var devareRecord = (index) => {
        var newArr = userData.filter((item, i) => index !== i);
        setuserData(newArr);
        localStorage.setItem('userdata', JSON.stringify(newArr));
    }

    return (
        <div>
            {/* <div className="header">
                <img src={require("../assets/image/irctc_logo.jpeg")} alt="" />
                <img src={require("../assets/image/CRIS-Full.jpeg")} alt="" />
            </div> */}
            <div >
                <div >
                    <center>
                        <form method="post" onSubmit={(e) => Userdata(e)}>
                            <div>
                                <h2>Individual Registration</h2>
                                <table >
                                    <tr>
                                        <td><label>1. User Id<span style={{ color: "red", margin: "0" }}>*</span> : </label></td>
                                        <td colSpan={1}>
                                            <input type="text" onChange={(e) => getInputvalue(e)} name="name" value={person.name ? person.name : ""} />
                                            <br />
                                        </td>
                                        <td>
                                            <span>{personError.username ? personError.username : ""}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><label>2. Password<span style={{ color: "red", margin: "0" }}>*</span> : </label></td>
                                        <td colSpan={3}>
                                            <input type={showPassword ? "text" : "password"} name="perpass" value={person.perpass ? person.perpass : ""} onChange={(e) => getInputvalue(e)} />
                                            <button type="button" onClick={() => passhowhide()}>
                                                {/* {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />} */}
                                            </button><br />
                                            <span style={{ color: "red" }}>{personError.perpass ? personError.perpass : ""}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><label>3 . Confirm Password<span style={{ color: "red", margin: "0" }}>*</span> : </label></td>
                                        <td colSpan={3}>
                                            <input type={showPassword2 ? "text" : "password"} name="confirm" value={person.confirm ? person.confirm : ""} onChange={(e) => getInputvalue(e)} />
                                            <button type="button" onClick={() => passhowhide2()}>
                                                {/* {showPassword2 ? <AiFillEye /> : <AiFillEyeInvisible />} */}
                                            </button>
                                            <br />
                                            <span style={{ color: "red" }}>{personError.confirm ? personError.confirm : ""}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><label>4 . Security Question<span style={{ color: "red", margin: "0" }}>*</span> : </label></td>
                                        <td colSpan={3}>
                                            <select name="security_que" onChange={(e) => getInputvalue(e)} value={person.security_que ? person.security_que : ""}>
                                                <option value="" key="">What is your pet name?</option>
                                                <option value="1" key="">1</option>
                                                <option value="2" key="">2</option>
                                                <option value="3" key="">3</option>
                                                <option value="4" key="">4</option>
                                                <option value="5" key="">5</option>
                                                <option value="6" key="">6</option>
                                            </select><br />
                                            <span style={{ color: "red" }}>{personError.security_que ? personError.security_que : ""}</span><br />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><label>5 . Security Answer<span style={{ color: "red", margin: "0" }}>*</span> : </label></td>
                                        <td colSpan={3}>
                                            <input type="text" name="security_ans" onChange={(e) => getInputvalue(e)} value={person.security_ans ? person.security_ans : ""} /><br />
                                            <span style={{ color: "red" }}>{personError.security_ans ? personError.security_ans : ""}</span><br />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><label>6 . Preferred Language<span style={{ color: "red", margin: "0" }}>*</span> : </label></td>
                                        <td colSpan={3}>
                                            <select name="language" onChange={(e) => getInputvalue(e)} value={person.language ? person.language : ""}>
                                                <option value="" key="">--Language--</option>
                                                <option value="english" key="">English</option>
                                                <option value="jermany" key="">Jermany</option>
                                                <option value="spanish" key="">Spanish</option>
                                                <option value="hindi" key="">Hindi</option>
                                                <option value="itali" key="">Itali</option>
                                            </select>
                                            <span style={{ color: "red" }}>{personError.language ? personError.language : ""}</span><br />
                                        </td>
                                    </tr>
                                </table>




                                <h2 style={{ textAlign: "center" }}>Person Details:</h2>

                                <table >
                                    <tr>
                                        <td><label>7 . First Name<span style={{ color: "red", margin: "0" }}>*</span> : </label></td>
                                        <td colSpan={3}>
                                            <input type="text" name="firstname" onChange={(e) => getInputvalue(e)} value={person.firstname ? person.firstname : ""} />
                                            <br /><span style={{ color: "red" }}>{personError.firstname ? personError.firstname : ""}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><label>8 . Middle name : </label></td>
                                        <td colSpan={3}>
                                            <input type="text" name="middlename" onChange={(e) => getInputvalue(e)} value={person.middlename ? person.middlename : ""} />(Optional)
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><label>9 . Last name<span style={{ color: "red", margin: "0" }}>*</span> : </label></td>
                                        <td colSpan={3}>
                                            <input type="text" name="lastname" onChange={(e) => getInputvalue(e)} value={person.lastname ? person.lastname : ""} />
                                            <br /><span style={{ color: "red" }}>{personError.lastname ? personError.lastname : ""}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><label>10 . Gender<span style={{ color: "red", margin: "0" }}>*</span> : </label></td>
                                        <td colSpan={3}>
                                            <input type="radio" name="gender" value="male" onChange={(e) => getInputvalue(e)} checked={person.gender == "male" ? "checked" : false} />male
                                            <input type="radio" name="gender" value="female" onChange={(e) => getInputvalue(e)} checked={person.gender == "female" ? "checked" : false} />Female
                                            <br /><span style={{ color: "red" }}>{personError.gender ? personError.gender : ""}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><label>11 . Marrital status<span style={{ color: "red", margin: "0" }}>*</span> : </label></td>
                                        <td colSpan={3}>
                                            <input type="radio" name="status" value="Married" onChange={(e) => getInputvalue(e)} checked={person.status == "Married" ? "checked" : false} />Married
                                            <input type="radio" name="status" value="Unmarried" onChange={(e) => getInputvalue(e)} checked={person.status == "Unmarried" ? "checked" : false} />Unmarried
                                            <br /><span style={{ color: "red" }}>{personError.status ? personError.status : ""}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><label>12 . Date Of Birth<span style={{ color: "red", margin: "0" }}>*</span> : </label></td>
                                        <td colSpan={3}>
                                            <input type="date" name="date" onChange={(e) => getInputvalue(e)} value={person.date ? person.date : ""} />
                                            <br /><span style={{ color: "red" }}>{personError.date ? personError.date : ""}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><label>13 . Occupation<span style={{ color: "red", margin: "0" }}>*</span> : </label></td>
                                        <td colSpan={3}>
                                            <select name="occupation" onChange={(e) => getInputvalue(e)}>
                                                <option value="" key="">--Occupation--</option>
                                                <option value="Public" key="">Public</option>
                                                <option value="Private" key="">Private</option>
                                            </select>
                                            <br /><span style={{ color: "red" }}>{personError.occupation ? personError.occupation : ""}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><label>14 . Adhaar Card No : </label></td>
                                        <td colSpan={3}>
                                            <input type="number" name="adharcard" onChange={(e) => getInputvalue(e)} value={person.adharcard ? person.adharcard : ""} />(Optional)
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><label>15 . PAN Card : </label></td>
                                        <td colSpan={3}>
                                            <input type="number" name="pancard" onChange={(e) => getInputvalue(e)} value={person.pancard ? person.pancard : ""} />(Optional)
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><label>16 . Email<span style={{ color: "red", margin: "0" }}>*</span> : </label></td>
                                        <td colSpan={3}>
                                            <input type="text" name="email" onChange={(e) => getInputvalue(e)} value={person.email ? person.email : ""} />
                                            <br /><span style={{ color: "red" }}>{personError.email ? personError.email : ""}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><label>17 . Mobile<span style={{ color: "red", margin: "0" }}>*</span> : </label></td>
                                        <td colSpan={3}>
                                            +91  <input type="number" name="number" onChange={(e) => getInputvalue(e)} value={person.number ? person.number : ""} />
                                            <br /><span style={{ color: "red" }}>{personError.number ? personError.number : ""}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><label>18 . Nationallity<span style={{ color: "red", margin: "0" }}>*</span> : </label></td>
                                        <td colSpan={2}>
                                            <select name="nation" onChange={(e) => getInputvalue(e)} value={person.nation ? person.nation : ""} >
                                                <option value="" key="">--Select Nationality--</option>
                                                <option value="India" key="">India</option>
                                                <option value="Pakistan" key="">Pakistan</option>
                                                <option value="Afghanistan" key="">Afghanistan</option>
                                            </select>
                                        </td>
                                        <td>
                                            <span style={{ color: "red" }}>{personError.nation ? personError.nation : ""}</span>
                                        </td>
                                    </tr>
                                </table>



                                <h2 style={{ textAlign: "center" }}>Residential Address</h2>

                                <table>
                                    <tr>
                                        <td><label>19 . Flatt/Door/BLOCK NO.<span style={{ color: "red", margin: "0" }}>*</span> : </label></td>
                                        <td colSpan={2}>
                                            <input type="number" name="blockno" onChange={(e) => getInputvalue(e)} value={person.blockno ? person.blockno : ""} /><br />
                                            <br /><span style={{ color: "red" }}>{personError.blockno ? personError.blockno : ""}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><label>20 . Street/Lane : </label></td>
                                        <td colSpan={2}>
                                            <input type="text" name="streetlane" onChange={(e) => getInputvalue(e)} value={person.streetlane ? person.streetlane : ""} />(Optional)<br />
                                            <br /><span style={{ color: "red" }}>{personError.streetlane ? personError.streetlane : ""}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><label>21 . Area/Locality : </label></td>
                                        <td colSpan={2}>
                                            <input type="text" name="area" onChange={(e) => getInputvalue(e)} value={person.area ? person.area : ""} />(Optional)<br />
                                            <br /><span style={{ color: "red" }}>{personError.area ? personError.area : ""}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><label>22 . Country<span style={{ color: "red", margin: "0" }}>*</span> : </label></td>
                                        <td colSpan={2}>
                                            <select name="country" onChange={(e) => getInputvalue(e)}>
                                                <option value="">--Select Country--</option>
                                                <option value="India">India</option>
                                                <option value="Bangladesh">Bangladesh</option>
                                                <option value="NewZeland">NewZeland</option>
                                            </select>
                                            <span style={{ color: "red" }}>{personError.country ? personError.country : ""}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><label>23 . Pin Code<span style={{ color: "red", margin: "0" }}>*</span> : </label></td>
                                        <td colSpan={2}>
                                            <input type="number" name="pincode" onChange={(e) => getInputvalue(e)} value={person.pincode ? person.pincode : ""} /><br />
                                            <br /><span style={{ color: "red" }}>{personError.pincode ? personError.pincode : ""}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><label>24 . State<span style={{ color: "red", margin: "0" }}>*</span> : </label></td>
                                        <td colSpan={2}>
                                            <input type="text" name="state" onChange={(e) => getInputvalue(e)} value={person.state ? person.state : ""} /><br />
                                            <br /><span style={{ color: "red" }}>{personError.state ? personError.state : ""}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><label>25 . City/Town<span style={{ color: "red", margin: "0" }}>*</span> : </label></td>
                                        <td colSpan={2}>
                                            <select name="city" onChange={(e) => getInputvalue(e)} value={person.city ? person.city : ""} >
                                                <option value="" key="">--select city--</option>
                                                <option value="Central_Delhi" key="">Central Delhi</option>
                                                <option value="Surat" key="">Surat</option>
                                                <option value="Ahembdabad" key="">Ahembdabad</option>
                                            </select>
                                            <span style={{ color: "red" }}>{personError.city ? personError.city : ""}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><label>26 . Post/Office<span style={{ color: "red", margin: "0" }}>*</span> : </label></td>
                                        <td colSpan={2}>
                                            <select name="postoffice" onChange={(e) => getInputvalue(e)} value={person.postoffice ? person.postoffice : ""} >
                                                <option value="" key="">--Post/ofiice--</option>
                                                <option value="Pahar Ganj S.O" key="">Pahar Ganj S.O</option>
                                                <option value="Pahar Ganj S.O" key="">Pahar Ganj S.O</option>
                                                <span style={{ color: "red" }}>{personError.postoffice ? personError.postoffice : ""}</span>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><label>27 . Phone<span style={{ color: "red", margin: "0" }}>*</span> : </label></td>
                                        <td colSpan={2}>
                                            <input type="number" name="phone" onChange={(e) => getInputvalue(e)} value={person.phone ? person.phone : ""} /><br />
                                            <br /><span style={{ color: "red" }}>{personError.phone ? personError.phone : ""}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><label style={{ color: "#3665c2", fontWeight: "bold" }}>28 .Copy Recidence to ofiice Address<span style={{ color: "red", margin: "0" }}>*</span> : </label></td>
                                        <td colSpan={3}>
                                            <input type="radio" name="copyaddress" value="yes" onChange={(e) => getInputvalue(e)} checked={person.copyaddress == "yes" ? "checked" : false} />Yes
                                            <input type="radio" name="copyaddress" value="no" onChange={(e) => getInputvalue(e)} checked={person.copyaddress == "no" ? "checked" : false} />No
                                            <br /><span style={{ color: "red" }}>{personError.copyaddress ? personError.copyaddress : ""}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={1}>
                                            <label>29 . Type code show</label>
                                        </td>
                                        <td>
                                            <h1 style={{ textAlign: "center" }}>{active}<br /></h1>
                                            <input type="text" name="capcha" onChange={(e) => setPerson({ ...person, capcha: e.target.value })} value={person.capcha ? person.capcha : ""} />
                                        </td>
                                        <td>
                                            <span style={{ color: "red" }}>{personError.capcha ? personError.capcha : ""}</span>
                                            <button style={{ marginLeft: "14px", cursor: "pointer" }} onClick={() => refreshpage()} >refresh</button>
                                        </td>
                                    </tr>
                                </table>

                                <div>
                                    <input type="submit"/>
                                </div>
                            </div>
                        </form>
                    </center>
                </div>
            </div>

            <div>
                {userData.map((v, i) => {
                    return (
                        <div key={i} className="bg">
                            <center className="container">
                                <h2>View Data</h2>
                                <table border={1} width={"40%"} align={"center"}>
                                    <tr>
                                        <td className="d-flex">
                                            <div>1 . </div>
                                            <div>User Id : </div>
                                        </td>
                                        <td>{v.name}</td>
                                    </tr>
                                    <tr>
                                        <td className="d-flex">
                                            <div>2 . </div>
                                            <div>Password : </div>
                                        </td>
                                        <td>{v.perpass}</td>
                                    </tr>
                                    <tr>
                                        <td className="d-flex">
                                            <div>3 . </div>
                                            <div>Confirm Password : </div>
                                        </td>
                                        <td>{v.confirm}</td>
                                    </tr>
                                    <tr>
                                        <td className="d-flex">
                                            <div>4 . </div>
                                            <div>Security Question : </div>
                                        </td>
                                        <td>{v.security_que}</td>
                                    </tr>
                                    <tr>
                                        <td className="d-flex">
                                            <div>5 . </div>
                                            <div>Security Answer : </div>
                                        </td>
                                        <td>{v.security_ans}</td>
                                    </tr>
                                    <tr>
                                        <td className="d-flex">
                                            <div>6 . </div>
                                            <div>Preferred Language : </div>
                                        </td>
                                        <td>{v.language}</td>
                                    </tr>
                                    <tr>
                                        <td className="d-flex">
                                            <div>7 . </div>
                                            <div>First Name : </div>
                                        </td>
                                        <td>{v.firstname}</td>
                                    </tr>
                                    <tr>
                                        <td className="d-flex">
                                            <div>8 . </div>
                                            <div>Middle Name : </div>
                                        </td>
                                        <td>{v.middlename}</td>
                                    </tr>
                                    <tr>
                                        <td className="d-flex">
                                            <div>9 . </div>
                                            <div>Last Name : </div>
                                        </td>
                                        <td>{v.lastname}</td>
                                    </tr>
                                    <tr>
                                        <td className="d-flex">
                                            <div>10 .</div>
                                            <div> Gender : </div>
                                        </td>
                                        <td>{v.gender}</td>
                                    </tr>
                                    <tr>
                                        <td className="d-flex">
                                            <div>11 .</div>
                                            <div> Marrital Status : </div>
                                        </td>
                                        <td>{v.status}</td>
                                    </tr>
                                    <tr>
                                        <td className="d-flex">
                                            <div>12 .</div>
                                            <div> Date of Birth : </div>
                                        </td>
                                        <td>{v.date}</td>
                                    </tr>
                                    <tr>
                                        <td className="d-flex">
                                            <div>13 .</div>
                                            <div> Occupation : </div>
                                        </td>
                                        <td>{v.occupation}</td>
                                    </tr>
                                    <tr>
                                        <td className="d-flex">
                                            <div>14 .</div>
                                            <div>Aadhaar Card Number : </div>
                                        </td>
                                        <td>{v.adharcard}</td>
                                    </tr>
                                    <tr>
                                        <td className="d-flex">
                                            <div>15 .</div>
                                            <div> PAN Number : </div>
                                        </td>
                                        <td>{v.pancard}</td>
                                    </tr>
                                    <tr>
                                        <td className="d-flex">
                                            <div>16 .</div>
                                            <div> Email : </div>
                                        </td>
                                        <td>{v.email}</td>
                                    </tr>
                                    <tr>
                                        <td className="d-flex">
                                            <div>17 .</div>
                                            <div> Mobile : </div>
                                        </td>
                                        <td>{v.number}</td>
                                    </tr>
                                    <tr>
                                        <td className="d-flex">
                                            <div>18 .</div>
                                            <div> Nationality : </div>
                                        </td>
                                        <td>{v.nation}</td>
                                    </tr>
                                    <tr>
                                        <td className="d-flex">
                                            <div>19 .</div>
                                            <div> Block Number : </div>
                                        </td>
                                        <td>{v.blockno}</td>
                                    </tr>
                                    <tr>
                                        <td className="d-flex">
                                            <div>20 .</div>
                                            <div> Street/Lane : </div>
                                        </td>
                                        <td>{v.streetlane}</td>
                                    </tr>
                                    <tr>
                                        <td className="d-flex">
                                            <div>21 .</div>
                                            <div> Area/Locality : </div>
                                        </td>
                                        <td>{v.area}</td>
                                    </tr>
                                    <tr>
                                        <td className="d-flex">
                                            <div>22 .</div>
                                            <div> Country : </div>
                                        </td>
                                        <td>{v.country}</td>
                                    </tr>
                                    <tr>
                                        <td className="d-flex">
                                            <div>23 .</div>
                                            <div> Pin Code : </div>
                                        </td>
                                        <td>{v.pincode}</td>
                                    </tr>
                                    <tr>
                                        <td className="d-flex">
                                            <div>24 .</div>
                                            <div> State : </div>
                                        </td>
                                        <td>{v.state}</td>
                                    </tr>
                                    <tr>
                                        <td className="d-flex">
                                            <div>25 .</div>
                                            <div> City/Town : </div>
                                        </td>
                                        <td>{v.city}</td>
                                    </tr>
                                    <tr>
                                        <td className="d-flex">
                                            <div>26 .</div>
                                            <div> Post/Office : </div>
                                        </td>
                                        <td>{v.postoffice}</td>
                                    </tr>
                                    <tr>
                                        <td className="d-flex">
                                            <div>27 .</div>
                                            <div> Phone : </div>
                                        </td>
                                        <td>{v.phone}</td>
                                    </tr>
                                    <tr>
                                        <td className="d-flex">
                                            <div>28 . </div>
                                            <div>Copy Address: </div>
                                        </td>
                                        <td>{v.copyaddress}</td>
                                    </tr>
                                    <tr>
                                        <td className="d-flex">
                                            <div>29 . </div>
                                            <div>Code Show: </div>
                                        </td>
                                        <td>{v.capcha}</td>
                                    </tr>
                                </table>
                                <button onClick={() => devareRecord(i)} style={{ padding: "10px 20px", margin: "10px" }}>Delete</button>
                            </center>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
export default Ir;