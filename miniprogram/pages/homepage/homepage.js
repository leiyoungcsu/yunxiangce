// pages/homepage/homepage.js
// 连接云数据集photos
const db = wx.cloud.database()
const photos = db.collection('photos')

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options.id)

    // 获取用户的openid
    let openid = options.id

    // 显示loading提示框
    wx.showLoading({
      title: '数据加载中',
    })

    // 查找云数据集photos中该用户的图片上传记录
    photos.orderBy('addDate','desc').where({
      _openid:openid
    }).get({
      success:res=>{
        // 获取数据记录
        this.setData({
          photoList:res.data
        })
        
        // 关闭loading提示框
        wx.hideLoading()
      }

    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})