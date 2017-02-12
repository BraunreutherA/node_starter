# Node.js opinionated boilerplate

An opinionated boilerplate for node.js based projects

## What's included?
- es6 with babel
- eslint
- Testing with ava
- wallaby.js testing

## How to use
Simply clone the project and build your node.js project.

`npm run clean` deletes all lib files
`npm run lint` lints all project files with eslint
`npm test` run your test suit
`npm run build` compiles your es6 files through babel

## git labelmaker
`git-labelmaker` is an awesome tool to easily create a good labeling strategy for your project on github.
Have a look into it's repositor: https://github.com/himynameisdave/git-labelmaker
Or into this article which describes the project more in depth: https://medium.com/@dave_lunny/sane-github-labels-c5d2e6004b63#.atscyttcd

There is also a preset which you can use, which combines the best presets of `git-labelmaker`.
You can find the presets in `github_labels.json`. Simply call `npm run labelmaker` to start your label creation.

## TODO

[ ] coverage script doens't work
[ ] add docs generator (esdocs)

## License

MIT © [Alexander Braunreuther](https://github.com/BraunreutherA)
