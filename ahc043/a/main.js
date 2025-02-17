const Pos = class {
    constructor(row, col) {
        this.row = row;
        this.col = col;
    }
};

const EMPTY = -1;
const DO_NOTHING = -1;
const STATION = 0;
const RAIL_HORIZONTAL = 1;
const RAIL_VERTICAL = 2;
const RAIL_LEFT_DOWN = 3;
const RAIL_LEFT_UP = 4;
const RAIL_RIGHT_UP = 5;
const RAIL_RIGHT_DOWN = 6;
const COST_STATION = 5000;
const COST_RAIL = 100;

class UnionFind {
    constructor(n) {
        this.n = n;
        this.parents = new Array(n * n).fill(-1);
    }

    _findRoot(idx) {
        if (this.parents[idx] < 0) {
            return idx;
        }
        this.parents[idx] = this._findRoot(this.parents[idx]);
        return this.parents[idx];
    }

    isSame(p, q) {
        const pIdx = p.row * this.n + p.col;
        const qIdx = q.row * this.n + q.col;
        return this._findRoot(pIdx) === this._findRoot(qIdx);
    }

    unite(p, q) {
        const pIdx = p.row * this.n + p.col;
        const qIdx = q.row * this.n + q.col;
        let pRoot = this._findRoot(pIdx);
        let qRoot = this._findRoot(qIdx);
        if (pRoot !== qRoot) {
            const pSize = -this.parents[pRoot];
            const qSize = -this.parents[qRoot];
            if (pSize > qSize) {
                [pRoot, qRoot] = [qRoot, pRoot];
            }
            this.parents[qRoot] += this.parents[pRoot];
            this.parents[pRoot] = qRoot;
        }
    }
}

function distance(a, b) {
    return Math.abs(a.row - b.row) + Math.abs(a.col - b.col);
}

class Action {
    constructor(type, pos) {
        this.type = type;
        this.pos = pos;
    }

    toString() {
        if (this.type === DO_NOTHING) {
            return "-1";
        } else {
            return `${this.type} ${this.pos.row} ${this.pos.col}`;
        }
    }
}

class Result {
    constructor(actions, score) {
        this.actions = actions;
        this.score = score;
    }

    toString() {
        return this.actions.map(action => action.toString()).join("\n");
    }
}

class Field {
    constructor(N) {
        this.N = N;
        this.rail = Array.from({ length: N }, () => new Array(N).fill(EMPTY));
        this.uf = new UnionFind(N);
    }

    build(type, r, c) {
        console.assert(this.rail[r][c] !== STATION);
        if (1 <= type && type <= 6) {
            console.assert(this.rail[r][c] === EMPTY);
        }
        this.rail[r][c] = type;

        // 隣接する区画と接続
        // 上
        if ([STATION, RAIL_VERTICAL, RAIL_LEFT_UP, RAIL_RIGHT_UP].includes(type)) {
            if (r > 0 && [STATION, RAIL_VERTICAL, RAIL_LEFT_DOWN, RAIL_RIGHT_DOWN].includes(this.rail[r - 1][c])) {
                this.uf.unite(new Pos(r, c), new Pos(r - 1, c));
            }
        }
        // 下
        if ([STATION, RAIL_VERTICAL, RAIL_LEFT_DOWN, RAIL_RIGHT_DOWN].includes(type)) {
            if (r < this.N - 1 && [STATION, RAIL_VERTICAL, RAIL_LEFT_UP, RAIL_RIGHT_UP].includes(this.rail[r + 1][c])) {
                this.uf.unite(new Pos(r, c), new Pos(r + 1, c));
            }
        }
        // 左
        if ([STATION, RAIL_HORIZONTAL, RAIL_LEFT_DOWN, RAIL_LEFT_UP].includes(type)) {
            if (c > 0 && [STATION, RAIL_HORIZONTAL, RAIL_RIGHT_DOWN, RAIL_RIGHT_UP].includes(this.rail[r][c - 1])) {
                this.uf.unite(new Pos(r, c), new Pos(r, c - 1));
            }
        }
        // 右
        if ([STATION, RAIL_HORIZONTAL, RAIL_RIGHT_DOWN, RAIL_RIGHT_UP].includes(type)) {
            if (c < this.N - 1 && [STATION, RAIL_HORIZONTAL, RAIL_LEFT_DOWN, RAIL_LEFT_UP].includes(this.rail[r][c + 1])) {
                this.uf.unite(new Pos(r, c), new Pos(r, c + 1));
            }
        }
    }

    isConnected(s, t) {
        console.assert(distance(s, t) > 4);  // 前提条件
        const stations0 = this.collectStations(s);
        const stations1 = this.collectStations(t);
        for (let station0 of stations0) {
            for (let station1 of stations1) {
                if (this.uf.isSame(station0, station1)) {
                    return true;
                }
            }
        }
        return false;
    }

    collectStations(pos) {
        const stations = [];
        for (let dr of [-2, -1, 0, 1, 2]) {
            for (let dc of [-2, -1, 0, 1, 2]) {
                if (Math.abs(dr) + Math.abs(dc) > 2) {
                    continue;
                }
                const r = pos.row + dr;
                const c = pos.col + dc;
                if (0 <= r && r < this.N && 0 <= c && c < this.N && this.rail[r][c] === STATION) {
                    stations.push(new Pos(r, c));
                }
            }
        }
        return stations;
    }
}

class Solver {
    constructor(N, M, K, T, home, workplace) {
        this.N = N;
        this.M = M;
        this.K = K;
        this.T = T;
        this.home = home;
        this.workplace = workplace;
        this.field = new Field(N);
        this.money = K;
        this.actions = [];
    }

    calcIncome() {
        let income = 0;
        for (let i = 0; i < this.M; i++) {
            if (this.field.isConnected(this.home[i], this.workplace[i])) {
                income += distance(this.home[i], this.workplace[i]);
            }
        }
        return income;
    }

    buildRail(type, r, c) {
        this.field.build(type, r, c);
        this.money -= COST_RAIL;
        this.actions.push(new Action(type, new Pos(r, c)));
    }

    buildStation(r, c) {
        this.field.build(STATION, r, c);
        this.money -= COST_STATION;
        this.actions.push(new Action(STATION, new Pos(r, c)));
    }

    buildNothing() {
        this.actions.push(new Action(DO_NOTHING, new Pos(0, 0)));
    }

    solve() {
        // 接続する人を見つける
        const railCount = Math.floor((this.K - COST_STATION * 2) / COST_RAIL);
        let personIdx = 0;
        while (personIdx < this.M) {
            if (distance(this.home[personIdx], this.workplace[personIdx]) - 1 <= railCount) {
                break;
            }
            personIdx++;
        }
        console.assert(personIdx !== this.M);

        // 駅の配置
        this.buildStation(this.home[personIdx].row, this.home[personIdx].col);
        this.buildStation(this.workplace[personIdx].row, this.workplace[personIdx].col);

        // 線路を配置して駅を接続する
        const r0 = this.home[personIdx].row;
        const c0 = this.home[personIdx].col;
        const r1 = this.workplace[personIdx].row;
        const c1 = this.workplace[personIdx].col;
        // r0 -> r1
        if (r0 < r1) {
            for (let r = r0 + 1; r < r1; r++) {
                this.buildRail(RAIL_VERTICAL, r, c0);
            }
            if (c0 < c1) {
                this.buildRail(RAIL_RIGHT_UP, r1, c0);
            } else if (c0 > c1) {
                this.buildRail(RAIL_LEFT_UP, r1, c0);
            }
        } else if (r0 > r1) {
            for (let r = r0 - 1; r > r1; r--) {
                this.buildRail(RAIL_VERTICAL, r, c0);
            }
            if (c0 < c1) {
                this.buildRail(RAIL_RIGHT_DOWN, r1, c0);
            } else if (c0 > c1) {
                this.buildRail(RAIL_LEFT_DOWN, r1, c0);
            }
        }
        // c0 -> c1
        if (c0 < c1) {
            for (let c = c0 + 1; c < c1; c++) {
                this.buildRail(RAIL_HORIZONTAL, r1, c);
            }
        } else if (c0 > c1) {
            for (let c = c0 - 1; c > c1; c--) {
                this.buildRail(RAIL_HORIZONTAL, r1, c);
            }
        }

        const income = this.calcIncome();
        this.money += income;

        // あとは待機
        while (this.actions.length < this.T) {
            this.buildNothing();
            this.money += income;
        }

        return new Result(this.actions, this.money);
    }
}

function main() {
    const input = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
    const [N, M, K, T] = input[0].trim().split(" ").map(Number);
    const home = [];
    const workplace = [];
    for (let i = 1; i <= M; i++) {
        const [r0, c0, r1, c1] = input[i].trim().split(" ").map(Number);
        home.push(new Pos(r0, c0));
        workplace.push(new Pos(r1, c1));
    }

    const solver = new Solver(N, M, K, T, home, workplace);
    const result = solver.solve();
    console.log(result.toString());
    console.error(`score=${result.score}`);
}

main();
