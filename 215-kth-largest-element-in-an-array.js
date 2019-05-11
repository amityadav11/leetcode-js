/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = function(nums, k) {
  if (!nums || k > nums.length) return 0;

  const larger = [];
  const smaller = [];
  const pivot = nums[parseInt(nums.length / 2)];
  let pivotCount = 0;

  for (let i = 0; i < nums.length; i++) {
    const ele = nums[i];

    if (ele > pivot) larger.push(ele);
    else if (ele === pivot) pivotCount++;
    else smaller.push(ele);
  }

  if (larger.length >= k) return findKthLargest(larger, k);
  else if (k - larger.length - pivotCount <= 0) return pivot;
  else return findKthLargest(smaller, k - larger.length - pivotCount);
};

// another

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = function(nums, k) {
  return quickselect(nums, 0, nums.length - 1, k)
};
function quickselect(arr, lo, hi, k) {
  let pivtIdx = Math.floor(Math.random() * (hi - lo + 1)) + lo
  let pivtVal = arr[pivtIdx]
  ;[arr[hi], arr[pivtIdx]] = [arr[pivtIdx], arr[hi]]
  let i = lo
  let j = hi - 1

  while (i <= j) {
    if (arr[i] <= pivtVal) {
      i++
    } else {
      ;[arr[j], arr[i]] = [arr[i], arr[j]]
      j--
    }
  }

  ;[arr[i], arr[hi]] = [arr[hi], arr[i]]

  pivtIdx = i

  if (pivtIdx === arr.length - k) return arr[pivtIdx]
  if (pivtIdx < arr.length - k) return quickselect(arr, pivtIdx + 1, hi, k)
  return quickselect(arr, lo, pivtIdx - 1, k)
}
