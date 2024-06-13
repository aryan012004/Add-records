import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function DeletPerson() {
    let { id } = useParams();
    let navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            let localdata = JSON.parse(localStorage.getItem('data'));
            let pos = localdata.findIndex(v => v.id == id);
            console.log(pos);
            if (pos != -1) {
                localdata.splice(pos, 1);
            }
            localStorage.setItem('data', JSON.stringify(localdata));
            navigate("/viewperson");
        }, 500)
    })
}

export default DeletPerson;