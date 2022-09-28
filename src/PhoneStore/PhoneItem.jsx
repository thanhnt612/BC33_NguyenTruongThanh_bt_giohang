import React, { Component } from 'react'
export default class PhoneItem extends Component {
    render() {
        const { phoneItem, themGioHang } = this.props
        return (
            <div className="card m-3 text-white border border-primary rounded">
                <img src={phoneItem.hinhAnh} alt="" height={350} className="w-100" style={{ objectFit: 'contain' }} />
                <div className="card-body bg-primary">
                    <p>{phoneItem.tenSP}</p>
                    <p>{phoneItem.giaBan.toLocaleString()} VND</p>
                    <button className="btn btn-danger m-3"
                        onClick={() => {
                            themGioHang(phoneItem)
                        }}>Thêm vào giỏ hàng</button>
                </div>
            </div>
        )
    }
}
