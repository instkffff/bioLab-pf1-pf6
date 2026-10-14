# linux配置顺序

## 更新系统

- sudo apt update
- sudo apt upgrade
- sudo apt autoremove
- sudo apt install build-essential
- sudo apt install fonts-noto-cjk

## 系统配置

### 1. 安装 mqtt-server

- sudo apt install mosquitto mosquitto-clients
- 配置 mosquitto 服务

``` txt
persistence true
persistence_location /var/lib/mosquitto/

log_dest file /var/log/mosquitto/mosquitto.log

include_dir /etc/mosquitto/conf.d

allow_anonymous true

listener 1883 0.0.0.0
```

### 2. 安装 emqx-neuron

- tar -zxvf emqx-neuron.tar.gz
- 配置 neuron 服务 （开发机不配置）

``` txt
[Unit]
Description=Neuron Service
After=network.target

[Service]
# 设置运行服务的用户（建议不要使用 root，替换为你的用户名）
User=username

# 工作目录
WorkingDirectory=/home/username/neuron

前延迟 3前延迟 30 秒
ExecStartPre=/bin/sleep 30

# 启动命令（必须使用绝对路径）
ExecStart=/home/username/neuron

# 崩溃后自动重启
Restart=always
RestartSec=5s

# 标准输出和错误日志重定向到 journald
StandardOutput=journal
StandardError=journal
SyslogIdentifier=neuron

[Install]
WantedBy=multi-user.target
```

### 3. 串口权限

- sudo usermod -aG dialout username
- newgrp dialout

### 4. 串口绑定

- udevadm info --attribute-walk --name=/dev/ttyUSB0 （查看KERNELS）
- sudo nano /etc/udev/rules.d/99-usb-tty.rules （添加以下内容）

``` txt
SUBSYSTEM=="tty", KERNELS=="path", GROUP="dialout", MODE="0660", SYMLINK+="ttyname"
```

- sudo udevadm control --reload-rules
- sudo udevadm trigger
- ls -l /dev/ttyname

### 5. nodejs 安装

- 去官网获取安装脚本

``` shell
# Download and install nvm:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.8/install.sh | bash

# in lieu of restarting the shell
\. "$HOME/.nvm/nvm.sh"

# Download and install Node.js:
nvm install 24

# Verify the Node.js version:
node -v # Should print "v24.21.0".

# Verify npm version:
npm -v # Should print "11.19.0".
```

- npm install pm2 -g
- pm2 install pm2-logrotate

### 6. 安装 tailscale

- curl -fsSL https://tailscale.com/install.sh | sh
- 根据提示配置就行

### 7. pm2 开机启动

- pm2 save
- pm2 startup
- 根据提示配置就行

### 8. 安装 Cage

- sudo apt install cage
- sudo apt install xwayland
- sudo apt install foot
- cage -- foot
