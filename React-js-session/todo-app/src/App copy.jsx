import Header from "./components/Header";

function App() {
  let array = [];
  return (
    <>
      <section>
        <section>
          <label htmlFor="">First Name</label>
          <input type="text" placeholder="Enter 1st Name" />
        </section>
        <section>
          <label htmlFor="">Last Name</label>
          <input type="text" placeholder="Enter Last Name" />
        </section>
        <section>
          <button>Save</button>
        </section>
      </section>
      {array.map((value, index) => {
        return <Header key={index} f={value.fName} s={value.sName} />;
      })}
    </>
  );
}

export default App;

// <> => JSX Fragment
// <React.Fragment> => JSX Fragment

// handel a data in a component => state
// useState => function in React called as Hook , which performs a specific  & complex task
// useState => function which returns an array of 2 elements
// 1 element => state
// 2 element => function which updates that state
