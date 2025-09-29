Page({
  data: {},

  onLogin(e) {
    const { username, password } = e.detail.value;
    if (!username || !password) {
      wx.showToast({ title: '请输入账号和密码', icon: 'none' });
      return;
    }
    // 模拟登录成功
    wx.setStorageSync('isLogin', true);
    wx.setStorageSync('username', username);

    wx.showToast({ title: '登录成功', icon: 'success' });
    setTimeout(() => {
      wx.switchTab({ url: '/pages/usercenter/index' });
    }, 1000);
  },

  onForgotPassword() {
    wx.showModal({
      title: '提示',
      content: '请联系管理员或使用找回密码功能',
      showCancel: false
    });
  },
  // ⭐ 新增：跳转到注册页面
  onRegister() {
    wx.navigateTo({
      url: '/pages/register/register'
    });
  }
});

