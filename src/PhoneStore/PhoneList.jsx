import React, { Component } from 'react'
import PhoneItem from './PhoneItem';
export default class Phonelist extends Component {
    renderProduct = () => {
        const { phoneList, themGioHang } = this.props;
        return phoneList.map((phone, index) => {
            return <div className="col-4 mb-4" key={index}>
                <PhoneItem phoneItem={phone}
                    themGioHang={themGioHang} />
            </div>
        })
    }
    render() {
        return (
            <div className="row">
                {this.renderProduct()}
            </div>
        )
    }
}