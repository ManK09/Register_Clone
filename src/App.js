import React,{useState} from 'react'
import './App.css';
import 'antd/dist/antd.css';
import {Card, Form, Input, Select, Radio, Button} from 'antd'
//import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom';
//import { findByLabelText } from '@testing-library/react';

const { Option } = Select;

const style ={
  marginTop: '1rem',
  //paddingLeft:'0rem',
  //paddingRight:'2rem',
  width:'600px',
  
}

const check={
  marginRight:'15px',
  height:'50px',
  fontWeight:'bold',
  //display:'flex',
  //flexDirection:'column',
  // backgroundColor:'red'
}
function App() {

  const [values,setValues] = useState({
    prefix:+91,
    contact:'',
    class:''
  })
const hello =true;
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 5,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 12,
      },
    },
  };
  // const y = document.querySelector('.ant-radio-button-wrapper .ant-radio-button-wrapper-checked');
  // const p = document.querySelectorAll('.ant-radio-button-wrapper');
  function onChange(e) {
    //console.log(`radio checked:${e.target.value}`);
    setValues({...values,class:e.target.value});
    // const z= document.querySelector('.ant-radio-button-wrapper .ant-radio-button-wrapper-checked');
    // console.log("dekh",y,z);
  }
  const handleChangePrefix = (value) =>{
    //console.log(value);
    setValues({...values,prefix:value});
  }
  //console.log("Ohh",values);
  // console.log(y,"oh")
  // console.log(p,'yes')

  const handleChangeContact = (e) =>{
    console.log(e.target.value);
    setValues({...values,contact:e.target.value});
  }

  return (
    <div className="temp">
    <div className="App">
      
      {/* <img width="148" height="100%" src="data:image/png;base64,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" alt="Whitehat" class="pr-2"></img>
     */}
      <div className="blue-block">
      </div>
      <div className="content">
        <img width="148" height="100%" src="data:image/png;base64,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" alt="Whitehat" class="pr-2"></img>
        <h1>Book Your Free Coding Class</h1>
        <span>Limited Spots left!</span>
        <Form style={{...style}} > 
            <Form.Item style={{display: 'inline-block',width:'100px'}}>
              <Select defaultValue="+91" onChange={handleChangePrefix}> 
                <Option value="1">Option 1</Option>
                <Option value="2">Option 2</Option>
                <Option value="3">Option 3</Option>
              </Select>
            </Form.Item>
            <Form.Item
              style={{display: 'inline-block',width:'70%',marginLeft:'20px'}}
              hasFeedback
              validateStatus={values.contact.length!==10 ? "error" : "success"}
              help={values.contact.length ===10 ? '' : (values.contact.length===0 ? "Parent's Mobile is required": "Enter a valid number")}
            >
              <Input placeholder="Parent's Mobile" id="error2" style={{width:'100%'}} type="number" value={values.contact} 
                onChange={handleChangeContact}/>
            </Form.Item>
            <Form.Item style={{marginTop:'20px',marginBottom:'0px'}}>
              <label className="sp">Select your child's grade/class in school</label>
            </Form.Item>
            <Form.Item>
                <Radio.Group buttonStyle="solid" onChange={onChange}>
                  <Radio.Button value="a" style={{...check}}>
                    <span>Class</span> <span>1</span>
                  </Radio.Button>
                  <Radio.Button value="b" style={{...check}}>
                    Class 2-3
                  </Radio.Button>
                  <Radio.Button value="c" style={{...check}}>
                    Class 4-6
                  </Radio.Button>
                  <Radio.Button value="d" style={{...check}}>
                    Class 7-9
                  </Radio.Button>
                  <Radio.Button value="e" style={{...check}}>
                    Class 10-12
                  </Radio.Button>
                </Radio.Group>
            </Form.Item>
            <Form.Item>
              <Button style={{width:'90%',height:'50px',background:values.contact.length===10 && values.class!=='' ? '#0FC543':'#FF7200',color:'white',fontSize:'20px'}}>
                { (values.contact.length===10 && values.class!=='') ? 'Schedule Now' : 'Schedule a Free Class'}
                </Button>
            </Form.Item>
            <Form.Item>
              <span>By registering here, I agree to Whitehat Jr <a>Terms & Conditions</a> and <a>Privacy Policy</a></span>
            </Form.Item>

        </Form>
      </div>
    </div>
    </div>
  );
}

export default App;
