export {default as Article} from './article/Article';
export {default as Brand} from './brand/Brand';
export {default as CTA} from './cta/CTA';
export {default as Feature} from './feature/Feature';
export {default as Navbar} from './navbar/Navbar';

/*
这个是一个组件的入口文件，这样做的好处是，
当我们在其他地方引入这个组件的时値断对路径就是这个文件夹的路径，
而不是具体的组件路径，这样做的好处是，当我们需要修改组件的路径的时候，
只需要修改这个文件就可以了，而不需要修改所有引用这个组件的地方。*/
