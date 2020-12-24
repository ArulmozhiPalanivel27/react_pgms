import React from "react";


/* private renderCount = 0;
 */
class Sampledata extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "arul",
      remstatement: "props  jjhhjdjhfd and life cycle",

      lastname:" jdjdh",

      goodname: "arul",
      empno: "123",
      desiganation: "UI developer",
      address: "Tharamani",
      mobile: "9876543215",
      payrate: "20000",
    };
    this.updateSetState = this.updateSetState.bind(this);
    this.deleteSetState = this.deleteSetState.bind(this);
    this.addSetState = this.addSetState.bind(this);
  }

  updateSetState() {
    this.setState({
      name: "siva",
      remstatement:"javascript library user interface",
      lastname:"ghgjhgjh",
    });
  }

  deleteSetState() {
    this.setState({
      name: "dfdf",
      remstatement:"fggfgf",
    });
  }

  addSetState() {
    this.setState({
      name: "palanivel",
      remstatement:"single page application",
    });
  }

  render() {
    return (
      <div>
        <p> lastname = {this.state.remstatement}</p>
      </div>
    );
  }

  /* 

  onInputchange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  onSubmitForm() {
    console.log(this.state);
  }

   */

  render() {
    return (
      <div className="details">
        <h2>Hello {this.state.name}</h2>
        <p>
          React js for beginners state, {this.state.remstatement} of react..
        </p>
        <button onClick={this.updateSetState}>UPDATE</button>
        <button onClick={this.deleteSetState}>DELETE</button>
        <button onClick={this.addSetState}>Add</button>

        <div className="input">
          Lastname:
          <input type="text" name="lname" value="{this.updateSetState}" />

        </div>

      </div>

      /* 
         
<section className="container-fluid">
  <section className="row justify-content-center">
    <section className="col-12 col-xs-7 col-md-5">

    <div className="form-horizontal">
  <div className="form-group">
          <label for="gname" className="col-sm-3 control-label"> Goodname::</label>
          <div className="col-sm-9">
              <input type="text" id="gname" placeholder="goodname" className="form-control" />
          </div>
      </div>
      <div className="form-group">
          <label for="empno" className="col-sm-3 control-label">Emp No:</label>
          <div className="col-sm-9">
              <input type="text" id="empno" placeholder="Emp No" className="form-control" />
          </div>
      </div>
      <div className="form-group">
          <label for="desig" className="col-sm-3 control-label">Designation: </label>
          <div className="col-sm-9">
              <input type="email" id="desig" placeholder="Designation" className="form-control" />
          </div>
      </div>
      </div>
      </section>
      </section>
      </section>
     
          
    */
    );
  }

  getSnapshotBeforeUpdate(prevState ) {

     if (prevState.someVariable !== this.state.someVariable) {
      const newVariable = this.someRef.current;
      return newVariable.scrollTop;
  }
  return null;
   
    console.log('getSnapShotBeforeUpdate');
  
  }
  
  /*
  ComponentWillReceiveProps() { 
    console.log('ComponentWillReceiveProps');
  
  
  }
  getSnapShotBeforeUpdate() {
    console.log('getSnapShotBeforeUpdate');
  
  }
   */
}

export default Sampledata;
