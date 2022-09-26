import "./style/Signup.css";
import Logo from "./logo.png";
export default function Signup() {
  return (
    <>
      <div className="Signup_outer">
        <div className="outer_row1">
          <div className="outer_row2">
            <div className="outer_row2_inner1">
              <img src={Logo} alt="invalid path"></img>
              <label>
                <h2>Logo</h2>
              </label>
            </div>
            <div className="outer_row2_inner2">
              <h3>Welcome!</h3>
              <label>Please signup to your account</label>
            </div>
            <div className="outer_row2_inner3">
              <input type="text" placeholder="FirstName" />
              <input type="text" placeholder="LastName" />
            </div>
            <div className="outer_row2_inner4">
              <input type="text" placeholder="Email" />
            </div>
            <div className="outer_row2_inner5">
              <input type="password" placeholder="Password" />
            </div>
            <div className="outer_row2_inner6">
              <input type="password" placeholder="Re-Password" />
            </div>
            <div className="outer_row2_inner7">
              <input type="checkbox" />
              <label>
                By Clicking On Register, You Agree To Our
                
              </label>
              <div>
              <label className="Terms_Text">Terms And Conditions</label> of
                use
              </div>
            </div>
            <div className="outer_row2_inner8">
              <button className="RegisterButton">Register</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}