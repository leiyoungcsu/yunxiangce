//index.js
var app = getApp()

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
 * 自定义函数--获取用户个人信息
 */
  getUserInfo: function (e) {
    // 尝试打印输出个人信息，看是否获取成功
    // console.log(e.detail.userInfo)

    //将用户个人信息存放到全局变量userInfo中
    app.globalData.userInfo = e.detail.userInfo

    // 检测是否已经获取了用户的openid
    if (app.globalData.openid==null){
      // 如果是第一次登陆则使用云函数获取用户openid
      wx.cloud.callFunction({
        name:'getOpenid',
        complete:res=>{
          // 尝试打印用户的openid，看是否获取成功
          // console.log(res.result.openid)

          // 将用户openid信息存在全局变量openid中
          app.globalData.openid = res.result.openid
        }
      })
    }
  },

  /**
 * 自定义函数--跳转上传图片页add
 */
  goToAdd: function () {
    wx.navigateTo({
      url: '../add/add',
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
    // 获取图片列表（按日期降序）
    photos.orderBy('addDate','desc').get({
      success:res=>{
        this.setData({
          photoList:res.data
        })
      }
    })  
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
