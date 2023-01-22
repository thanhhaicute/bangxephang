
import React from 'react';
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loadData: [

      ],


    }
  }

  componentDidMount() {
    axios.get('http://14.225.254.113:8000/datauser')
      .then(res => {
        const loadData = res.data;
        this.setState({ loadData });
        console.log(loadData)
      })


  }



  render() {

    return (
      <div style={{ backgroundColor: 'gray' }}>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Họ và tên</th>
              <th scope="col">Tiền trong người</th>
              <th scope="col">Tiền trong thẻ</th>
              <th scope="col">Cấp độ</th>


            </tr>
          </thead>
          {this.state.loadData.map((item, key) => {
            return (
              <tbody >
                <tr style={{ fontSize: '15px', color: 'white', marginTop: '2vh', borderBottom: 'none', marginTop: '1vh' }}>
                  <th scope="row">{item.id}</th>
                  <td>{item.name}</td>
                  <td>{item.money}</td>
                  <td>{item.money_bank}</td>

                  <td> Level {item.work_lvl}</td>
                </tr>

              </tbody>

            )
          })}

        </table>

      </div>

    )
  }
}

export default App;