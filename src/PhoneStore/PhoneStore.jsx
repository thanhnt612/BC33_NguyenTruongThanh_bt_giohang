import React, { Component } from 'react'
import Modal from './Modal'
import PhoneList from './PhoneList'
const data = [
    {
        "maSP": 1,
        "tenSP": "VinSmart Live",
        "manHinh": "AMOLED, 6.2, Full HD+",
        "heDieuHanh": "Android 9.0 (Pie)",
        "cameraTruoc": "20 MP", "cameraSau":
            "Chính 48 MP & Phụ 8 MP, 5 MP",
        "ram": "4 GB", "rom": "64 GB",
        "giaBan": 5700000,
        "hinhAnh": "./img/vsphone.jpg",
        'soLuong': 1
    },
    {
        "maSP": 2,
        "tenSP": "Meizu 16Xs",
        "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels",
        "heDieuHanh": "Android 9.0 (Pie); Flyme",
        "cameraTruoc": "20 MP",
        "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
        "ram": "4 GB",
        "rom": "64 GB",
        "giaBan": 7600000,
        "hinhAnh": "./img/meizuphone.jpg",
        'soLuong': 1
    },
    {
        "maSP": 3,
        "tenSP": "Iphone XS Max",
        "manHinh": "OLED, 6.5, 1242 x 2688 Pixels",
        "heDieuHanh": "iOS 12",
        "cameraSau": "Chính 12MP & Phụ 12 MP",
        "cameraTruoc": "7 MP",
        "ram": "4 GB",
        "rom": "64 GB",
        "giaBan": 27000000,
        "hinhAnh": "./img/applephone.jpg",
        'soLuong': 1
    }
]
export default class ShoesStore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gioHang: []
        }
    }
    themGioHang = (phoneCLick) => {
        let spGioHang = {
            "maSP": phoneCLick.maSP,
            "tenSP": phoneCLick.tenSP,
            "giaBan": phoneCLick.giaBan,
            "hinhAnh": phoneCLick.hinhAnh,
            'soLuong': 1
        }
        //Kiểm tra PhoneCLick có trong giỏ hàng chưa
        let gioHangCapNhat = [...this.state.gioHang]
        let index = gioHangCapNhat.findIndex(sp => sp.maSP === spGioHang.maSP);
        if (index !== -1) {
            //Sản phẩm được click đã có trong this.state.spChiTiet
            gioHangCapNhat[index].soLuong += 1;
        } else {
            //Sản phẩm được click chưa có trong this.state.spChiTiet
            gioHangCapNhat.push(spGioHang);
        }
        this.setState({
            gioHang: gioHangCapNhat
        })
    }
    xoaGioHang = (phoneClick) => {
        let gioHangCapNhat = this.state.gioHang.filter(prod => prod.maSP !== phoneClick)
        this.setState({
            gioHang: gioHangCapNhat
        })
    }
    tangGiamSoLuong = (maSP, tangGiam) => {//tangGiam === true: tăng số lượng, false: giảm số lượng
        let gioHangCapNhat = [...this.state.gioHang]
        let index = gioHangCapNhat.findIndex(prod => prod.maSP === maSP)
        if (tangGiam) {
            gioHangCapNhat[index].soLuong += 1;
        } else {
            if (gioHangCapNhat[index].soLuong > 1) {
                gioHangCapNhat[index].soLuong -= 1;
            }
        }
        this.setState({
            gioHang: gioHangCapNhat
        })
    }
    render() {
        let tongSoLuong = this.state.gioHang.reduce((tsl, spCT, index) => {
            return tsl += spCT.soLuong;
        }, 0)
        console.log(tongSoLuong);
        return (
            <div className='container'>
                <h3 className='text-center text-primary'>Phones Store</h3>
                <Modal gioHang={this.state.gioHang}
                    xoaGioHang={this.xoaGioHang}
                    tangGiamSoLuong={this.tangGiamSoLuong}
                    phoneCart={data} />
                <div className="text-end">
                    <span className="text-danger"
                        data-bs-toggle="modal" data-bs-target="#modalId"
                        style={{
                            cursor: 'pointer',
                            fontSize: "17px", fontWeight: 'bold'
                        }}
                    >Giỏ hàng ({tongSoLuong})</span>
                </div>
                <PhoneList phoneList={data}
                    themGioHang={this.themGioHang}
                    xemThem={this.xemThem} />
            </div>
        )
    }
}
