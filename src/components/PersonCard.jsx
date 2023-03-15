import { useState } from "react";

const PersonCard = (props) => {
const [age, setAge] = useState(props.age);
const { name, hairColor, image } = props;
return (
    <div className="card mt-3 mx-auto w-25">
        <img className="card-img-top" src={image} alt="" />
    <div className="card-body">
        <p>{name}</p>
        <p className="card-text">Age: {age}</p>
        <p className="card-text">Hair Color: {hairColor}</p>
        <button onClick={() => setAge(age + 1)} className="btn btn-dark w-100">
        BIRTHDAY
        </button>
    </div>
    </div>
    );
};

export default PersonCard;
