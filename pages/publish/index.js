Page({
  data: {
    form: {
      destination: '',
      date: '',
      people: '',
      budget: '',
      note: ''
    }
  },

  onInput(e) {
    const key = e.currentTarget.dataset.key
    this.setData({
      [`form.${key}`]: e.detail.value
    })
  },

  onDateChange(e) {
    this.setData({
      'form.date': e.detail.value
    })
  },

  onSubmit() {
    const { destination, date, people, budget } = this.data.form
    if (!destination || !date || !people || !budget) {
      wx.showToast({
        title: '请填写完整信息',
        icon: 'none'
      })
      return
    }

    // 模拟提交
    wx.showToast({
      title: '发布成功',
      icon: 'success'
    })

    console.log('发布内容：', this.data.form)
  }
})
