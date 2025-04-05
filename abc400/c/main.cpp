// Original JavaScript code:
// function Main(input) {
//     let count = 0;
//     const n = BigInt(input[0]);

//     for (let i = 2; i <= n; i *= 2) {
//         for (let j = 1; j * j * i <= n; j += 2) {
//             // console.log(`j * j * i: ${j} * ${j} * ${i}= ${j * j * i}`);
//             count++;
//         }
//     }

//     console.log(count);
// }

// Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));

#include <iostream>
#include <vector>
#include <string>
#include <cmath>
using namespace std;

void Main() {
    long long count = 0;
    string input;
    getline(cin, input);
    long long n = stoll(input);

    for (long long i = 2; i <= n; i *= 2) {
        for (long long j = 1; j * j * i <= n; j += 2) {
            // cout << "j * j * i: " << j << " * " << j << " * " << i << "= " << j * j * i << endl;
            count++;
        }
    }

    cout << count << endl;
}

int main() {
    Main();
    return 0;
}
