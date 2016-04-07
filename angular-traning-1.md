#angular traning1

###angular主要的核心特点

* 双向数据绑定：实现了把model完全绑定在一起,model变化，viwe也变化，反之亦然

* 模板：在angularjs中，模板相当于html文件被浏览器解析到DOM中，angularjs遍历这些DOM，也就是说Angularjs把模板当做DOM来操作，去生成一些指令来完成对view的数据绑定

* MVVM：- 吸收了mvc的的设计思想，但又并不执行传统意义上的mvc，更接近于MVVM(model-view-viewModel)

* 依赖注入:AngularJS拥有內建的依赖注入子系统，可以帮助开发人员更容易开发，理解和测试应用

* 指令：可以创建自定义的标签，也可以用来装饰元素或者操作DOM属性


###指令介绍
AngularJS有一套完整的、可扩展的、用来帮助web应用开发的指令集，它使得HTML可以转变成“特定领域语言(DSL)”，是用来扩展浏览器能力的技术之一，在DOM编译期间，和HTML关联着的指令会被检测到，并且被执行，这使得指令可以为DOM指定行为，或者改变它。

AngularJS通过称为指令的新属性来扩展的HTML，带有前缀ng-，我们也可以称之为“指令属性”，它就是绑定在DOM元素上的函数，可以调用方法、定义行为、绑定controller及$scope对象、操作DOM，等等。

AngularJS指令指示的是“当关联的HTML结构进入编译阶段时应该执行的操作”，它本质上只是一个当编译器编译到相关DOM时需要执行的函数，可以写在元素的名称里，属性里，css类名里，注释里。

当浏览器启动、开始解析HTML时，DOM元素上的指令属性就会跟其他属性一样被解析，也就是说当一个Angular.js应用启动，Angular编译器就会遍历DOM树来解析HTML，寻找这些指令属性函数，在一个DOM元素上找到一个或多个这样的指令属性函数，它们就会被收集起来、排序，然后按照优先级顺序被执行。

Angular.js应用的动态性和响应能力，都要归功于指令属性，常见的有：ng-app、ng-init、ng-model、ng-bind、ng-repeat等等。

* ng-app 指令用来标明一个AngularJS应用程序，并通过AngualrJS完成自动初始化应用和标记应用根作用域，同时载入和指令内容相关的模块，并通过拥有ng-app指令为根节点开始编译其中的DOM


* ng-init 指令用来初始化数据，也就是为AngularJS应用程序定义初始值，通常会用一个控制器或模块来代替它


* ng-model 指令可以把应用程序的数据绑定到HTML元素，实现model和view的双向绑定


* ng-bind 和AngularJS表达式{{}}有异曲同工之妙，但不同之处在于ng-bind是在angular解析渲染完毕之后才将数据显示出来的。使用花括号{{}}时，因为浏览器需要先加载页面，渲染，然后angularJS才能把它解析成你期望的结果，所以对于首个页面中的绑定操作，建议使用ng-bind,以避免其未被渲染的模板被用户看到

* ng-click angular的事件指令

