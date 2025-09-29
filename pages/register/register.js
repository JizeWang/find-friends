Page({
  data: {},

  onRegister(e) {
    const { username, password, confirmPassword } = e.detail.value;
    if (!username || !password || !confirmPassword) {
      wx.showToast({ title: '请完整填写信息', icon: 'none' });
      return;
    }
    if (password !== confirmPassword) {
      wx.showToast({ title: '两次密码不一致', icon: 'none' });
      return;
    }

    // 模拟注册成功，保存账号
    wx.setStorageSync('isLogin', true);
    wx.setStorageSync('username', username);

    wx.showToast({ title: '注册成功', icon: 'success' });
    setTimeout(() => {
      wx.switchTab({ url: '/pages/usercenter/index' });
    }, 1000);
  }
});
