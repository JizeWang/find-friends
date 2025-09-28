// pages/home/home.js
// 如果后面要接后端，把 mockTripList() 替换成接口请求即可
Page({
  data: {
    // 顶部轮播
    imgSrcs: [
      '/images/banner1.jpg',
      '/images/banner2.jpg',
      '/images/banner3.jpg',
    ],
    // 行程卡片列表
    tripList: [],
    pageLoading: false,

    // 轮播参数
    current: 0,
    autoplay: true,
    duration: 500,
    interval: 5000,
    navigation: { type: 'dots' },
    swiperImageProps: { mode: 'aspectFill' },
  },

  onShow() {
    // 你的项目里已有自定义 tabbar，这里保持不变
    this.getTabBar && this.getTabBar().init && this.getTabBar().init();
  },

  onLoad() {
    this.init();
  },

  onPullDownRefresh() {
    this.init();
  },

  init() {
    wx.stopPullDownRefresh();
    this.setData({ pageLoading: true });
    // mock 数据，也可替换为接口
    const trips = this.mockTripList();
    this.setData({ tripList: trips, pageLoading: false });
  },

  // 点击卡片
  onTapTrip(e) {
    const { id } = e.currentTarget.dataset;
    // 这里跳转到你自己的详情页
    wx.navigateTo({ url: `/pages/trip/detail/index?id=${id}` });
  },

  // 搜索页
  navToSearchPage() {
    wx.navigateTo({ url: '/pages/trip/search/index' });
  },

  // 轮播活动点击
  navToActivityDetail({ detail }) {
    const { index = 0 } = detail || {};
    wx.navigateTo({ url: `/pages/promotion/promotion-detail/index?promotion_id=${index}` });
  },

  // ======== mock 数据（演示 UI 用）=======
  mockTripList() {
    return [
      {
        id: 1,
        tags: ['旅游', '找搭子'],
        title: '北京故宫深度游',
        city: '北京',
        date: '2024-01-08',
        members: '1/3人',
        price: '￥400–600',
        host: '旅行达人A',
        avatar: '/images/u1.jpg',
      },
      {
        id: 2,
        tags: ['旅游', '找搭子'],
        title: '成都美食之旅',
        city: '成都',
        date: '2024-01-20',
        members: '3/6人',
        price: '￥300–500',
        host: '小甜',
        avatar: '/images/u2.jpg',
      },
    ];
  },
});