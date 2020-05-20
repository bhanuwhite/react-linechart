
import React, { Fragment } from "react";
import Chart from "react-google-charts";
import { connect } from "react-redux";
import { Layout } from "antd";
import {jsonData} from '../../../static/data/jsonData'


import localStyles from "./chart.less";

const { Content } = Layout;

class chartView extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      key: "Indices",
    };
  }

  handleClick = (e) => {
    console.log(e, "val");
    this.setState({ key: e });
  };

  render() {
    
    const keys = Object.keys(jsonData);

    const data = jsonData[`${this.state.key}`].map((obj) => [
      obj.year,
      Number(obj.sales),
    ]);
    const innerKeys = Object.keys(jsonData[`${keys[0]}`][0]);
    data.unshift([innerKeys[0], innerKeys[1]]);

    return (
      <Fragment>
        <Layout>
          <Content>
            <div className={localStyles.rolesContentDiv}>
              <div className={localStyles.flex}>
                {keys.map((key) => (
                  <div
                    className={
                      this.state.key == key ? localStyles.highlight : ""
                    }
                    value={key}
                    onClick={() => this.handleClick(key)}
                  >
                    {key}
                  </div>
                ))}
              </div>
              <Chart
                style={{ marginTop: "70px" }}
                width={"1300px"}
                height={"500px"}
                chartType="AreaChart"
                loader={<div>Loading Chart</div>}
                data={
                  data
                 
                }
                options={{
                  chartArea: { width: "50%", height: "70%" },
                  
                }}
               
                rootProps={{ "data-testid": "1" }}
              />
            </div>
          </Content>
        </Layout>
      </Fragment>
    );
  }
}

export default connect(({ chart }) => ({ chart }))(chartView);
