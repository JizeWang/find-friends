Page({
  data: {
    typeOptions: ['同城游玩', '旅游搭子', '陪玩服务'],
    typeIndex: null,

    playOptions: ['酒吧', '唱K', '小众景点', '吃饭', '拼酒店'],
    playIndex: null,

    cityOptions: ['北京', '上海', '广州', '深圳'],
    cityIndex: null,

    destination: '',
    partnerNum: '',
    amount: ''
  },

  // 类型选择
  onTypeChange(e) {
    this.setData({
      typeIndex: e.detail.value,
      playIndex: null, // 切换类型时重置游玩类型
      amount: ''       // 切换类型时清空金额
    });
  },

  // 游玩类型选择
  onPlayTypeChange(e) {
    this.setData({
      playIndex: e.detail.value
    });
  },

  // 输入目的地
  onInputDestination(e) {
    this.setData({ destination: e.detail.value });
  },

  // // 城市选择
  // onCityChange(e) {
  //   this.setData({ cityIndex: e.detail.value });
  // },
   // ⭐ 城市选择（地图）
   onChooseLocation() {
    wx.chooseLocation({
      success: (res) => {
        // 这里可以取 res.name 或 res.address，你自己决定显示什么
        this.setData({
          cityName: res.name || res.address
        });
      },
      fail: (err) => {
        console.error('选择位置失败', err);
      }
    });
  },

  // 输入伙伴数
  onInputPartnerNum(e) {
    this.setData({ partnerNum: e.detail.value });
  },

  // 输入金额
  onInputAmount(e) {
    this.setData({ amount: e.detail.value });
  },

  // 发布
  onPublish() {
    const { typeIndex, destination, cityIndex, partnerNum, typeOptions, playIndex, playOptions, amount } = this.data;

    if (typeIndex === null) {
      wx.showToast({ title: '请选择类型', icon: 'none' });
      return;
    }
    if (typeOptions[typeIndex] === '同城游玩' && playIndex === null) {
      wx.showToast({ title: '请选择游玩类型', icon: 'none' });
      return;
    }
    if (!destination) {
      wx.showToast({ title: '请输入目的地', icon: 'none' });
      return;
    }
    if (cityIndex === null) {
      wx.showToast({ title: '请选择城市', icon: 'none' });
      return;
    }
    if (!partnerNum) {
      wx.showToast({ title: '请输入伙伴数量', icon: 'none' });
      return;
    }
    if (typeOptions[typeIndex] === '陪玩服务' && !amount) {
      wx.showToast({ title: '请输入金额', icon: 'none' });
      return;
    }

    // 模拟提交
    wx.showToast({ title: '发布成功', icon: 'success' });

    console.log({
      type: typeOptions[typeIndex],
      playType: typeOptions[typeIndex] === '同城游玩' ? playOptions[playIndex] : null,
      destination,
      city: this.data.cityOptions[cityIndex],
      partnerNum,
      amount: typeOptions[typeIndex] === '陪玩服务' ? amount : '免费'
    });
  }
});
