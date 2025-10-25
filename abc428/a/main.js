function Main(input) {
    const [s, a, b, x] = input[0].split(" ").map(Number);
    let tmp_time = 0;
    let set_count = Math.floor(x / (a + b));    // a + bをセットと考え、x秒までに何セットあるのかの変数.

    let set_remainder = x % (a + b); // set_countセットを終えてx秒までに何秒あるかの変数.

    let set_remainder_a_time = a <= set_remainder ? a : set_remainder; // set_remainderの内、動いている(a)の秒数

    let total_move_distance = ((a * s) * set_count) + set_remainder_a_time * s;

    // console.log(set_count);
    // console.log(set_remainder);
    // console.log(set_remainder_a_time);
    console.log(total_move_distance);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));