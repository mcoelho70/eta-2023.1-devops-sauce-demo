module.exports = {
  ci: {
    collect: {
      url: ['https://www.businessinsider.com/']
    },
    assert: {
      assertions: {
        'categories:accessibility': ['error', { 'minScore': 0.90 }]
      }
    },      
    upload: {
      target: 'temporary-public-storage',
    },
  },
};