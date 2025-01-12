// input[0]が「2 4 6」とかだと分かりやすい.
function Main(input) {
    const test = input[0].split(" ");

    const BS_bisect_left = (arr, key) => {
        let left = 0;
        let right = arr.length - 1;
        let half;
        while (left < right) {
            half = Math.floor((right + left) / 2);

            if (key <= arr[half]) {
                right = half;
            } else if (key > arr[half]) {
                left = half + 1;
            }
        }
        return left;
    }

    const BS_bisect_right = (arr, key) => {
        let left = 0;
        let right = arr.length - 1;
        let half;
        while (left < right) {
            half = Math.floor((right + left) / 2);

            if (key < arr[half]) {
                right = half;
            } else if (key >= arr[half]) {
                left = half + 1;
            }
        }
        return right;
    }
    console.log(BS_bisect_left(test, 2));
    console.log(BS_bisect_left(test, 5));

    console.log(BS_bisect_right(test, 2));
    console.log(BS_bisect_right(test, 5));

}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));