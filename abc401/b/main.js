function Main(input) {
    let count_err = 0;

    const n = Number(input[0]);

    let flag = "logout";
    for (let i = 1; i <= n; i++) {
        const s = input[i];
        switch (s) {
            case "logout":
                flag = "logout";
                break;
            case "login":
                flag = "login";
                break;
            case "public":
                break;
            case "private":
                if (flag !== "login") {
                    count_err++;
                }
                break;
        }
    }
    
    console.log(count_err);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));