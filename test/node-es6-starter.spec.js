import { expect } from 'chai';
import { exec } from 'child_process';
import hello from '../src';

function grabStdout() {
  const { write } = process.stdout;
  let content = '';
  process.stdout.write = (chunk, encoding, cb) => {
    content += chunk.toString();
    return write(chunk, encoding, cb);
  };

  return {
    letGo: () => {
      process.stdout.write = write;
    },
    content,
  };
}

describe('Hello', () => {
  describe('Function return', () => {
    it('Return Default', () => {
      const greetings = hello();
      expect(greetings).to.equal('Hello World!\n');
    });

    it('Return Param', () => {
      const greetings = hello('Friend');
      expect(greetings).to.equal('Hello Friend!\n');
    });
  });

  describe('stdout', () => {
    it('Print Default', (done) => {
      exec('npx babel-node src/', (error, stdout) => {
        if (error) {
          done(error);
          return;
        }
        expect(stdout).to.equal('Hello World!\n');
        done();
      });
    }).timeout(5000);
  });
});
