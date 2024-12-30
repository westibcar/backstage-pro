module.exports = {
  devServer: {
    host: '0.0.0.0',  // Permite conexões de qualquer endereço IP
    port: 3000,       // A mesma porta que você deseja
    historyApiFallback: true,
    hot: true,
    allowedHosts: 'all',  // Permite todos os hosts
  },
};

