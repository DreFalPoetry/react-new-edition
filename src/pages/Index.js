import React,{useEffect} from 'react';
import axios  from 'axios'; 
import {ReAreaCharts} from 'mini-chart-line'
import {data} from './data';


export default class Index extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      data: data,
      currentDate: '2018-07-17',
    };
  }

  componentDidMount(){
    
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
        <div id="sddd">sdddd</div>
        <ReAreaCharts 
          axis_x={['1s','10s','30s','1min']}
          data={['10','20','30','40']} 
          tooltip={true}
          strokeColor={'red'}
          fillColor={'blue'}
        />
      </div>
    )
  }
}