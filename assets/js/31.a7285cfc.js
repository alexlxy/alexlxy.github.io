(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{526:function(t,s,a){"use strict";a.r(s);var r=a(5),n=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("Boxx"),t._v(" "),a("p",[t._v("最近发现之前阿里云云翼计划的服务器CPU和内存占用有点高,考虑到Windows的占用问题,而且大部分服务器都在使用Linux,于是决定将系统镜像换成Linux,在此记录下服务器的配置.")]),t._v(" "),a("h2",{attrs:{id:"服务器的安全组配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务器的安全组配置"}},[t._v("#")]),t._v(" 服务器的安全组配置")]),t._v(" "),a("p",[t._v("安全组方面,需要将常用的端口放行,否则无法访问相应端口的服务.\n除默认配置外我加了以下端口")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2019/11/19/36OmFvExkqtGz5y.png",alt:"Clip_20191119_091355.png"}})]),t._v(" "),a("h2",{attrs:{id:"使用ssh连接服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用ssh连接服务器"}},[t._v("#")]),t._v(" 使用SSH连接服务器")]),t._v(" "),a("p",[t._v("由于Linux没有图形界面,所以在此我选择Xshell连接,也可以选择Putty,都比较好用")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2019/11/19/LyNljmHTib9kIVC.png",alt:"Clip_20191119_094746.png"}})]),t._v(" "),a("h2",{attrs:{id:"搭建web服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#搭建web服务器"}},[t._v("#")]),t._v(" 搭建web服务器")]),t._v(" "),a("p",[t._v("为了方便配置和安装,在此我使用的是宝塔面板,为什么选择这个面板呢?因为原生的各种配置较为复杂,不适合初学者入门,有集成的当然要偷懒了,而且这个面板在服务器上应用较为广泛,我也用了很多年了,还是很不错的,关于此面板的介绍可以访问"),a("a",{attrs:{href:"https://bt.cn",target:"_blank",rel:"noopener noreferrer"}},[t._v("宝塔面板官网"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("安装命令:")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("yum install -y wget && wget -O install.sh http://download.bt.cn/install/install_6.0.sh && sh install.sh\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("待命令跑完后,此时屏幕上会显示一个http:的地址,这便是你的宝塔面板的后台,如果安全组配置没有问题,你此时已经可以用浏览器打开这个地址,使用屏幕上显示的用户名以及密码登录后台.")]),t._v(" "),a("p",[t._v("此时应该还会自动弹出让你选择WEB服务器及数据库的选项.在此你可以根据自己的需求进行选择(即使此处选错或者漏选也可以后续在软件商店进行重新安装或者卸载)")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2019/11/19/AZqpJgHv8fLo6Xu.png",alt:"Clip_20191119_095723.png"}})]),t._v(" "),a("p",[t._v("装好之后,可以在这里添加网站\n"),a("img",{attrs:{src:"https://i.loli.net/2019/11/19/SQgs5ZYrzj69emf.png",alt:"QQ截图20191119100135.png"}})]),t._v(" "),a("p",[t._v("添加一个ftp账户用来便于后面上传源码,添加一个数据库用于后面数据的保存.")]),t._v(" "),a("p",[t._v("完成之后需要将域名解析至服务器IP,如果有多个网站,可以使用二级域名解析到不同的网站.使用阿里云的服务器需要域名进行备案.具体的可以去百度阿里云域名备案")]),t._v(" "),a("p",[t._v("那么问题来了,没有域名怎么办?")]),t._v(" "),a("p",[t._v("当然,没有域名我们也可以直接使用服务器的ip进行访问,只需要在创建网站的选项中将服务器的ip写在域名栏中.等服务器收到客户端的请求后就会将此网站的内容显示给用户.")]),t._v(" "),a("p",[t._v("网站创建好之后,可以将网站的源码使用FTP客户端上传至服务器,ftp客户端可以使用Xftp,连接后进入对应的网站目录,将源码上传至对应目录即可.\n"),a("img",{attrs:{src:"https://i.loli.net/2019/11/19/EAuclMshICbYy1v.png",alt:"QQ截图20191119102706.png"}})]),t._v(" "),a("h2",{attrs:{id:"mysql的相关配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql的相关配置"}},[t._v("#")]),t._v(" MySQL的相关配置")]),t._v(" "),a("p",[t._v("在服务器端,我们可以使用phpMyadmin连接数据库进行增删改查,想要远程使用数据库,比如使用Navicat连接数据库,默认是不支持此操作的,需要进行相关的配置.")]),t._v(" "),a("h3",{attrs:{id:"防火墙及安全组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#防火墙及安全组"}},[t._v("#")]),t._v(" 防火墙及安全组")]),t._v(" "),a("p",[t._v("需要放行3306端口")]),t._v(" "),a("h3",{attrs:{id:"root用户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#root用户"}},[t._v("#")]),t._v(" root用户")]),t._v(" "),a("p",[t._v("使用phpMyadmin,打开上面的账户,选择root用户,将配置改为如图,如果防火墙及安全组放行正常的话,就可以进行连接了")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2019/11/19/ARUng1rbaVqLIMv.png",alt:"QQ截图20191119103822.png"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2019/11/19/tNxT2ZqomVkOBip.png",alt:"QQ截图20191119103849.png"}})]),t._v(" "),a("h3",{attrs:{id:"普通用户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#普通用户"}},[t._v("#")]),t._v(" 普通用户")]),t._v(" "),a("p",[t._v("对于单个的用户来讲,只需要将此选项改为所有人,即可进行远程连接.")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2019/11/19/M2Vt3Zcka4IrPud.png",alt:"QQ截图20191119103315.png"}})]),t._v(" "),a("p",[t._v("至此,简单的web服务器就搭建完成了.其余需要的服务可以在宝塔软件商店中进行安装及配置.")]),t._v(" "),a("p",[a("em",[t._v("简单来讲,当发现服务从本地访问不到,首先检查服务器的安全组配置是否正常,接下来检查服务器的防火墙配置是否正确,再检查服务器端的进程是否正常运行.")])]),t._v(" "),a("Vssue",{attrs:{title:t.$title}})],1)}),[],!1,null,null,null);s.default=n.exports}}]);