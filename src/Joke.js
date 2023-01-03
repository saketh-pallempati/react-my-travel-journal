function Joke(props) {
  console.log(props);
  return (
    <h3>
      {props.setup && <h2>Setup {props.setup} </h2>}
      Punchline {props.punch}
    </h3>
  );
}
export default Joke;
