#!/usr/bin/env  node
import program from 'commander';
import compareFiles from '..';

program
  .version('0.0.1', '-v, --VERSION', 'new version message')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<firstConfig> <secondConfig>')
  .option('-f, --format [type]', 'output format', 'default')
  .action((firstPathToFile, secondPathToFile) => {
    console.log(compareFiles(firstPathToFile, secondPathToFile, program.format));
  });


program.parse(process.argv);

export default compareFiles;
