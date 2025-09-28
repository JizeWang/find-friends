import TabMenu from './data';

Component({
  data: {
    active: 0,
    list: TabMenu,
  },

  lifetimes: {
    attached() {
      this.init();
    },
  },

  methods: {
    onChange(event) {
      const idx = event.detail.value;
      const url = this.data.list[idx].url;
      if (url) {
        wx.switchTab({
          url: url.startsWith('/') ? url : '/' + url,
        });
      }
    },

    onTabClick(e) {
      const url = e.currentTarget.dataset.url;
      if (url) {
        wx.switchTab({
          url: url.startsWith('/') ? url : '/' + url,
        });
      }
    },

    init() {
      const page = getCurrentPages().pop();
      const route = page ? page.route.split('?')[0] : '';
      const active = this.data.list.findIndex(
        (item) =>
          (item.url.startsWith('/') ? item.url.substr(1) : item.url) ===
          `${route}`
      );
      this.setData({ active });
    },
  },
});
