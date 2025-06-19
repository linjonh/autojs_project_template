# autojs开发项目模板
## 依赖项
开发语言,语法高亮提示：
 - 1、autojs-dev
    
    项目地址：[Github](https://github.com/pboymt/autojs-dev.git)

    安装：
    ```bash 
    #安装到工程目录 dev依赖库
    npm i -D autojs-dev 
    #或全局
    npm i -g autojs-dev
    ```
    全局安装后支持的指令：
    ```bash
    autojs create <filename> # 根据模板创建脚本文件

    autojs cap [filename] # 对adb列表的第一个设备进行截图

    autojs new [projectName] # 新建Auto.js项目，可选用npm或yarn进行npm install操作

    autojs build # 根据配置文件编译脚本

    autojs img # 启动找图素材加载服务
    ```
 - 2、@sm003/autojs6-dts

    项目地址：[Github](https://github.com/SuperMonster003/AutoJs6-TypeScript-Declarations.git)

    安装：
    ```bash
    npm i -D @sm003/autojs6-dts
    ```
    识别位置：如果项目中本身已存在 jsconfig.json 文件, 只需将下列配置合并到已有文件即可:
    ```json
    {
        "compilerOptions": {
            "typeRoots": [
            "./node_modules/@sm003/autojs6-dts/declarations",
            "./declarations"
            ]
        }
    }
    ``` 
    3、esbuild，babel
        
    这个是为了把es6语法的module方式编译为兼容的非es6的commonjs语法格式
    4、rimraf
    跨平台的删除命令
## 创建项目模版
直接克隆本项目：
```
git clone https://github.com/linjonh/autojs_project_template.git
npm install
```
然后即可在src目录下开发autojs代码

> package.json文件配置了脚本运行命令，可以根据自己的安装设备目录修改路径
