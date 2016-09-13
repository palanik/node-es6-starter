import hello from '../src/index.js';

let chai = require('chai');

chai.should();

function grabStdout() {
  const write = process.stdout.write;
  let content = '';
  process.stdout.write = (chunk, encoding, cb) => {
    content += chunk.toString();
    return write(chunk, encoding, cb);
  }

  return {
    letGo: () => {
        process.stdout.write = write;
    },
    content: content,
  };
}

describe('Hello', () => {
  it('Print Default', () => {
    const greetings = hello();
    greetings.should.eql('Hello World!\n');
  })
});
