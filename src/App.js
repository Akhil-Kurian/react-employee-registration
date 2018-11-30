import React, { Component } from 'react';
import './App.css';
import {Input,Layout,Row,Col,DatePicker } from 'antd';
const { Header, Footer, Content } = Layout;
const InputGroup = Input.Group;


class App extends Component {

  state = {
    firstName:'',
    lastName: '',
    phoneNumber:'',
    primaryEmail:'',
    secondaryEmail:'',
    address:'',
    jobCode:'',
    jobTitle:'',
    endClient:'',
    startDateVendor:'',
    projectId:'',
    projectName:''
  }
  changeHandler=(event)=>{
    this.setState({
        [event.target.name]: event.target.value
    });
    console.log(this.state);
  }
  

  render() {
    function onChange(date, dateString) {
      console.log(date, dateString);
    }
    return (
      <div className="App">
          <Layout>
            <Header className="header"><span>Employee Registration Form</span></Header>
            <Content className="contentLayout">
            <Row>
              <Col  span={12} offset={6}>
                <div className="contentColumn">
                <div className="contentTitle">Please enter the details</div>
                    <br/>
                  <InputGroup size="compact">
                    <Col span={12}>
                      <Input name="firstName" onChange={(event)=>this.changeHandler(event)} placeholder="First Name" value={this.state.firstName}/>
                    </Col>
                    <Col span={12}>
                      <Input name="lastName"  onChange={(event)=>this.changeHandler(event)} placeholder="Last Name" value={this.state.lastName} />
                    </Col>
                  </InputGroup>
                    <br/>
                    <InputGroup size="compact">
                    <Col span={12}>
                      <Input name="primaryEmail" onChange={(event)=>this.changeHandler(event)} placeholder="Primary Email"  value={this.state.primaryEmail}/>
                    </Col>
                    <Col span={12}>
                      <Input name="secondaryEmail" onChange={(event)=>this.changeHandler(event)} placeholder="Secondary Email" value={this.state.secondaryEmail} />
                    </Col>
                  </InputGroup>
                    <br/>
                  <InputGroup size="compact">
                    <Col span={16}>
                      <Input name="phoneNumber" onChange={(event)=>this.changeHandler(event)} placeholder="Phone Number" value={this.state.phoneNumber} />
                    </Col>
                  </InputGroup>
                    <br/>
                    <InputGroup size="compact">
                    <Col span={16}>
                      <Input name="jobCode" onChange={(event)=>this.changeHandler(event)} placeholder="Job Code" value={this.state.jobCode} />
                    </Col>
                  </InputGroup>
                    <br/>
                    <InputGroup size="compact">
                    <Col span={16}>
                      <Input name="jobTitle" onChange={(event)=>this.changeHandler(event)} placeholder="Job title" value={this.state.jobTitle} />
                    </Col>
                  </InputGroup>
                    <br/>
                    <InputGroup size="compact">
                    <Col span={16}>
                      <Input name="endClient" onChange={(event)=>this.changeHandler(event)} placeholder="End client"  value={this.state.endClient} />
                    </Col>
                  </InputGroup>
                    <br/>
                    <InputGroup size="compact">
                    <Col span={16}>
                      <DatePicker name="startDateVendor"  placeholder="Start date vendor" onChange={onChange, (event)=>this.changeHandler(event)} />
                    </Col>
                  </InputGroup>
                    <br/>
                    <InputGroup size="compact">
                    <Col span={16}>
                      <Input name="projectId" onChange={(event)=>this.changeHandler(event)} placeholder="project id"  value={this.state.projectId} />
                    </Col>
                  </InputGroup>
                    <br/>
                    <InputGroup size="compact">
                    <Col span={16}>
                      <Input name="projectName" onChange={(event)=>this.changeHandler(event)} placeholder="project name" value={this.state.projectName} />
                    </Col>
                  </InputGroup>
                    <br/>
                    <input type="submit" value="Submit"/>
              </div>
              </Col>
            </Row>
            </Content>
            <Footer className="footer">Footer</Footer>
          </Layout>
      </div>
    );
  }
}

export default App;
