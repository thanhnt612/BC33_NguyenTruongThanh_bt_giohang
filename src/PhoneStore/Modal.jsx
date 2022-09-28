import React, { Component } from 'react'

export default class Modal extends Component {
    renderProduct = () => {
        const { gioHang, xoaGioHang, tangGiamSoLuong } = this.props
        console.log(gioHang)
        return gioHang.map((spCT, index) => {
            return (
                <tr>
                    <td>{spCT.maSP}</td>
                    <td>
                        <img src={spCT.hinhAnh} alt="..." width={50} height={50} />
                    </td>
                    <td>{spCT.tenSP}</td>
                    <td>
                        <button className='btn btn-primary'
                            onClick={() => {
                                tangGiamSoLuong(spCT.maSP, false)
                            }}>-</button>
                        <span className='mx-2'>{spCT.soLuong}</span>
                        <button className='btn btn-primary'
                            onClick={() => {
                                tangGiamSoLuong(spCT.maSP, true)
                            }}>+</button>
                    </td>
                    <td>{spCT.giaBan.toLocaleString()}</td>
                    <td>{(spCT.soLuong * spCT.giaBan).toLocaleString()}</td>
                    <td>
                        <button className="btn btn-danger"
                            onClick={() => {
                                xoaGioHang(spCT.maSP)
                            }}>Xóa</button>
                    </td>
                </tr >
            );
        })
    }
    renderTotal = () => {
        return (
            <tr>
                <td colSpan='5'></td>
                <td>Tổng tiền</td>
                <td>{
                    this.props.gioHang.reduce((toTal, sp, index) => {
                        return toTal += sp.soLuong * sp.giaBan
                    }, 0).toLocaleString()
                } VND</td>
            </tr>
        )
    }
    render() {
        return (
            <div>
                <div>
                    <div className="modal fade" id="modalId" tabIndex={-1} data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-xl" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="modalTitleId">Giỏ hàng</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                </div>
                                <div className="modal-body">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Mã sản phẩm</th>
                                                <th>Hình ảnh</th>
                                                <th>Tên sản phẩm</th>
                                                <th>Số lượng</th>
                                                <th>Đơn giá</th>
                                                <th>Thành tiền</th>
                                            </tr>
                                        </thead>
                                        <tbody>{this.renderProduct()}</tbody>
                                        <tfoot>{this.renderTotal()}</tfoot>
                                    </table>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-danger">Thêm vào giỏ hàng</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Optional: Place to the bottom of scripts */}
                </div>
            </div>
        )
    }
}
