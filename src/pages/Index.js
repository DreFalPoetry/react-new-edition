import React,{useEffect} from 'react';
import { ViewState } from '@devexpress/dx-react-scheduler';
import axios  from 'axios'; 
import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-bootstrap3';
import {
  Scheduler,
  MonthView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';

import {data} from './data';


export default class Index extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      data: data,
      currentDate: '2018-07-17',
    };
  }
  // useEffect(()=>{
  //   axios.get('http://192.168.31.180:8080/devices')
  //     .then(function (response) {
  //       // handle success
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       console.log(error);
  //     })
  //     .finally(function () {
  //       // always executed
  //     });
  // },[])
  render(){
    const { data, currentDate } = this.state;
    return (
      <div>
       <Scheduler
          data={data}
        >
          <ViewState
            currentDate={currentDate}
          />
          <MonthView />
          <Appointments />
        </Scheduler>
      </div>
    )
  }
}