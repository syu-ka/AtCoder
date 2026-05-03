import java.util.*;
import java.io.*;

public class Main {
    public static void main(String[] args) {
        FastScanner sc = new FastScanner(System.in);
        PrintWriter out = new PrintWriter(System.out);

        // --- ここにコードを書く ---
        // 例: String s = sc.next();
        // out.println(s);

        int X = sc.nextInt();
        out.println(X);

        out.flush(); // これが無いと出力されないので注意.
    }
}

class FastScanner {
    private final BufferedReader reader;
    private StringTokenizer tokenizer;
    public FastScanner(InputStream in) { reader = new BufferedReader(new InputStreamReader(in)); }
    // String型を読み込むメソッド.
    public String next() {
        while (tokenizer == null || !tokenizer.hasMoreElements()) {
            try { tokenizer = new StringTokenizer(reader.readLine()); } catch (IOException e) { return null; }
        }
        return tokenizer.nextToken();
    }
    // int型を読み込むメソッド.
    public int nextInt() { return Integer.parseInt(next()); }
    // long型を読み込むメソッド.
    public long nextLong() { return Long.parseLong(next()); }
    // double型を読み込むメソッド.
    public double nextDouble() { return Double.parseDouble(next()); }
}