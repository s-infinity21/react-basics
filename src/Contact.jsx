import React,{useState} from "react";

const Contact = () => {
  const [data, setData] = useState({
    fname: '',
    phno: '',
    mail: '',
    msg:'',
  });

  const InputEvent = (event) =>{
    const {name,value} = event.target;
    setData((preVal)=>{
      return{
        ...preVal,
        [name]: value,
      };
    });
  }

  const formSubmit = (event) =>{
    event.preventDefault();
    alert(`Thank you for your response ${data.fname}. Your message "${data.msg}" received sucessfully`)
  }

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Me</h1>
        <div className="container contact_div">
          <div className="row">
            <div className="col-md-6 col-10 mx-auto">
              <form onSubmit={formSubmit}>
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    name="fname"
                    value={data.fname}
                    onChange={InputEvent}
                    placeholder="Enter your Full Name here"
                  />
                </div>

                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleFormControlInput1"
                    name="phno"
                    value={data.phno}
                    onChange={InputEvent}
                    placeholder="Enter your Phone Number here: 9415****89"
                  />
                </div>

                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    name="mail"
                    value={data.mail}
                    onChange={InputEvent}
                    placeholder="Enter your E-Mail ID here: name@example.com"
                  />
                </div>

                <div className="mb-3">
                  <label
                    for="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    name="msg"
                    value={data.msg}
                    onChange={InputEvent}
                  ></textarea>
                </div>
                <div className="col-12">
                  <button className="btn btn-outline-primary" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
