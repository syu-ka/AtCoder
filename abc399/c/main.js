// Union-Find木（Union-Find Tree）.
class UnionFind {
    constructor(N) {
        // par[i]: iの親の番号 (例) par[3] = 2 : 3の親が2
        this.par = Array.from({ length: N }, (_, i) => i); // 最初は全てが根であるとして初期化
    }

    // データxが属する木の根を再帰で得る：root(x) = {xの木の根}
    root(x) {
        if (this.par[x] === x) return x;
        return this.par[x] = this.root(this.par[x]); // 経路圧縮
    }

    // xとyの木を併合
    unite(x, y) {
        const rx = this.root(x); // xの根をrx
        const ry = this.root(y); // yの根をry
        if (rx === ry) return; // xとyの根が同じ(=同じ木にある)時はそのまま
        this.par[rx] = ry; // xの根rxをyの根ryにつける
    }

    // 2つのデータx, yが属する木が同じならtrueを返す
    same(x, y) {
        return this.root(x) === this.root(y);
    }
}

function Main(input) {
    const [n, m] = input[0].split(" ").map(Number);
    // n: 頂点の個数.
    // m: 辺の個数.
    const uf = new UnionFind(n);
    let count = 0; // 閉路無しにするために、削除した辺の個数をカウントする変数.
    for (let i = 0; i < m; i++) {
        const [u, v] = input[i + 1].split(" ").map(Number);
        let hasLoop = false; // 閉路ができるかどうかのフラグ.
        // uとvの根が同じなら、閉路ができるので、削除する.
        if (uf.same(u - 1, v - 1)) {
            hasLoop = true;
            count++;
        }
        // uとvの根が違うなら、閉路はできないので、併合する.
        // ただし、閉路ができる場合は併合しない.
        if (!hasLoop) {
            uf.unite(u - 1, v - 1); // 0-indexedに変換
        }
        // ここまでで、uとvの根が同じなら、閉路ができるので、併合しない.
    }

    // console.log(uf.par); // Union-Findの親配列を出力（デバッグ用）
    console.log(count); // 削除した辺の個数を出力.
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));