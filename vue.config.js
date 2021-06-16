module.exports = {
    pluginOptions: {
        electronBuilder: {
            // 自定义协议，同时需要修改background.js中的load    
            customFileProtocol: 'xjbtfb-club://./',
            // build参数
            builderOptions: {
                appId: 'club.xjbtfb',
                productName: 'XJBT FootBall Club',
                electronDownload: {
                mirror: "https://npm.taobao.org/mirrors/electron/"
                },
                electronVersion: "12.0.10",
                dmg: {
                    contents: [
                        {
                            x: 410,
                            y: 150,
                            type: "link",
                            path: "/Applications"
                        },
                        {
                            x: 130,
                            y: 150,
                            type: "file"
                        }
                    ]
                },
                mac: {
                    icon: "build_static/icon.icns"
                },
                win: {
                icon: "build_static/icon.ico"
                }
            }
        }
  }
}