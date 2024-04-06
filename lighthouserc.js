module.exports = {
    ci: {
      collect: {
        url: ['https://www.businessinsider.com/']
      },
      assert: {
        'categories:accessibility': ['error', {'minScore': 1}]
      },      
      upload: {
        target: 'temporary-public-storage',
      },
    },
  };