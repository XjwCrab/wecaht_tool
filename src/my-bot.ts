/*
 * @Author: Mr.Krab
 * @Date: 2025-06-20 00:00:00
 * @LastEditTime: 2024-01-01 00:00:00
 * @LastEditors: Mr.Krab
 * @Description: 微信机器人 - 使用免费 puppet 服务
 * @FilePath: /my-bot/src/my-bot.ts
 */

import { WechatyBuilder, Contact, Message, ScanStatus } from "wechaty";

// 使用免费的 puppet 服务，避免 PadLocal 版本问题
const bot = WechatyBuilder.build({
    name: "TestBot",
    // 不指定 puppet，使用默认的免费服务
})

bot.on('scan', (qrcode, status) => {
    console.log('========================================')
    console.log(`扫码状态: ${ScanStatus[status]}`)
    console.log('========================================')
    
    if (status === ScanStatus.Waiting || status === ScanStatus.Timeout) {
        console.log(`📱 请使用微信扫描二维码登录`)
        console.log(`🔗 二维码链接: https://wechaty.js.org/qrcode/${encodeURIComponent(qrcode)}`)
        console.log(`🖼️  在线二维码: https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(qrcode)}`)
        console.log('========================================')
    }
})

bot.on('login', (user) => {
    console.log('🎉 登录成功!')
    console.log(`👤 用户: ${user.name()}`)
    console.log(`📧 微信号: ${user.id}`)
    console.log('🤖 机器人已启动，开始处理消息...')
    console.log('========================================')
})

bot.on('logout', (user) => {
    console.log(`👋 用户 ${user.name()} 已退出登录`)
})

bot.on('message', async (message) => {
    console.log(`💬 收到消息: ${message.text()}`)
    
    // 忽略自己发送的消息
    if (message.self()) {
        return
    }
    
    const text = message.text()
    const contact = message.talker()
    const room = message.room()
    
    console.log(`👤 发送者: ${contact.name()}`)
    if (room) {
        console.log(`🏠 群聊: ${await room.topic()}`)
    }
    
    // 自动回复逻辑
    try {
        if (text === 'ping') {
            const reply = 'pong 🏓'
            if (room) {
                await room.say(reply, contact)
            } else {
                await contact.say(reply)
            }
            console.log(`✅ 已回复: ${reply}`)
        } 
        else if (text.toLowerCase().includes('hello') || text.includes('你好') || text.includes('hi')) {
            const reply = `Hello ${contact.name()}! 👋 \n很高兴认识你！我是你的微信助手机器人 🤖`
            if (room) {
                await room.say(reply, contact)
            } else {
                await contact.say(reply)
            }
            console.log(`✅ 已回复欢迎消息`)
        }
        else if (text.includes('帮助') || text.includes('help')) {
            const reply = `🤖 机器人功能说明：
• 发送 "ping" - 测试连接
• 发送 "hello/你好" - 获得欢迎消息  
• 发送 "帮助/help" - 查看此说明
• 我会自动记录和回复消息 📝`
            if (room) {
                await room.say(reply, contact)
            } else {
                await contact.say(reply)
            }
            console.log(`✅ 已发送帮助信息`)
        }
    } catch (error) {
        console.error('❌ 回复消息时出错:', error)
    }
})

bot.on('friendship', async (friendship) => {
    try {
        console.log('👥 收到好友请求')
        if (friendship.type() === bot.Friendship.Type.Receive) {
            console.log(`📝 好友请求内容: ${friendship.hello()}`)
            console.log(`👤 请求者: ${friendship.contact().name()}`)
            
            // 自动接受好友请求
            await friendship.accept()
            console.log('✅ 已自动接受好友请求')
        }
    } catch (error) {
        console.error('❌ 处理好友请求时出错:', error)
    }
})

bot.on('room-join', async (room, inviteeList, inviter) => {
    console.log(`🎉 新成员加入群聊 "${await room.topic()}"`)
    const nameList = inviteeList.map(c => c.name()).join(', ')
    console.log(`👥 新成员: ${nameList}`)
    console.log(`👤 邀请者: ${inviter.name()}`)
    
    // 欢迎新成员
    const welcomeMsg = `欢迎 ${nameList} 加入群聊! 🎉\n我是群助手机器人，有问题可以随时找我 🤖`
    try {
        await room.say(welcomeMsg)
        console.log('✅ 已发送欢迎消息')
    } catch (error) {
        console.error('❌ 发送欢迎消息时出错:', error)
    }
})

bot.on('error', (error) => {
    console.error('❌ 机器人错误:', error)
})

// 启动机器人
console.log('🤖 正在启动微信机器人...')
console.log('📱 使用免费 Puppet 服务，避免版本兼容性问题')
console.log('========================================')

bot.start()
    .then(() => {
        console.log('✅ 机器人启动成功!')
        console.log('⏳ 等待扫码登录...')
    })
    .catch((error) => {
        console.error('❌ 机器人启动失败:', error)
        process.exit(1)
    })
