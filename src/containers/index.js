export {default as Blog} from './blog/Blog';
export {default as Features} from './features/Features'
export {default as Footer} from './footer/Footer';
export {default as Header} from './header/Header';
export {default as Possibility} from './possibility/Possibility';
export {default as WhatGPT3} from './whatGPT3/WhatGPT3';

/*
这个是一个组件的入口文件，这样做的好处是，
当我们在其他地方引入这个组件的时値断对路径就是这个文件夹的路径，
而不是具体的组件路径，这样做的好处是，当我们需要修改组件的路径的时候，
只需要修改这个文件就可以了，而不需要修改所有引用这个组件的地方。*/
