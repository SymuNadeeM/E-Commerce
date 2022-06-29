import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newItem, setNewItem] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    const newEntry = { email: email, password: password };
    setNewItem([...newItem, newEntry]);
  };

  return (
    <>
      <section>
        <h2>Login Part</h2>
        <div className="container">
          <form action="" onSubmit={onSubmit}>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="off"
              />
            </div>
            <div>
              <label htmlFor="password">Email</label>
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="result">
          {newItem.map((curItem, ind) => {
            return (
              <div className="subResult" key={ind}>
                <h4>{curItem.email}</h4>
                <h4>{curItem.password}</h4>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Login;
