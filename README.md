# 微信机器人助手 (WeChat Bot Tool)

基于 Wechaty 框架开发的智能微信机器人，支持自动回复、好友管理、群聊助手等功能。

## ✨ 主要功能

- 🤖 **智能对话**: 支持关键词触发的自动回复
- 👥 **好友管理**: 自动接受好友请求
- 🏠 **群聊助手**: 新成员欢迎消息
- 📱 **扫码登录**: 支持二维码登录微信
- 🔧 **易于扩展**: 模块化设计，便于添加新功能

## 🚀 快速开始

### 环境要求

- Node.js >= 16.0.0
- npm 或 yarn
- 微信客户端

### 安装依赖

```bash
# 克隆项目
git clone https://github.com/XjwCrab/wecaht_tool.git
cd wecaht_tool

# 安装依赖
npm install
```

### 启动机器人

```bash
# 编译 TypeScript
npm run build

# 启动机器人
npm start

# 或直接运行 TypeScript (开发模式)
npm run dev
```

### 登录步骤

1. 启动机器人后，终端会显示二维码链接
2. 使用微信扫描二维码
3. 在手机上确认登录
4. 机器人成功启动，开始处理消息

## 🤖 支持的命令

| 命令 | 功能 |
|------|------|
| `ping` | 测试机器人连接状态 |
| `hello` / `你好` / `hi` | 获取欢迎消息 |
| `帮助` / `help` | 查看功能说明 |

## 📁 项目结构

```
├── src/
│   └── my-bot.ts          # 主程序文件
├── package.json           # 项目配置
├── tsconfig.json         # TypeScript 配置
├── .gitignore           # Git 忽略文件
└── README.md           # 项目说明
```

## 🔧 配置说明

### 机器人配置

在 `src/my-bot.ts` 中可以修改：

- 机器人名称
- 自动回复规则
- 欢迎消息内容
- 日志输出格式

### 扩展功能

您可以通过修改事件监听器来添加新功能：

```typescript
// 监听消息事件
bot.on('message', async (message) => {
  // 添加您的自定义逻辑
})

// 监听好友请求事件
bot.on('friendship', async (friendship) => {
  // 自定义好友请求处理逻辑
})
```

## 📋 可用脚本

```bash
# 编译 TypeScript
npm run build

# 启动机器人
npm start

# 开发模式 (自动重启)
npm run dev

# 清理编译文件
npm run clean
```

## ⚠️ 注意事项

1. **微信限制**: 请遵守微信的使用条款，避免频繁操作
2. **网络环境**: 确保网络环境稳定，避免登录失败
3. **数据安全**: 机器人会生成登录缓存文件，请妥善保管
4. **使用规范**: 请在合规的场景下使用，不要用于垃圾信息发送

## 🛠️ 技术栈

- **Node.js**: 运行环境
- **TypeScript**: 开发语言
- **Wechaty**: 微信机器人框架
- **Puppet**: 微信协议适配器

## 📝 更新日志

### v1.0.0
- ✅ 基础机器人功能
- ✅ 扫码登录支持
- ✅ 自动回复功能
- ✅ 好友管理功能
- ✅ 群聊助手功能

## 🤝 参与贡献

欢迎提交 Issue 和 Pull Request！

1. Fork 本仓库
2. 创建您的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的修改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解更多详情。

## 🙋‍♂️ 联系方式

如果您有任何问题或建议，请通过以下方式联系：

- 项目地址: [https://github.com/XjwCrab/wecaht_tool](https://github.com/XjwCrab/wecaht_tool)
- 提交 Issue: [https://github.com/XjwCrab/wecaht_tool/issues](https://github.com/XjwCrab/wecaht_tool/issues)

---

⭐ 如果这个项目对您有帮助，请给它一个星标！
