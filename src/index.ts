import fs from "fs"

const text = fs.readFileSync("bin.txt", "utf-8");
const nums = text.trim()
              .split(/\n/)
              .filter((item) => item)
              .map((item) => Number(item));
if (nums.length != 256) {
  console.error('二进制数字长度不是256');
  process.exit(-1)
}

const numStrs = Array(64).fill(0).map((_, index) => {
  const start = index * 4;
  const numSeg = nums.slice(start, start + 4);
  const num = numSeg[0] * 8 + numSeg[1] * 4 + numSeg[2] * 2 + numSeg[3];
  return num.toString(16);
});
const priKey = numStrs.join('');
console.log(priKey);
